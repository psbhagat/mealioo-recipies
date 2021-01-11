
class RecipiesView {
    goBackButton;
    categoriesSection = document.querySelector('#categories');
    recipesPanel = document.querySelector('.recipes-panel');
    recipeDetailsSection = document.querySelector('#recipe-detailsSection');
    recipeDetails = document.querySelector('.recipe-details');
    leftPaginationArrow = document.querySelector('.pagination-arrow-left');
    rightPaginationArrow = document.querySelector('.pagination-arrow-right');
    spinner = document.querySelector('.loader');
    menu = document.querySelector('.menu');
    subscribeSection = document.querySelector('.subscribe-section');

    addHandlers(controlFunction, handlePaginationMoveLeft, handlePaginationMoveRight) {
        window.addEventListener('load', controlFunction);
        this.leftPaginationArrow.addEventListener('click', handlePaginationMoveLeft);
        this.rightPaginationArrow.addEventListener('click', handlePaginationMoveRight);
    }

    renderRecipes(recipies) {
        let [recipe1, recipe2, recipe3] = recipies;
        this._clear();
        let imageMarkup = ` 
        <div class="col-1-of-3  recipe-card recipe1" >
            <img id="${recipe1.idMeal}" class="recipe1" src="${recipe1.strMealThumb}">
            <h2 class="recipe1">${recipe1.strMeal}<h2>
        </div>

        <div class="col-1-of-3  recipe-card" >
            <img id="${recipe2.idMeal}" class="recipe2" src="${recipe2.strMealThumb}">
            <h2 class="recipe2">${recipe2.strMeal}<h2>
        </div>
        
        <div class="col-1-of-3  recipe-card" >
            <img id="${recipe3.idMeal}" class="recipe3" src="${recipe3.strMealThumb}">
            <h2 class="recipe1">${recipe3.strMeal}<h2>
        </div>
        `
        this.recipesPanel.innerHTML = imageMarkup;
        this.spinner.classList.add('hidden');
        this.categoriesSection.classList.remove('hidden');
        this.menu.classList.remove('hidden');
        this.subscribeSection.classList.remove('hidden');
    }

    createEventHandlers(showRecipe) {
        document.querySelector('.recipe1').addEventListener('click', showRecipe);
        document.querySelector('.recipe2').addEventListener('click', showRecipe);
        document.querySelector('.recipe3').addEventListener('click', showRecipe);
    }

    showRecipeDetails(recipeDetails) {
        if (recipeDetails) {
            this.categoriesSection.classList.add('hidden');
            let ingrediantsMarkup = '<h3>Ingrediants</h3><br>';
            recipeDetails.ingredients.forEach(ing => {
                ingrediantsMarkup = ingrediantsMarkup + `<h5>${ing}</h5><br>`;
            });
            let recipeMarkup = `
            <div class="row">

            <div class="col-1-of-3 recipe-instructions">
            <h1>${recipeDetails.title}</h1>
            <div class="ingredients">${ingrediantsMarkup}</div>
            </div>

            <div class="col-1-of-3 recipe-instructions">
                <div class="back-button row" id="go-button">
                    <ion-icon class="icon" name="arrow-back-outline"></ion-icon><span>Back</span>
                <div>

                <div class="row">
                    <img src="${recipeDetails.sourceUrl}">
                </div>
                
                <div class="row">
                    <h3>Instructions</h3>
                    <p class="instructions">${recipeDetails.instructions}</p>
                </div>
            </div>

            </div>
    
              `;
            this.recipeDetails.innerHTML = recipeMarkup;
            this.recipeDetailsSection.classList.remove('hidden');
            this.menu.classList.add('hidden');
            this.subscribeSection.classList.add('hidden');
            window.scrollTo(0, 0);
        } else {
            alert("Error occured while getting details, please try again!");
        }
    }

    registerBackButton(goBack) {
        this.goBackButton = document.querySelector('#go-button');
        this.goBackButton.addEventListener('click', goBack);
    }

    showRecipesList() {
        this.categoriesSection.classList.remove('hidden');
        this.recipeDetailsSection.classList.add('hidden');
        this.menu.classList.remove('hidden');
        this.subscribeSection.classList.remove('hidden');
        window.scrollTo(0, 0);
    }

    _clear() {
        this.recipesPanel.innerHTML = '';
    }

}

export default new RecipiesView();
