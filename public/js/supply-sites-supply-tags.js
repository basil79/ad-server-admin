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

  const search = function(params) {
    return new Promise((res, rej) => {

      $.ajax({
        type: 'GET',
        url: 'http://localhost:8083/supply-tags',
        data: {
          supply_account_id: supplyAccountId,
          site_id: siteId
        },
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

  function renderTable() {
    $('#table_supply_tags')
      .empty()
      .dataTable({
        tableColumns: [{
          key: 'id',
          label: 'ID'
        }, {
          key: 'name',
          label: 'Name',
          formatter: function(cell, value, record) {
            return $('<a href="/supply/' + supplyAccountId + '/sites/' + record.siteId + '/tags/' + record.id + '">' + value + '</a>');
          }
        }, {
          key: 'demandTagCount',
          label: 'Demand Tags'
        }, {
          key: 'rate',
          label: 'Rate'
        }, {
          key: 'requests',
          label: 'Requests'
        }, {
          key: 'opps',
          label: 'Opps'
        }, {
          key: 'impressions',
          label: 'Imp'
        }, {
          key: 'revenue',
          label: 'Revenue'
        }, {
          key: 'req_fill',
          label: 'Req Fill'
        }, {
          key: 'isActive',
          label: 'Active'
        }],
        change: function(params, callback) {

          search({
            from: params.from,
            size: params.size,
            sort: params.sort
          })
            .then(data => {
              callback(data);
            })
            .catch(err => {
              console.log(err);
            });

        },
        pagingStart: 20
      });
  }

  renderTable();

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

})();
