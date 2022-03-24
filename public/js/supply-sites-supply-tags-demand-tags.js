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

  const search = function(params) {
    return new Promise((res, rej) => {

      $.ajax({
        type: 'GET',
        url: 'http://localhost:8083/demand-tags',
        data: {
          supply_account_id: supplyAccountId,
          site_id: siteId,
          supply_tag_id: supplyTagId
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
    $('#table_demand_tags')
      .empty()
      .dataTable({
        tableColumns: [{
          key: 'id',
          label: 'ID'
        }, {
          key: 'tier',
          label: 'Tier'
        }, {
          key: 'priority',
          label: 'Priority'
        }, {
          key: 'name',
          label: 'Name'
        }, {
          key: 'rate',
          label: 'Rate'
        }, {
          key: 'targeting',
          label: 'Targeting'
        }, {
          key: 'requests',
          label: 'Requests'
        }, {
          key: 'opportunities',
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

  getSupplyTag({
    id: supplyTagId
  }).then(data => {
    $('#supply_tag_name').text(data.name);
    $('#supply_tag_id').text(data.id);
  }).catch(err => {
    console.log(err);
  });

})();
