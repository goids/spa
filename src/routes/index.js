import Header from '../templates/Header';
import Footer from '../templates/Footer';

import Home from '../pages/Home';
import Character from '../pages/Character';
import Error404 from '../pages/Error404';

import getHash from '../utils/getHash';
import resolveRoute from '../utils/resolveRoute';

const routes = {
    '/': Home,
    '/:id': Character,
    '/contact': 'Contact',
}

const router = async () => {
    const header = null || document.querySelector('header');
    const content = null || document.querySelector('#content');
    const footer = null || document.querySelector('footer');

    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoute(hash);

    let render = routes[route] ? routes[route] : Error404;

    content.innerHTML = await render();
    footer.innerHTML = await Footer();
}


export default router;