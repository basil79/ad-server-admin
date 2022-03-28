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

  const getSite = function(params) {
    return new Promise((res, rej) => {

      $.ajax({
        type: 'GET',
        url: 'http://localhost:8083/sites/' + params.id,
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

  const getSupplyTag = function(params) {
    return new Promise((res, rej) => {

      $.ajax({
        type: 'GET',
        url: 'http://localhost:8083/supply-tags/' + params.id,
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
  }).catch(err => {
    console.log(err);
  });

  getSite({
    id: siteId
  }).then(data => {
    $('#site_name').text(data.name);
    $('#site_id').text(data.id);
  }).catch(err => {
    console.log(err);
  });

  getSupplyTag({
    id: supplyTagId
  }).then(data => {
    $('#supply_tag_name').text(data.name);
    $('#supply_tag_id').text(data.id);

    $('#input_supply_tag_vast').val(adServerURL + '/vast/' + data.id);

  }).catch(err => {
    console.log(err);
  });

})();
