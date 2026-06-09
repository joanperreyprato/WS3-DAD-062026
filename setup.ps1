Write-Host "🚀 Démarrage de l'installation du projet..." -ForegroundColor Cyan

# 1. Création du .env s'il n'existe pas
if (-not (Test-Path ".\auth-service\.env")) {
    Write-Host " Création du fichier .env pour auth-service à partir de .env.example..." -ForegroundColor Yellow
    Copy-Item ".\auth-service\.env.example" ".\auth-service\.env"
} else {
    Write-Host " Le fichier .env existe déjà." -ForegroundColor Gray
}

# 2. Construction et lancement de Docker
Write-Host " Lancement des services avec Docker Compose..." -ForegroundColor Yellow
docker compose up -d --build

# 3. Attente pour la base de données
Write-Host " Attente de l'initialisation de PostgreSQL (20s)..." -ForegroundColor Yellow
Start-Sleep -Seconds 20

# 4. Exécution de la seed
Write-Host " Remplissage de la base de données (Seed)..." -ForegroundColor Yellow
docker compose exec auth-service npm run seed

Write-Host " Setup terminé ! Votre API est disponible via la Gateway NGINX sur http://localhost:8080" -ForegroundColor Green