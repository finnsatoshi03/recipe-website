import { RecipeAPI } from "./api/recipesAPI";

export const RecipeServices = {
    viewAllRecipe : () => RecipeAPI.get('/recipes'),
}