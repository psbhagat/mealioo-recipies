export const state = {
    recipes: [],
    recipieId: 0,
    currentPage: 0,
    noOfRecipies: 0,
    noOfPages: 0
}

export const loadRecipies = async function () {
    try {
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Vegetarian');
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message}`);
        state.recipes = data.meals.slice(0, (Math.floor(data.meals.length / 3) * 3)).reverse();
        state.noOfRecipies = state.recipes.length;
        state.noOfPages = state.noOfRecipies / 3;
        console.log(state.recipes)
        return state.recipes.slice(0, 3);
    } catch (err) {
        return err;
    }
}

export const paginationToLeftSide = function () {
    if (state.currentPage !== 0) {
        state.currentPage = state.currentPage - 1;
        let from = state.currentPage * 3;
        return state.recipes.slice(from, from + 3);
    } else {
        state.currentPage = state.noOfPages - 1;
        return state.recipes.slice(state.noOfRecipies - 3, state.noOfRecipies);
    }
}

export const paginateToRightSide = function () {
    if (state.currentPage !== state.noOfPages - 1) {
        state.currentPage = state.currentPage + 1;
        let from = state.currentPage * 3;
        return state.recipes.slice(from, from + 3);
    } else {
        state.currentPage = 0;
        return state.recipes.slice(0, 3);
    }
}

export const getRecipeDetails = async function (id) {
    try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(`${data.message}`);
        state.recipe = data.meals[0];
        return createRecipe(state.recipe);
    } catch (err) {
        return err;
    }
}

const createRecipe = function (recipe) {
    let ingredients = []
    let i = 0;
    while (i < 20) {
        if (recipe["strIngredient" + i] !== "" && recipe["strIngredient" + i] !== undefined) {
            let ing = recipe["strMeasure" + i] + " " + recipe["strIngredient" + i];
            ingredients.push(ing);
        }
        i++;
    }
    return {
        id: recipe.idMeal,
        title: recipe.strMeal,
        sourceUrl: recipe.strMealThumb,
        instructions: recipe.strInstructions,
        youTubeLink: recipe.strYoutube,
        ingredients: ingredients
    };
};