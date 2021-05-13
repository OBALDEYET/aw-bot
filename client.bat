@echo off 
set url1=http://localhost:6336/
set url2=https://wallet.wax.io/dashboard/
set url3=https://all-access.wax.io/cloud-wallet/signing/
set url4=https://all-access.wax.io/cloud-wallet/login/
set /p number="Enter the number of screens you want to open: "
for /l %%i in (1, 1, %number%) do (
  start chrome %url1% %url2% %url3% %url4% --profile-directory="Profile %%i" --new-window
)