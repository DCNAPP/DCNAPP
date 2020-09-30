@echo off &setlocal EnableDelayedExpansion


echo  _____     ______     __   __     ______     ______   ______
echo /\  __-.  /\  ___\   /\  -.\ \   /\  __ \   /\  == \ /\  == \
echo \ \ \/\ \ \ \ \____  \ \ \-.  \  \ \  __ \  \ \  _-/ \ \  _-/
echo  \ \____-  \ \_____\  \ \_\\ \_\  \ \_\ \_\  \ \_\    \ \_\
echo   \/____/   \/_____/   \/_/ \/_/   \/_/\/_/   \/_/     \/_/ 

echo.

echo THIS WILL MAKE A COPY OF ALL FILES INSIDE SRC AND UNIT TEST FOLDER
echo.

echo DO YOU WANT TO CONTINUE Y/N 

set /p start="$ "

:: IF START == Y OR y
if "%start%" == "y" set result=true
if "%start%" == "Y" set result=true

:: IF START == N OR n
if "%start%" == "n" set result=false
if "%start%" == "N" set result=false


if "%result%" == "true" (
    cd ../ && Xcopy /E /I src test
    :: /E – This option makes sure that empty subfolders are copied to the destination
    :: /I – Avoids prompting if the destination is a folder or file. Not required if you are adding a trailing ‘\’ to the destination folder
    echo.
    echo == DONE ==
)

if "%result%" == "false" exit

pause