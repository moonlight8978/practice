for /l %%x in (1, 1, 100) do (
  echo %%x
  nvprof vanilla.exe 2>> vanilla.txt
)
