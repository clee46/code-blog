var repos = {};

repos.all = [];

repos.requestAll = function(callback) {
  $.ajax({
    url: '/github/users/clee46/repos',
    type: 'GET',
    success:  function(data, message, xhr) {
      repos.all = data;
    }
  }).done(callback);
};
