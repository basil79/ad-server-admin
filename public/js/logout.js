(function() {

  $('#logout').on('click', function(e) {

    e.preventDefault();

    $.ajax({
      type: 'POST',
      url: 'http://localhost:8083/auth/logout',
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      xhrFields: {
        withCredentials: true
      },
      success: function(data) {
        console.log(data);
        location.href = '/';
      },
      error: function(XHR, textStatus, errorThrow) {
        console.log('error', XHR.responseJSON);
      }
    });

  });

  const search = function(params) {

    $.ajax({
      type: 'GET',
      url: 'http://localhost:8083/user-accounts',
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
