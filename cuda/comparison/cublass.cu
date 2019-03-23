#include <iostream>
#include <math.h>
#include <cuda_runtime.h>
#include "cublas_v2.h"
#define M 1000
#define N 2000
#define IDX2C(i,j,ld) (((j)*(ld))+(i))

static __inline__ void modify(
  cublasHandle_t handle,
  float *vector,
  int ldm,
  float alpha
) {

  int start = IDX2C(0, 0, ldm);
  cublasSscal(handle, M * N, &alpha, &vector[start], 1);
}

int main (void) {
  cudaError_t cudaStat;
  cublasStatus_t stat;
  cublasHandle_t handle;

  int i, j;
  float *d_vector, *vector;
  float alpha = 12.0f;

  vector = new float[M * N];

  for (j = 0; j < N; j += 1) {
    for (i = 0; i < M; i += 1) {
      vector[IDX2C(i, j, M)] = 1.0f;
    }
  }

  cudaStat = cudaMalloc(&d_vector, M * N * sizeof(float));
  if (cudaStat != cudaSuccess) {
    printf ("device memory allocation failed");
    return EXIT_FAILURE;
  }

  stat = cublasCreate(&handle);
  if (stat != CUBLAS_STATUS_SUCCESS) {
    printf ("CUBLAS initialization failed\n");
    return EXIT_FAILURE;
  }

  stat = cublasSetMatrix(M, N, sizeof(float), vector, M, d_vector, M);
  if (stat != CUBLAS_STATUS_SUCCESS) {
    printf("data download failed");
    cudaFree(d_vector);
    cublasDestroy(handle);
    return EXIT_FAILURE;
  }

  modify(handle, d_vector, M, alpha);
  stat = cublasGetMatrix(M, N, sizeof(float), d_vector, M, vector, M);
  if (stat != CUBLAS_STATUS_SUCCESS) {
    printf ("data upload failed");
    cudaFree (d_vector);
    cublasDestroy(handle);
    return EXIT_FAILURE;
  }
  cudaFree(d_vector);
  cublasDestroy(handle);

  free(vector);
  cudaDeviceReset();
  return EXIT_SUCCESS;
}
