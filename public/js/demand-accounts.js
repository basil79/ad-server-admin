(function() {

  const search = function(params) {
    return new Promise((res, rej) => {

      $.ajax({
        type: 'GET',
        url: 'http://localhost:8083/demand-accounts',
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
    $('#table_demand_accounts')
      .empty()
      .dataTable({
        tableColumns: [{
          key: 'id',
          label: 'ID'
        }, {
          key: 'name',
          label: 'Name',
          formatter : function(cell, value, record) {
            return $('<a href="/demand/' + record.id + '">' + value + '</a>');
          }
        }, {
          key: 'advertiserCount',
          label: 'Advertisers'
        }, {
          key: 'demandTagCount',
          label: 'Demand Tags'
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
          key: 'request_fill',
          label: 'Req Fill'
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
