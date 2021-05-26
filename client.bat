@echo off 
set url=http://localhost:3000/
set /p number="Enter the number of screens you want to open: "
for /l %%i in (1, 1, %number%) do (
  start chrome %url% --profile-directory="Profile %%i" -new--window
)