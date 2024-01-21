import { RecipeAPI } from "./api/recipesAPI";

export const RecipeServices = {
    viewAllRecipe : () => RecipeAPI.getAllRecipes('/recipes'),
    getTopPicksRecipe: () => RecipeAPI.getTopPicksRecipes('/recipe/toppicks'),
}