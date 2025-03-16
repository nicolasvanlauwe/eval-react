# EVALUATION REACT – CDA TP

## Objectif

Développer une application web avec React qui reproduit le modèle présenté sur [https://eval-react-cda-tp.vercel.app/](https://eval-react-cda-tp.vercel.app/). Prenez le temps de tester l'application pour prendre connaissance des fonctionnalités à intégrer. Vous utiliserez la logique métier fournie dans les fichiers `auth.js` et `movie.js` dans le dossier services pour simuler le back via le localStorage.

## Ressources Fournies

- `assets/`: Contient le logo à utiliser dans le header de l'application.
- `services/` :
    - `auth.js` : Fournit les fonctions de gestion des utilisateurs.
    - `movie.js` : Fournit les fonctions de gestion des films.
- L'interface à reproduire se trouve sur [https://eval-react-cda-tp.vercel.app/](https://eval-react-cda-tp.vercel.app/).

## Consignes Techniques

- **Développement avec React** : L'application doit être réalisée avec React.
- **Routing** : Utilisez React Router pour gérer la navigation entre les pages.
- **Style** : Utilisez le CSS fourni pour respecter l’apparence du modèle. Découpez-le et intégrez-le dans les composants correspondants en utilisant `CSS Modules`.

## Logique Métier – Explication des Fonctions des Services

Les fichiers `auth.js `et `movie.js` contiennent l'ensemble des fonctions nécessaires pour simuler la persistance des données via le `localStorage`.

### Modèles de données

**User**
```js
{
  id: string;
  nickname: string;
  email: string;
  password: string;
  isLogged: boolean
}
```

**Movie**
```js
{
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  releaseDate: string;
  userId: string;
}
```

### auth.js

- `register(nickname, email, password)`
    - **Rôle :** Enregistrer un nouvel utilisateur.
    - **Fonctionnement :** Vérifie si l'email est déjà utilisé, ajoute l'utilisateur dans le localStorage et définit l'utilisateur comme connecté.

- `login(email, password)`
    - **Rôle :** Authentifier un utilisateur existant.
    - **Fonctionnement :** Vérifie les identifiants fournis, met à jour l'état de connexion de l'utilisateur dans le localStorage et connecte l'utilisateur si les informations sont correctes.

- `logout()`
    - **Rôle :** Déconnecter l'utilisateur.
    - **Fonctionnement :** Met à jour l'état de connexion dans le localStorage et supprime l'utilisateur courant.

- `isAuthenticated()`
    - **Rôle :** Vérifier si un utilisateur est actuellement connecté.
    - **Fonctionnement :** Retourne un booléen basé sur la présence d'un utilisateur connecté dans le localStorage.

- `getCurrentUser()`
    - **Rôle :** Récupérer les informations de l'utilisateur connecté.
    - **Fonctionnement :** Fonction statique qui lit le localStorage pour retourner l'utilisateur actuellement connecté.

### movie.js

- `getAllMovies()`
    - **Rôle :** Récupérer la liste de tous les films.
    - **Fonctionnement :** Lit le localStorage et renvoie la liste des films enregistrés.

- `getMovieById(id)`
    - **Rôle :** Récupérer un film à partir de son identifiant.
    - **Fonctionnement :** Recherche le film dans la liste et renvoie le film correspondant ou une erreur s'il n'est pas trouvé.

- `createMovie(movieData)`
    - **Rôle :** Ajouter un nouveau film.
    - **Fonctionnement :** Crée un film avec un identifiant unique, associe ce film à l'utilisateur connecté et le sauvegarde dans le localStorage.

- `updateMovie(id, movieData)`
    - **Rôle :** Mettre à jour un film existant.
    - **Fonctionnement :** Vérifie que le film appartient à l'utilisateur connecté avant de mettre à jour ses informations dans le localStorage.

- `deleteMovie(id)`
    - **Rôle :** Supprimer un film.
    - **Fonctionnement :** Vérifie que l'utilisateur connecté est bien le propriétaire du film, puis supprime le film du localStorage.

## Déroulement du Projet

1. **Mise en place du projet** : Utilisez le code de depart fourni et installez les dépendances avec `npm install`. Organisez la structure du projet comme suit :
   ```
   ├── public/
   │   └── index.html
   ├── src/
   │   ├── assets/           // Logo
   │   ├── components/       // Composants réutilisables 
   │   ├── pages/            // Pages de l’application 
   │   ├── services/         // Fichiers auth.js et movie.js
   │   ├── styles.css        // Fichier CSS fourni
   │   ├──App.jsx           // Composant principal
   │   └── main.jsx           
   └── package.json
   ```
2. **Intégration de la logique métier** : Importez et utilisez les fonctions des fichiers `auth.js` et `movie.js` dans vos composants React pour gérer l'authentification et la persistance des films.
3. **Interface et Navigation** : Reproduisez l’interface et le comportement du modèle fourni. Assurez-vous de bien respecter le design et les fonctionnalités attendues.

## Livrables

Lien de votre repository public avec le code source complet de l'application React.
