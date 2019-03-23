#include <iostream>
#include <math.h>

__global__
void s_scal(int n, float *alpha, float *vector) {
  int index = blockIdx.x * blockDim.x + threadIdx.x;
  if (index < n) {
    vector[index] = vector[index] * (*alpha);
  }
}

int main() {
  int N = 2000000;
  int threads_per_block = 256;
  int blocks_per_grid = (N + 255) / threads_per_block;

  float alpha, *vector, *d_alpha, *d_vector;

  alpha = 12.0;
  vector = new float[N];

  for (int i = 0; i < N; i += 1) {
    vector[i] = 1.0f;
  }

  cudaMalloc(&d_alpha, sizeof(float));
  cudaMalloc(&d_vector, N * sizeof(float));

  cudaMemcpy(d_alpha, &alpha, sizeof(float), cudaMemcpyHostToDevice);
  cudaMemcpy(d_vector, vector, N * sizeof(float), cudaMemcpyHostToDevice);

  s_scal<<<blocks_per_grid, threads_per_block>>>(N, d_alpha, d_vector);

  cudaMemcpy(vector, d_vector, N * sizeof(float), cudaMemcpyDeviceToHost);

  float maxError = 0.0f;
  for (int i = 0; i < N; i++)
    maxError = fmax(maxError, fabs(vector[i]-alpha));
  std::cout << "Max error: " << maxError << std::endl;

  cudaFree(d_alpha);
  cudaFree(d_vector);
  free(vector);

  cudaDeviceReset();

  return 0;
}
