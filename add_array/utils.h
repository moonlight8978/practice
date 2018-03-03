struct timer {
  clock_t time_start;
  clock_t time_finish;
};

void timer_start(timer& timer) {
  timer.time_start = clock();
}

void timer_finish(timer& timer) {
  timer.time_finish = clock();
}

void timer_print(timer& timer) {
  float total_time = (float)(timer.time_finish - timer.time_start) /  CLOCKS_PER_SEC;
  printf("Time taken: %f seconds\n", total_time);
}