const API = 'https://rickandmortyapi.com/api/character';

const getData = async (id) => {
    const apiURL = id ? `${API}/${id}` : API;

    try {
        const responses = await fetch(apiURL)
            .then( response => response.json())
        return responses;
    } catch (error) {
        console.error( 'Error en la llamada a la API', error );
    }
}

export default getData;