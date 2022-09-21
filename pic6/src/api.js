const API_URL = import.meta.env.VITE_API_URL;

export const getImages = async () => {
    const response = await fetch(`${API_URL}/photos`)
    const responseJson = await response.json();

    return responseJson;
};