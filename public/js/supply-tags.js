(function() {

  const search = function(params) {
    return new Promise((res, rej) => {

      $.ajax({
        type: 'GET',
        url: 'http://localhost:8083/supply-tags',
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
          label: 'Name'
        }, {
          key: 'demand-tags',
          label: 'Waterfall Size'
        }, {
          key: 'partner',
          label: 'Partner'
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
          key: 'opp_rate',
          label: 'Opp Rate'
        }, {
          key: 'request_fill',
          label: 'Req Fill'
        }, {
          key: 'opp_fill',
          label: 'Opp Fill'
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

})();
