var columnDefs = [
  { field: 'athlete', width: 150, suppressSizeToFit: true },
  {
    field: 'age',
    headerName: 'Age',
    width: 90,
    minWidth: 50,
    maxWidth: 150,
  },
  { field: 'country', width: 120 },
  { field: 'year', width: 90 },
  { field: 'date', width: 110 },
  { field: 'sport', width: 110 },

];

var gridOptions = {
  defaultColDef: {
    resizable: true,
  },
  columnDefs: columnDefs,
  rowData: null,
  onColumnResized: function (params) {
    console.log(params);
  },
};

function sizeToFit() {
  gridOptions.api.sizeColumnsToFit();
}

function autoSizeAll(skipHeader) {
  var allColumnIds = [];
  gridOptions.columnApi.getAllColumns().forEach(function (column) {
    allColumnIds.push(column.colId);
  });

  gridOptions.columnApi.autoSizeColumns(allColumnIds, skipHeader);
}

// setup the grid after the page has finished loading
document.addEventListener('DOMContentLoaded', function () {
  var gridDiv = document.querySelector('#contractorsTable');
  new agGrid.Grid(gridDiv, gridOptions);

  agGrid
    .simpleHttpRequest({
      url: 'https://www.ag-grid.com/example-assets/olympic-winners.json',
    })
    .then(function (data) {
      gridOptions.api.setRowData(data);
      sizeToFit();
    });
});
