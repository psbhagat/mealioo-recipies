# **Mealioo Recipes**

A sample food blog design created using vanilla javascript using MVC architecture. 

Recipes are fetched from TheMealDB API, and are displayed on the screen in a paginated manner. You can see 3 recipes at a time, on clicking on any recipe, you will be taken to the details page, where you will see the entire recipe, these details are fetched using another api using the id from the list. To navigate, across pages, use the arrows below the images. A sample subscribe and footer section is also added.

## **Development Setup**

Install parcel as a dev dependency: npm i parcel@next --save-dev

Install node-sass as  a dev dependency: npm install node-sass --save-dev

Install other dependencies from package.json: npm install

##**To Run**:  npm start

The code will be live-reload on http://localhost:1234/

##**To enable live reload of sass changes**: npm run compile-sass

**Thanks** to [TheMealDB API](https://www.themealdb.com/api.php) for creating the meals API, which I haved used.

## **Screenshots**

**Main Page**
![mealioo-recipes](./main-page.png)

