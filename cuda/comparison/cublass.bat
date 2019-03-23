for /l %%x in (1, 1, 100) do (
  echo %%x
  nvprof cublass.exe 2>> cublass.txt
)
