(function() {

  console.log('register');
  var temporarySecret = null;

  function verify() {

    $.ajax({
      type: 'POST',
      url: 'http://localhost:8083/auth/2fa/verify',
      data: JSON.stringify({
        token: $('#token').val(),
        secret: temporarySecret
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
      }
    });

  }

  function generateQrCode(data) {

    $.ajax({
      type: 'POST',
      url: 'http://localhost:8083/auth/2fa/generate',
      data: JSON.stringify({
        otpauthUrl: data.otpauthUrl
      }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      xhrFields: {
        withCredentials: true
      },
      success: function(data) {
        console.log(data);
        $('#qr_code_container').prepend('<img src="' + data.qr + '" />');
        $('#verify').on('click', verify);
      },
      error: function(XHR, textStatus, errorThrow) {
        console.log('error', XHR.responseJSON);
      }
    });

  }

  $('#register').on('click', function() {

    $.ajax({
      type: 'POST',
      url: 'http://localhost:8083/auth/register',
      data: JSON.stringify({
        username: $('#username').val(),
        email: $('#email').val(),
        password: $('#password').val(),
        twoFactorAuthentication : true
      }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      xhrFields: {
        withCredentials: true
      },
      success: function(data) {
        console.log(data);
        if(data.error) {
          console.log(data.error);
          return;
        }
        // temporary base32
        temporarySecret = data.base32;
        generateQrCode(data);
      },
      error: function(XHR, textStatus, errorThrow) {
        console.log('error', XHR.responseJSON);
      }
    });

  });

})();
