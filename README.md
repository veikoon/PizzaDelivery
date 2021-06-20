# Pizza Delivery

## Ce projet à été réalisé dans le cadre du cours 20_E3FI_3I_IN10 - Base de données à ESIEE Paris

## Avec la participation de Cathy Truong, Alex Vo et Vincent Monnot

### Le projet

PizzaDelivery est un gestionnaire de commande pour des livraisons de pizzas à domicile. 
Pour la réalisation de ce projet nous avons choisi l'architecture trois tier avec une base de donnée (MySql), une controller en API REST (Java - SpringBoot) ainsi qu'une vue web (Html/CSS - JavaScript).
Cette architecture répond à des besoins modernes, puisqu'elle ne nécessite pas d'installation de logiciel sur son poste fixe et peut ainsi, grâce à un herbergement serveur, être disponnible sur tous les terminaux de la pizzeria.
De plus la technologie API REST associé à son controller communicant par formulaire web JSON le rend universel et facilement adaptable et utilisable par n'importe quel logiciel ou plug-in.

### Installation

Vous devez posséder [Java Se Development kit 11](https://www.oracle.com/fr/java/technologies/javase-jdk11-downloads.html) ainsi que [Maven](https://maven.apache.org/download.cgi) pour la partie controller.
La partie vu est réalisé en JavaScript et ne nécessite qu'un navigateur.

1. Préparation Base de donnée

    Avant de pouvoir build le controller vous devez avoir prépapré la base de donnée.

    Dans notre cas nous utilisons [Mysql](https://www.mysql.com/fr/downloads/).

    * Création de la table :
        ```sql
            CREATE DATABASE pizzadelivery;
        ```
    * Création de l'utilisateur lié à la table :
        ```sql
            CREATE USER 'pizzadelivery'@'localhost' IDENTIFIED BY 'changeme';
            GRANT ALL PRIVILEGES ON pizzadelivery.* TO 'pizzadelivery'@'localhost';
            FLUSH PRIVILEGES;
        ```

    Un fois la table crée merci de renseigner vos informations dans le fichier application.properties --> src/main/resources/application.properties

    Vous avez la possibilité de lancer les scripts de création et d'insertion de données sql qui se trouvent dans assets/ pour avoir des valeurs initiales. 

    NEANMOINS sachez que vous pouvez uniquement créer la Database et ensuite lancer le controller JAVA la base de donné se contruira d'elle même !

2.  Build et empactage du controller 

    Rendez vous à la racide du projet et lancez la commande:
    ```
        mvn clean install
    ```

    Un fois la commande executé vous devriez retrouver un dossier 'target' avec un fichier 'pizzadelivery-0.0.1-SNAPSHOT.jar'.

### Lancement

Assurez vous que votre base de donnée est bien accessible, ensuite executer le controller que vous avez précedemment build ou utiliser le package fourni.
(le package fourni essayera de se connecter à la base de donnée tel qu'elle est configuré dans le fichier application.properties).

Executé la commande suivante : 
```
    java -jar pizzadelivery-0.0.1-SNAPSHOT.jar
```

Ensuite rendez vous dans le dossier pizzawebsite\pages et ouvrez la page index.html

Vous devriez déssormais pouvoir manipuler vos commandes selon vos envies.

Un Swagger est disponible à l'adresse suivante http://localhost:8080/swagger-ui.html elle vous permet de voir toutes les routes en API REST de disponnible. De ce fait toutes les actions possibles qui intéragissent avec la base de données.

Les manipulations basiques tels que l'ajout d'élements dans la base de données sont faisable via l'interface web.