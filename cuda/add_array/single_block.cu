#include <iostream>
#include <math.h>
#include <time.h>

#include <utils.h>

#define gpuErrchk(ans) { gpuAssert((ans), __FILE__, __LINE__); }
inline void gpuAssert(cudaError_t code, const char *file, int line, bool abort=true)
{
   if (code != cudaSuccess) 
   {
      fprintf(stderr,"GPUassert: %s %s %d\n", cudaGetErrorString(code), file, line);
      if (abort) exit(code);
   }
}

__global__
void add(int n, float* x, float* y) {
  int index = threadIdx.x;
  int stride = blockDim.x;

  for (int i = index; i < n; i += stride) {
    y[i] += x[i];
  }
}

int main() {
  timer timer;
  int N = 1000000;
  int threads_per_block = 256;
  int blocks_per_grid = 1;
  float *x, *y, *d_x, *d_y;
  
  x = new float[N];
  y = new float[N];
  
  cudaMalloc(&d_x, N * sizeof(float)); 
  cudaMalloc(&d_y, N * sizeof(float));
  
  for (int i = 0; i < N; i += 1) {
    x[i] = 1.0f;
    y[i] = 2.0f;
  } 
  
  cudaMemcpy(d_x, x, N * sizeof(float), cudaMemcpyHostToDevice);
  cudaMemcpy(d_y, y, N * sizeof(float), cudaMemcpyHostToDevice);
  
  timer_start(timer);
  add<<<blocks_per_grid, threads_per_block>>>(N, d_x, d_y);
  cudaDeviceSynchronize();
  timer_finish(timer);
  timer_print(timer);
  
  cudaMemcpy(y, d_y, N * sizeof(float), cudaMemcpyDeviceToHost);
  
  // Check for errors (all values should be 3.0f)
  float maxError = 0.0f;
  for (int i = 0; i < N; i++)
    maxError = fmax(maxError, fabs(y[i]-3.0f));
  std::cout << "Max error: " << maxError << std::endl;

  cudaFree(d_x);
  cudaFree(d_y);
  free(x);
  free(y);
  cudaDeviceReset();
  
  return 0;
}