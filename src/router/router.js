const router = [{
  path: '/',
  component: () =>
    import ('../components/view'),
  children: [{
      name: 'index',
      path: '/',
      component: () =>
        import ('../pages/index')
    },
    {
      name: 'scene',
      path: '/scene',
      component: () =>
        import ('../pages/scene')
    },
    {
      name: 'info',
      path: '/info',
      component: () =>
        import ('../pages/info')
    }
  ]
}];

export default router;