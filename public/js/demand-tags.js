(function() {

  const search = function(params) {
    return new Promise((res, rej) => {

      $.ajax({
        type: 'GET',
        url: 'http://localhost:8083/demand-tags',
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
    $('#table_demand_tags')
      .empty()
      .dataTable({
        tableColumns: [{
          key: 'id',
          label: 'ID'
        }, {
          key: 'name',
          label: 'Name'
        }, {
          key: 'tier',
          label: 'Tier'
        }, {
          key: 'priority',
          label: 'Priority'
        }, {
          key: 'rate',
          label: 'Rate'
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
