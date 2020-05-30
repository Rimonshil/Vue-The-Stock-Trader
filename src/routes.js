import Home from './components/Home.vue';
import portfolio from './components/portfolio/portfolio.vue';
import stocks from './components/stock/stocks.vue';


export const routes = [
    { path: '/', component: Home},
    { path: '/portfolio', component: portfolio},
    { path: '/stocks', component: stocks}
];