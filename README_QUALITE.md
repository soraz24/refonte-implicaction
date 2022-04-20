PARTIE I: SONARQUEBE

SonarQube est un outil d’analyse statique qui a pour but de mesurer la qualité du code d’un applicatif. Pour un projet donné, il fournit des métriques portant sur la qualité du code et permet d’identifier précisément les points à corriger (code mort, bugs potentiels, non-respect des standards, manque ou surcharge de commentaires…)
SonarQube classe les défauts logiciels selon 3 catégories :

• Les bugs : anomalies évidentes du code. Ils impactent la fiabilité (reliability) de l’application.

• Les vulnérabilités : faiblesses du code pouvant nuire au système. Elles impactent la sécurité de l’application.

• Les « code smells » (mauvaises pratiques de conception logicielle qui conduisent à l’apparition de défauts). Ils impactent la maintenabilité de l’application.

Pour la qualité du code projet Refonte-Implication, nous avons utilisé Sonarquebe sous windows. Dans cette partie, sera decrite les avantages, inconvenients et difficultés rencontrés lors du test ainsi que le coût s'il faut l'utiliser.

Prerequis

1°) Installation des logiciels suivant: - JDK 11 - Sonarquebe (suivre la documentation officièlle sur https://docs.sonarqube.org/latest/ ou https://www.troispointzero.fr/le-blog/sonarqube/) - Docker

2°) Une fois les deux logiciels installés, configurer les variables d'environnement du JDK11 et Sonarque depuis votre machine et suivre les instructions lors de l'installation ainsi que la docummentation

Problèmes Rencontrés lors de l'installation et exécution:

- Problème avec le WLS 2 car la version précédente installer sur la machine sous windows11 avait du jDK8 et non le JDK11
- L'exécution de la qualité du code avec Sonarquebe depuis github, nous a demandé le lien d'un organisme enregistré chez github (soit, le lien d'une entrzprise et non d'un comptte personnel github).

Avantage:

- SonarQube est un logiciel en mode SAAS (software as a service) : il est donc supporté par tous les systèmes d’exploitation (Windows, Mac, OS Mobiles …) car il est accessible depuis un navigateur web Internet (comme Chrome ou Firefox)
- Il est compatible actuellement avec 29 langages de programmation.
- SonarQube peut se connecter à d’autres logiciels comme :Bitbucket, Apache Maven, Jenkins, Travis CI etc..

Coût:

Le tarif de SonarQube est de 0 euros par mois et par utilisateur (ce prix peut évoluer en fonction du nombre d’utilisateurs, d’options activées …)
• Voici les différents prix de SonarQube:
– Essai gratuit
– Standard : 0,00 euros par utilisateur et par mois
– Professionnel : –
– Business : –
– Entreprise : –
Les éditeurs de logiciels proposent souvent des réductions en fonction du nombre de licences utilisateurs, ce qui permet de réaliser des économies de 5 à 25%. Les versions d’essai sont par ailleurs souvent limitées dans le temps / dans leurs fonctionnalités.

Conclusion:

Les tests ont été effectués depuis Sonarquebe cloud pour éviter les problèmes liés à l'organisme.
Sonarquebe est un bon logiciel aide à bonne écriture du code et lisibles, avoir les bonnes pratiques qui vont permettre à mieux effectuer la maintenance ainsi la comprehension.


PARTIE II CYPRESS

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
Jenkins est un outil logiciel open source d’intégration continue développé en Java. Après une présentation du concept d’intégration continue, découvrez à quoi sert Jenkins, quels sont ses avantages et ses différences avec les autres outils similaires, ainsi que son fonctionnement.
Configuration
Fichier: Jenkinsfile
Pluguin: maven integration, github integration, nodejs
AVANTAGE

- Outil open source
- Serveur d'automatisation robuste et facile à déployer. Rend possible mes flux d'automatisation des tests avec peu d'efforts et sans frais d'abonnement.
- Nous apprécions surtout le fait qu'il s'agisse d'un logiciel open source bénéficiant d'un énorme soutien communautaire. Nous utilisons des plugins Jenkins pour déployer nos applications sur Azure, GCP et même Oracle Cloud. Il existe des plugins pour presque tous les outils utilisés. J'aime beaucoup le fait que vous pouvez exécuter des pipelines entièrement automatisés, planifiés ou exécutés avec des paramètres pour modifier les résultats en créant des scripts de type modèle.
  INCONVENIENTS
  
  
 PARTIE III K6

K6 est un qui se propose d’aider les développeurs à détecter des régressions de performance afin de construire des systèmes robustes.
L’outil nous permet en outre de faire du smoke-testing, du load-testing, du stress-testing ou encore du soak-testing d’API.

Caractéristiques et avantages

- OPEN SOURCE (logiciel gratuit)
- Mesurer la vitesse, la stabilité et la précision du site
- Identifier les problèmes et les résoudre
- Améliorer les capacités de chargement et d’optimisation du site web
- Améliorer la qualité du code et la fonctionnalité du logiciel
- Répondre aux attentes des utilisateur
- Protocoles pris en charge : HTTP/1.1, HTTP/2, WebSocket, et plus encore.
- Compatibilité : Fonctionne avec Mac OS, Linux et Windows.
- Intégration : S’intègre à plus de 20 services, dont Kafka, Azure, GraphQL, Grafana, Datadog, GitLab, CircleCI, GitHub..

Coûts:

Le prix de k6 est de 0 € par mois et par utilisateur mais ce tarif est susceptible d’évoluer car différentes options sont proposées par l’éditeur de ce logiciel SaaS afin de répondre aux besoins de ses utilisateurs : nombre de licences, fonctions supplémentaires, add-ons … 
Il propose un essai gratuit pour 50 tests, tandis que les plans payants commencent à 59 $ par mois pour 200 utilisateurs et 1200 tests par an.

Voici les différents tarifs de k6 (pricing / forfaits) :
– Essai gratuit : 0 € (limité dans le temps / dans les fonctionnalités)
– Standard : 0 € / mois / utilisateur
– Pro : –
– Entreprise : –
– Premium : –

Nos Tests K6 effectuées sur ce projet:  

Les tests de ce projet avec K6 ont été effectués sous windows apès l'installation du septup de K6 telecharger  sur internet (IL est également possible de faire avec la commande winget install k6).Au total 9 tests ont été effectués pour tester la robustesse, performence ,vitesse et stabilité du projet( ces tetsts sont retrouvés dans le dossier K6-Test à la racine du projet)

Problèmes Rencontrés

les problèmes que nous avons rencontrés sont plutot liés au projet (lancement du projet et non à K6). Il a fallu créer un profile du projet sur Intelligi, aller dans le dossier plugin du projet > se prositioner sur sprint-boot:run pour excuter la partie back end du projet car la commande mvn spring-boot:run -Dspring-boot.run.profiles=local communiqué dans le readme du projet ne marche pas pour excuter le projet , il ya des erreurs suite au choix du profile par defaut dont certains variables d'environnement ne sont definis dans celui-ci.

Conclusion:

k6 est adapté aux besoins des entreprises : Logiciels PME 

Cette application est conseillée pour les métiers : Logiciels Direction – Management 

Ce progiciel cloud est utilisé dans les secteurs : Logiciels Généraliste 
