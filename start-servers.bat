@echo off
echo ========================================
echo Iniciando Revolucion Otaku Oficial
echo ========================================
echo.
echo Frontend: http://localhost:3001
echo Backend:  http://localhost:3000
echo.
echo ========================================

REM Iniciar el backend en una nueva ventana
start "Backend - Puerto 3000" cmd /k "cd backend && npm run dev"

REM Esperar 3 segundos para que el backend se inicie
timeout /t 3 /nobreak > nul

REM Iniciar el frontend en una nueva ventana
start "Frontend - Puerto 3001" cmd /k "npm run dev"

echo.
echo Servidores iniciados correctamente!
echo.
echo Presiona cualquier tecla para cerrar esta ventana...
pause > nul
