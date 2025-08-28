Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Iniciando Revolucion Otaku Oficial" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Frontend: http://localhost:3001" -ForegroundColor Green
Write-Host "Backend:  http://localhost:3000" -ForegroundColor Green
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan

# Detener cualquier proceso de Node.js que pueda estar ejecutándose
Write-Host "Deteniendo procesos existentes..." -ForegroundColor Yellow
taskkill /f /im node.exe 2>$null

# Iniciar el backend en una nueva ventana
Write-Host "Iniciando Backend en puerto 3000..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd backend; npm run dev" -WindowStyle Normal

# Esperar 3 segundos
Start-Sleep -Seconds 3

# Iniciar el frontend en una nueva ventana
Write-Host "Iniciando Frontend en puerto 3001..." -ForegroundColor Yellow
Start-Process powershell -ArgumentList "-NoExit", "-Command", "npm run dev" -WindowStyle Normal

Write-Host ""
Write-Host "Servidores iniciados correctamente!" -ForegroundColor Green
Write-Host ""
Write-Host "Presiona cualquier tecla para cerrar esta ventana..." -ForegroundColor Cyan
$null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
