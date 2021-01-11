'use strict';
import * as Model from './model.js';
import recipiesView from './views/recipiesView.js';

const controlCategories = async function () {
    let recipies = await Model.loadRecipies();
    recipiesView.renderRecipes(recipies);
    recipiesView.createEventHandlers(showRecipe);
}

const handlePaginationMoveLeft = function () {
    let recipies = Model.paginationToLeftSide();
    recipiesView.renderRecipes(recipies);
    recipiesView.createEventHandlers(showRecipe);
}

const handlePaginationMoveRight = function () {
    let recipies = Model.paginateToRightSide();
    recipiesView.renderRecipes(recipies);
    recipiesView.createEventHandlers(showRecipe);
}

const goBack = function () {
    recipiesView.showRecipesList();
}

const showRecipe = async function (selectedRecipeElement) {
    const recipeDetails = await Model.getRecipeDetails(selectedRecipeElement.srcElement.id);
    recipiesView.showRecipeDetails(recipeDetails);
    recipiesView.registerBackButton(goBack);
}

const init = function () {
    recipiesView.addHandlers(controlCategories, handlePaginationMoveLeft, handlePaginationMoveRight);

}

init();