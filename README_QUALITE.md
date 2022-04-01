PARTIE SONARQUEBE

Cette partie nous permet d'illustrer la qualité du Code du projet Refonte-Implication ainsi les problèmes rencontrés lors de l'exécution du logiciel.
Pour effectuer les tests avec SonarQuebe, nous avons débuté avec le téléchargement et l'installation de la dernière version des logiciels suivants:
- JDK 11
- Sonarquebe
- Docker

- Une fois les deux logiciels installés, configurer les variables d'environnement du JDK11 et Sonarque depuis votre machine.
- 

Problèmes Rencontrés
- Problème avec le WLS 2 car la version précédente installer sur la machine etait du jDK8

Conclusion

PARTIE CYPRESS

Cypress permet de vérifier que l’application fonctionne correctement et ainsi garantir la meilleure expérience utilisateur possible.

Installation et configuration :

npm install cypress --save-dev

Une fois l’installation terminée, on ajoute une commande dans le champ scripts du package.json.
{
"scripts": {
"cypress: "cypress open"
},
}

on lance ensuite yarn cypress

L’exécution du script yarn cypress n’a pas seulement généré des fichiers de tests, mais aussi une architecture placée à la racine du code de notre application.

.
├── cypress
│ ├── fixtures
│ ├── integration
│ ├── plugin
│ └── support
├── src
│ └── ...
├── cypress.json
├── ...

Le fichier cypress.json est le fichier de configuration sur lequel Cypress va se baser pour faire les tests.
on y ajoute notre url :
{
"baseUrl": "http://localhost:8081"
}

il suffit ensuite de créer nos fichier de tests dans le dossier de Cypress cypress/integration

PARTIE JENKINS

PARTIE K6
