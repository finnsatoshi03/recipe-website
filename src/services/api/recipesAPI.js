import { URL, PORT } from "../config";

const API_BASE_URL = `${URL}${PORT}`


export const RecipeAPI = {
    get: async (endpoint) => {
        const response = await fetch(`${API_BASE_URL}${endpoint}`);
        const data = await response.json();
        return data;
    }, 
    
}

