for /l %%x in (1, 1, 100) do (
  echo %%x
  nvprof vanilla_single.exe 2>> vanilla_single.txt
)
