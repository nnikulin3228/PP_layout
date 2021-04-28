(() => {
  const routes = {},
    defaultRoute = 'home';

  routes['home'] = {
    url: '#/home',
    templateUrl: '../pages/home.html'
  };


  $.router
    .setData(routes)
    .setDefault(defaultRoute);

  $.when($.ready)
    .then(() => {
      $.router.run('.builder-content',
                    'home'
                    );
    })
})();
