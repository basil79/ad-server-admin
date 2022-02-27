(function() {

  const search = function(params) {

    $.ajax({
      type: 'GET',
      url: 'http://localhost:8083/accounts',
      dataType: 'json',
      xhrFields: {
        withCredentials: true
      },
      success: function(result) {
        console.log(result);
      },
      error: function() {
        console.log('error');
      }
    });

  }

  search();

})();
