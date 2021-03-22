import getHash from '../utils/getHash';
import getData from '../utils/getData';

const Character = async () =>{
    const id = getHash();
    const character = await getData(id);
    const view = `
        <div class='Character-inner'>
            <article class='Characters-card'>
                <img src='${character.image}' alt='${character.name}'>
                <h2>${character.name}</h2>
            </article>
            <article class='Characters-card'>
                <span>Episodies:${character.episode.length}</span>
                <span>Status:${character.status}</span>
                <span>Species:${character.species}</span>
                <span>Gender:${character.gender}</span>
                <span>Origin:${character.origin.name}</span>
                <span>Last Location:${character.location.name}</span>
            </article>
        </div>
    `;

    return view;
}

export default Character;