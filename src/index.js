//ARCHIVO DE PUNTO DE ENTRADA

import App from './containers/App.svelte';

const app = new App({
    target: document.querySelector('main')//estamos emoujando nuestra app dentro del html
});

export default app;
