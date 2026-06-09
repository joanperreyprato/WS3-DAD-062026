# **Workshop 3 - Prosit JWT / Docker**

## **Commande de test Curl**



***Maintenant tout est hébergé avec docker donc plus de localhost !***









**Nous allons d’abord utiliser la commande de login afin de récupérer un token JWT valide, qui nous permettra ensuite de tester la route /validate et nos routes sécurisées.**

*(localhost plus valide)*





* curl.exe -X POST http://localhost:3000/api/auth/login -H "Content-Type: application/x-www-form-urlencoded" -d "email=bob5@example.com\&password=Password123!"





* curl.exe http://localhost:3000/api/auth/validate -H "Authorization: Bearer RECUP\_LE\_TOKEN\_GENERER\_AVEC\_LA\_Commande\_AU\_DESSUS"





**Recommençons avec nos commandes cURL pour vérifier le bon fonctionnement de notre environnement. Nous allons créer un utilisateur, le connecter, puis récupérer son jeton d’accès, bien sûr les liens ont changé grace à notre reverse-proxy :**



* curl.exe -X POST http://localhost:8080/register -H "Content-Type: application/x-www-form-urlencoded" -d "email=bob5@example.com\&password=Password123!"



* **reponse:**

  {"email":"bob3@example.com","role":"user"}

  

* curl.exe -X POST http://localhost:8080/login -H "Content-Type: application/x-www-form-urlencoded" -d "email=bob5@example.com\&password=Password123!"

  

* **reponse:**

  {"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiZW1haWwiOiJib2JAZXhhbXBsZS5jb20iLCJyb2xlIjoidXNlciIsImlhdCI6MTc1OTQ5NjEwNywiZXhwIjoxNzU5NDk5NzA3fQ.WSar8PibrGv9D-KZHFF6y7OdEDii89fjgG6yqgmM2m4"}

  

**Maintenant, reprenez l’ensemble des commandes effectuées précédemment pour vous connecter, puis essayez d’accéder au service privé de cette manière. Si le retour est conforme, félicitations : vous venez de créer votre première architecture complexe  !**

  

* curl -X GET http://localhost:8080/private -H "Authorization: Bearer VOTRE\_TOKEN\_ICI"


* **reponse:**
  
  {"msg":"Welcome on private service"}
