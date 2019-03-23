#include <iostream>
#define M 50
#define tpb 256
#define bpg 1

__device__
bool is_same_block(int element_i, int other_i) {
  return ((element_i + 10) / 10 == (other_i + 10) / 10);
}

__global__
void modify(int n, int *vector) {
  __shared__ int s[M];

  int i = threadIdx.x;
  if (i < n) {
    s[i] = i * 10 + 123 - 456;

    __syncthreads();
    if (i + 1 < n) {
      int val = s[(i + 1)];
      vector[i] = val;
    } else {
      vector[i] = 0;
    }
  }
}

int main() {
  int *vector, *d_vector;

  vector = new int[M];
  for (int i = 0; i < M; i += 1) {
    vector[i] = 0;
  }

  cudaMalloc(&d_vector, M * sizeof(int));
  cudaMemcpy(d_vector, vector, M * sizeof(int), cudaMemcpyHostToDevice);

  modify<<<bpg, tpb>>>(M, d_vector);

  cudaMemcpy(vector, d_vector, M * sizeof(int), cudaMemcpyDeviceToHost);

  for (int i = 0; i < M; i += 1) {
    printf("%d\t", vector[i]);
  }

  cudaFree(d_vector);
  free(vector);

  cudaDeviceReset();

  return 0;
}
