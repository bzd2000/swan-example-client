export default [
  {
    route   : '',
    name    : 'index',
    moduleId: 'page/index',
    nav     : true,
    auth    : true,
    title   : 'Home'
  },
  {
    route   : '/login',
    name    : 'login',
    moduleId: 'page/auth/login',
    nav     : true,
    auth    : false,
    title   : 'Login'
  },
  {
    route: 'logout',
    name: 'logout',
    moduleId: 'page/auth/logout',
    title: 'Logout'
  },
  {
    route: '/users',
    name: 'users',
    moduleId: 'page/user/list',
    nav: true,
    auth: true,
    title: 'User lists'
  },
  {
    route: '/users/create',
    name: 'users/create',
    auth: true,
    moduleId: 'page/user/create-list',
    title: 'Create user'
  },
  {
    route: '/lists',
    name: 'lists',
    moduleId: 'page/todo/list',
    nav: true,
    auth: true,
    title: 'Todo lists'
  },
  {
    route: '/lists/create',
    name: 'lists/create',
    auth: true,
    moduleId: 'page/todo/create-list',
    title: 'Create list'
  },
  {
    route   : '/datatable',
    name    : 'datatable',
    moduleId: 'page/datatable/demo',
    nav     : true,
    auth    : true,
    title   : 'Datatable'
  },
  {
    route   : '/pager',
    name    : 'pager',
    moduleId: 'page/pager/demo',
    nav     : true,
    auth    : true,
    title   : 'Pager'
  },
  {
    route   : '/association-select',
    name    : 'association-select',
    moduleId: 'page/association-select/demo',
    nav     : true,
    auth    : true,
    title   : 'Association select'
  },
  {
    route   : '/paged',
    name    : 'paged',
    moduleId: 'page/paged/demo',
    nav     : true,
    auth    : true,
    title   : 'Paged'
  },
  {
    route   : '/form',
    name    : 'form',
    moduleId: 'page/form/demo',
    nav     : true,
    auth    : true,
    title   : 'Form'
  },
  {
    route   : '/charts',
    name    : 'charts',
    moduleId: 'page/charts/demo',
    nav     : true,
    auth    : true,
    title   : 'Charts'
  }
];
