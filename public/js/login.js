(function() {

  console.log('login');

  $('#login').on('click', function() {


    $.ajax({
      type: 'POST',
      url: 'http://localhost:8083/auth/login',
      data: JSON.stringify({
        username: $('#username').val(),
        password: $('#password').val(),
        token: $('#token').val()
      }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      xhrFields: {
        withCredentials: true
      },
      success: function(data) {
        console.log(data);
      },
      error: function(XHR, textStatus, errorThrow) {
        console.log('error', XHR.responseJSON);
        if(XHR.responseJSON.error == 'please provide 2fA token') {
          console.log('required 2FA');
        }
      }
    });

  });

})();