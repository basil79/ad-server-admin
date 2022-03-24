(function() {

  const getSupplyAccount = function(params) {
    return new Promise((res, rej) => {

      $.ajax({
        type: 'GET',
        url: 'http://localhost:8083/supply-accounts/' + params.id,
        dataType: 'json',
        xhrFields: {
          withCredentials: true
        },
        success: function(result) {
          res(result);
        },
        error: function(XHR) {
          rej(XHR.responseJSON.error);
        }
      });

    });
  }

  getSupplyAccount({
    id: supplyAccountId
  }).then(data => {
    $('#supply_account_name').text(data.name);
    $('#supply_account_id').text(data.id);

    $('#input_supply_account_name').val(data.name);
  }).catch(err => {
    console.log(err);
  });

})();
