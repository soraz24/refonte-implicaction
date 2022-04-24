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
Les tests ont été effectués depuis Sonarquebe cloud (dans l'organisation créér dans le compte personnel github) pour éviter les problèmes liés à l'organisme.
Sonarquebe est un bon logiciel aide à bonne écriture du code et lisibles, avoir les bonnes pratiques qui vont permettre à mieux effectuer la maintenance ainsi la comprehension.


PARTIE II: CYPRESS

Cypress est une application de test automatisée frontale créée pour le Web moderne. Cypress est construit sur une nouvelle architecture et s’exécute dans la même boucle d’exécution que l’application testée. En conséquence, Cypress fournit des tests meilleurs, plus rapides et plus fiables pour tout ce qui s’exécute dans un navigateur. Cypress fonctionne sur n’importe quel framework frontal ou site Web.

Avantages
- logiciel collaboratif et en ligne.

Principales caractéristiques : bibliothèque javascript framework routage intégré javascript mvc modèle mvc développement web outils de développement html dynamique routage intégré développement javascript bibliothèque javascript système modulaire framework ui interface utilisateur développement web mappage d’arguments.

Voici les principales fonctionnalités et spécifications de cette application :
- Assistance
- Support technique en ligne
- Cypress peut se connecter à d’autres logiciels comme :Zapier
- Cypress est un logiciel en mode SAAS (software as a service) : il est donc supporté par tous les systèmes d’exploitation (Windows, Mac, OS Mobiles …) car il est accessible depuis un navigateur web Internet (comme Chrome ou Firefox).

Coût:

Le tarif de Cypress est de 0 euros par mois et par utilisateur (ce prix peut évoluer en fonction du nombre d’utilisateurs, d’options activées …)
Les éditeurs de logiciels proposent souvent des réductions en fonction du nombre de licences utilisateurs, ce qui permet de réaliser des économies de 5 à 25%. Les versions d’essai sont par ailleurs souvent limitées dans le temps / dans leurs fonctionnalités

Voici les différents prix de Cypress

– Essai gratuit
– Standard : 0,00 euros par utilisateur et par mois
– Professionnel : –
– Business : –
– Entreprise : –

Nos Tests avec Cypress: 
Les tests effectués avec Cypress,nous ont permis de voir et evaluer la fiabilité, rapidité et l'éfficacité des tests.

Conclusion: Effectuer les tests avec cypress est un gagne temps et permet à rendre l'interface de l'utilisateur accessible.


PARTIE III: JENKINS

Jenkins est un outil logiciel d’intégration continu. Il s’agit d’un logiciel open source, développé à l’aide du langage de programmation Java. Il permet de tester et de rapporter les changements effectués sur une large base de code en temps réel. En utilisant ce logiciel, les développeurs peuvent détecter et résoudre les problèmes dans une base de code et rapidement. Ainsi les tests de nouveaux builds peuvent être automatisés, ce qui permet d’intégrer plus facilement des changements à un projet, de façon continue. L’objectif de Jenkin est en effet d’accélérer le développement de logiciels par le biais de l’automatisation. Jenkins permet l’intégration de toutes les étapes du cycle de développement.


Configuration de ce projet avec Jenkins

Fichier: Jenkinsfile
Pluguin: maven integration, github integration, nodejs, sonarqube scanner
Installation depuis le volume: docker, docker-compose, k6

AVANTAGE

 - open source fédérant une vaste communauté proposant sans cesse de nouvelles améliorations et autres perfectionnements. 
-  Le logiciel est facile à installer, et plus de 1000 plugins sont disponibles. Si un plugin correspondant à vos besoins n’existe pas, vous pouvez le créer vous-même et le partager avec la communauté. 
-  Autre avantage : Jenkins est également gratuit. Enfin, en tant qu’outil développé avec Java, il peut être porté sur toutes les principales plateformes logicielles.
-  Compatible avec les systèmes Windows, Linus, Mac,IOS...

Nombre total de fonctionnalités pour Jenkins : 13

 - API
 - Authentification
-  Contrôles/Permissions d'accès
-  Déploiement continu      -   Gestion de versions
- Gestion des applications  -  Gestion des pipelines
-  Gestion des tests        - Gestion des tests de logiciels
- Livraison continue        - Monitoring
- Projections               - Tableau de bord d'activités

 Coût: Jenkins est gratuit, elle coute 0,00€ par utilisateur.
 
 Conclusion: Jenkins est un bon outil pour les developpeurs car, il facilite la vie au niveau des tests par l'automatimatisation et c'est rapide.En plus de celà ,elle permet plusieurs fonctionnalités qui peuvent etre utiles au besoin de chacun des utilisateurs l'utilisant.
 
  
  
 PARTIE IV: K6

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

les problèmes que nous avons rencontrés sont plutot liés au projet (lancement du projet et non à K6). 
1- Il a fallu créer un profile du projet sur Intelligi, aller dans le dossier plugin du projet > se prositioner sur sprint-boot:run pour excuter la partie back end du projet car la commande mvn spring-boot:run -Dspring-boot.run.profiles=local communiqué dans le readme du projet ne marche pas pour excuter le projet , il ya des erreurs suite au choix du profile par defaut dont certains variables d'environnement ne sont definis dans celui-ci.

2- En se connectant depuis le site web avec les identifiants de l'utilisateur mis dans le test K6, nous avons un token et l'utilisateur est connecté, par contre
en effectuant les tests K6, l'authentification se passe bien mais aucun Token n'est renvoyé, il ya plutôt une erreur 403. Même les tests effectué sur postman dans l'erreur 403 avec les mêmes valuers d'identifiants de l'utilisateurs.


Conclusion:

k6 est adapté aux besoins des entreprises : Logiciels PME 
Cette application est conseillée pour les métiers : Logiciels Direction – Management 
Ce progiciel cloud est utilisé dans les secteurs : Logiciels Généraliste 
