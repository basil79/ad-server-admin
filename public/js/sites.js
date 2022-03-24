(function() {

  const search = function(params) {
    return new Promise((res, rej) => {

      $.ajax({
        type: 'GET',
        url: 'http://localhost:8083/sites',
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
    $('#table_sites')
      .empty()
      .dataTable({
        tableColumns: [{
          key: 'id',
          label: 'ID'
        }, {
          key: 'name',
          label: 'Name',
          formatter: function(cell, value, record) {
            return $('<a href="/supply/' + record.supplyAccountId + '/sites/' + record.id + '">' + value + '</a>');
          }
        }, {
          key: 'domain',
          label: 'Domain'
        }, {
          key: 'supplyTagCount',
          label: 'Supply Tags'
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
