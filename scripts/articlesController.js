var articlesController = {};

articlesController.index = function() {
  console.log('-> articlesController.index');
  webDB.init();
  Article.loadAll(articlesView.index);
};