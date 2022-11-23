# Project Name

Cocktail Generator
<br>

## Description

This is an app where the user can discover new and fun cocktails recipes wheter filtering according to their preferences or what they have available on their fridge. Cocktail Generator has an option for everyone and every occasion! Don't know what to drink? We also have a random cocktail option. If you would like to experiment you can also create and save your own drink.

## User Stories

- **404:** As a user I get to see a 404 page with a feedback message if I try to reach a page that does not exist so that I know it's my fault.
- **Signup:** As an anonymous user I can sign up on the platform so that I can start creating my cocktails and manage my favourites.
- **Login:** As a user I can login to the platform so that I can access my profile and start creating my cocktails and manage my favourites.
- **Logout:** As a logged in user I can logout from the platform so no one else can use it.
- **Profile Page**: As a logged in user I can visit my profile page so that I can access the edit page and see the list of favourites I have created.
- **Edit Profile:** As a logged in user I can access the edit profile page so that I can edit the profile I created.
- **Add Cocktail:** As a logged in user I can access the create cocktail page so that I can create a new drink.
- **Edit Cocktail:** As a logged in user I can access the edit cocktail page so that I can edit the cocktail I created.
- **View Articles:** As a user I want to discover articles about drinks and cocktails.

## Backlog

<br>

# Client / Frontend

## React Router Routes (React App)

| Path                              | Component                  | Permissions                | Behavior                                          |
| --------------------------------- | -------------------------- | -------------------------- | ------------------------------------------------- |
| `/login`                          | LoginPage                  | anon only `<AnonRoute>`    | Login form, navigates to home page after login.   |
| `/signup`                         | SignupPage                 | anon only `<AnonRoute>`    | Signup form, navigates to home page after signup. |
| `/`                               | HomePage                   | public `<Route>`           | Home page.                                        |
| `/edit-user`                      | EditProfilePage            | user only `<PrivateRoute>` | User profile.                                     |
| `/user-favorites/:id`             | EditFavoritesPage          | user only `<PrivateRoute>` | Edit user favorites.                              |
| `/create-cocktail`                | Create Cocktail            | user only `<PrivateRoute>` | Created cocktail details.                         |
| `/edit-cocktail/:id`              | Create Cocktail            | user only `<PrivateRoute>` | Edit cocktail created.                            |
| `/generated-cocktail`             | Generated Cocktail         | Public `<Route>`           | Edit cocktail created.                            |
| `/generated-cocktail-details/:id` | Generated Cocktail details | user only `<PrivateRoute>` | Edit cocktail created.                            |
| `/articles`                       | Articles                   | Public                     | Discover about cocktails                          |
| `/articles-details/:id`           | Articles Detils            | Public                     | Discover about cocktails                          |

## Components

Pages:

- HomePage
- LoginPage

- SignupPage

- CreatedCocktailDetailsPage
- FavoritesPage

- EditProfilePage

- ArticlesPage
- ArticlesDetailsPage

Components:

- Navbar
- CocktailCard
- Articles
- Footer

## Services

- **Auth Service**

  - `authService` :
    - `.login(user)`
    - `.signup(user)`
    - `.logout()`
    - `.validate()`

- **Cocktail Service**

  - `cocktailService` :
    - `.getCocktail()`
    - `.getDetailsCocktail(id)`

- **User Service**

  - `userService` :
    - `.createCocktail(id)`
    - `.putEditCocktail(id)`
    - `.deleteCocktail(id)`
    - `.putEditProfile(id)`
    - `.postSaveCocktail(id)`
    - `.putEditFavorites(id)`
    - `.deleteFavorites(id)`

- **Articles Service**

  - `articleService` :
    - `.getArticles()`
    - `.getDetailsArticles()`

<br>

# Server / Backend

## Models

**User model**

```javascript
{
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  userProfile: { type: Schema.Types.ObjectId, ref:'User' },
  createdCocktails: [ { type: Schema.Types.ObjectId, ref:'CreatedCocktails' } ]
  favoriteCocktails: {
    img: type: String,
    [ { type: Schema.Types.ObjectId, ref:'FavoriteCocktails' } ]
}
```

**Cocktail model**

```javascript
 {
   name: { type: String, required: true },
   img: { type: String },
   description: { type: String },
   ingredients: [ { type: Schema.Types.ObjectId, ref:'Ingredients' } ],
   recipe: { type: String },

 }
```

**Article model**

```javascript
{
  title: { type: String, required: true },
  description: { type: String, required: true },
  recipe: { type: String },
  img: { type: String },
}
```

<br>

## API Endpoints (backend routes)

| HTTP Method | URL                    | Request Body                 | Success status | Error Status | Description                                                                                                                     |
| ----------- | ---------------------- | ---------------------------- | -------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| GET         | `/auth/profile `       | Saved session                | 200            | 404          | Check if user is logged in and return profile page                                                                              |
| POST        | `/auth/signup`         | {name, email, password}      | 201            | 404          | Checks if fields not empty (422) and user not exists (409), then create user with encrypted password, and store user in session |
| POST        | `/auth/login`          | {username, password}         | 200            | 401          | Checks if fields not empty (422), if user exists (404), and if password matches (404), then stores user in session              |
| POST        | `/auth/logout`         |                              | 204            | 400          | Logs out the user                                                                                                               |
| GET         | `/api/tournaments`     |                              |                | 400          | Show all tournaments                                                                                                            |
| GET         | `/api/tournaments/:id` |                              |                |              | Show specific tournament                                                                                                        |
| POST        | `/api/tournaments`     | { name, img, players }       | 201            | 400          | Create and save a new tournament                                                                                                |
| PUT         | `/api/tournaments/:id` | { name, img, players }       | 200            | 400          | edit tournament                                                                                                                 |
| DELETE      | `/api/tournaments/:id` |                              | 201            | 400          | delete tournament                                                                                                               |
| GET         | `/api/players/:id`     |                              |                |              | show specific player                                                                                                            |
| POST        | `/api/players`         | { name, img, tournamentId }  | 200            | 404          | add player                                                                                                                      |
| PUT         | `/api/players/:id`     | { name, img }                | 201            | 400          | edit player                                                                                                                     |
| DELETE      | `/api/players/:id`     |                              | 200            | 400          | delete player                                                                                                                   |
| GET         | `/api/games`           |                              | 201            | 400          | show games                                                                                                                      |
| GET         | `/api/games/:id`       |                              |                |              | show specific game                                                                                                              |
| POST        | `/api/games`           | {player1,player2,winner,img} |                |              | add game                                                                                                                        |
| PUT         | `/api/games/:id`       | {winner,score}               |                |              | edit game                                                                                                                       |

<br>

## API's
https://www.thecocktaildb.com/api.php
<br>

## Packages
- Toastyfier
- Styled components
<br>

## Links

### Figma

[Here is the sketch of our project and the development of our ideas]
https://www.figma.com/file/rfvY5wnplsN9unbJhumQQR/Untitled?email=nat.caze%40gmail.com&is_not_gen_0=true&resource_type=file


### Git

The url to your repository and to your deployed project

[Client repository Link](https://github.com/screeeen/project-client)

[Server repository Link](https://github.com/screeeen/project-server)

[Deployed App Link](http://heroku.com)

### Slides

[Slides Link](http://slides.com) - The url to your _public_ presentation slides

### Contributors

Gabriela Meirelles - <https://github.com/gabimeirellesm> - <https://www.linkedin.com/in/gabriela-meirelles-martins/>
Nathalie Cazemajou - <https://github.com/natcaze> - <https://www.linkedin.com/in/nathalie-cazemajou/>
