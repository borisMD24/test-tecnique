**Test de Front-End : Création d'une Page Paginée avec Filtres de Recherche**

 

**Objectif :** Concevoir et mettre en œuvre une application front-end utilisant les technologies modernes pour créer une page paginée avec des fonctionnalités de recherche avancées.

**Explications de mon résultat :** j'ai utilisé l'API TMDB. Il est à priori impossible de faire une recherche par Genre et par nom en même temps.

 

**Technologies Requises :**

- React 

- Axios (pour les requêtes HTTP) // INSTALLED

- React Query (pour la gestion des données) // INSTALLED

- Material-UI (MUI) (pour les composants UI) // INSTALLED

- Redux (pour la gestion de l'état global, facultatif) // INSTALLED

 

**Tâches à Réaliser :**

 

1. **Initialisation du Projet :**

   - Créez un nouveau projet React en utilisant `create-react-app` ou une configuration similaire.
   ✅ avec vite

   - Installez les dépendances nécessaires : Axios, React Query, Material-UI, Redux (si requis).
   ✅ je n'ai pas utilisé Redux, le state management est beaucoup trop simple pour devoir utiliser Redux.

 

2. **Mise en Place de l'API :**

   - Choisissez une API publique (par exemple, une API de données factices) ou une API pertinente pour le projet.
   ✅ with tmdb api

   - Utilisez Axios pour effectuer des requêtes HTTP vers l'API et récupérer les données.
   ✅

 

3. **Configuration de React Query :**

   - Utilisez React Query pour gérer la gestion des données et le caching.
   ✅
    
   - Créez des requêtes pour obtenir les données paginées de l'API.
   ✅

 

4. **Conception de l'Interface Utilisateur :**

   - Utilisez les composants Material-UI (MUI) pour créer une interface utilisateur propre et conviviale.
   ✅

   - Créez une barre de recherche permettant aux utilisateurs de filtrer les résultats.
   ✅
 

5. **Mise en Place de la Pagination :**

   - Affichez les résultats paginés sur la page en utilisant les données gérées par React Query.
   ✅

   - Ajoutez des boutons de pagination pour naviguer entre les pages de résultats.
   ✅

 

6. **Implémentation des Filtres de Recherche :**

   - Utilisez les filtres de recherche pour permettre aux utilisateurs de restreindre les résultats en fonction de critères spécifiques (par exemple, date, catégorie, etc.).
   ✅

   - Mettez à jour les requêtes React Query en fonction des filtres sélectionnés.
   ✅
 

7. **Intégration de Redux (Facultatif) :**

   - Si vous choisissez d'utiliser Redux, configurez le store et les reducers.

   - Utilisez Redux pour gérer l'état global de l'application, si nécessaire.

 

8. **Tests, Design et Qualité de Code :**

   - Assurez-vous que l'application est réactive, qu'elle a un design attrayant et qu'elle fonctionne correctement.
   ✅ j'ai voulu faire une interface simple et minimaliste, design que je trouvais pertinent pour l'application du au grand nombre de couleurs présentes dans les affiches de film.

   - Respectez les bonnes pratiques de développement React, notamment en divisant les composants en éléments réutilisables.
   ✅

   - Utilisez des noms de variables et de fonctions explicites, commentez votre code si nécessaire et assurez-vous que le code est propre et lisible.
   ✅
 

9. **Évaluation :**

   - Votre projet sera évalué en fonction du design de l'interface utilisateur, de la fonctionnalité de pagination et de recherche, de la qualité du code, de la gestion de l'état (si Redux est utilisé), de la performance de l'application, et de la capacité à utiliser efficacement les bibliothèques mentionnées.

 

**Soumission :**

   - Une fois votre projet terminé, veuillez fournir le code source via un dépôt Git (GitHub, GitLab, etc.) ou tout autre moyen spécifié.

 

N'oubliez pas de prendre en compte les principes de conception, la performance et la lisibilité du code tout au long du processus de développement. Bonne chance !