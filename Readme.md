# **Workshop 3 - Prosit JWT / Docker**


## **Installation rapide (Après un git clone)**

Puisque ce projet est entièrement conteneurisé avec Docker, vous n'avez **pas besoin de lancer `npm install`** localement sur votre machine ! Docker s'occupe de tout télécharger et installer à l'intérieur des conteneurs lors de la phase de `build`.

### Méthode 1 : Le script magique (Recommandé sous Windows)
Si vous êtes sous Windows et utilisez PowerShell, placez-vous à la racine du projet et lancez simplement :
```powershell
.\setup.ps1
```
*Ce script va automatiquement créer le fichier `.env`, lancer les conteneurs Docker, attendre que la base de données soit prête, et insérer les données de base (seed).*

### Méthode 2 : Lancement manuel
Si vous préférez le faire manuellement (ou si vous n'utilisez pas PowerShell) :

1. Créez le fichier d'environnement : copiez le fichier `auth-service/.env.example` et renommez-le en `auth-service/.env`.
2. Lancez les conteneurs avec Docker Compose :
   ```bash
   docker compose up -d --build
   ```
3. Attendez quelques secondes que PostgreSQL s'initialise, puis peuplez la base de données avec nos utilisateurs de test :
   ```bash
   docker compose exec auth-service npm run seed
   ```

---



# RAPPEL



**LANCER LES SERVICES :**

PS workshop-jwt> docker compose up -d



**ARRETER LES SERVICES :**

docker compose down



**Verifier les container :**

docker compose ps
