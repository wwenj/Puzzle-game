export default [{
    name: 'index',
    path: '/',
    // component: resolve => require(['Views/Game'], resolve),
    component: resolve => require(['Views/Game2'], resolve)
},
// {
//     name: 'game',
//     path: '/game',
//     component: resolve => require(['Views/Game2'], resolve)
// },
{
    name: 'game1',
    path: '/game1',
    component: resolve => require(['Views/Game3'], resolve)
}
];
