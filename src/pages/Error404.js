const Error404 = () => {
    const view = `
        <div class='error-page'>
            <h1>404</h1>
            <h2>Error 404, page not found.</h2>
            <p>Please <span class='go-back'> Go back </span> or <span class='go-home'>Go to Home</span> </p>
        </div>
    `;

    return view;
}


// const goBack = document.querySelector('.error-page .go-back');
// const goHome = document.querySelector('.error-page .go-home');

// const goToBack = () => {
//     history.back();
// }

// const goToHome = () => {
//     history.pushState({ 'page_name' : 'Home SPA'}, 'Home', '/');
// }

// goBack.addEventListener('click', goToBack);
// goHome.addEventListener('click', goToHome);


export default Error404;