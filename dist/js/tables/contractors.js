// var columnDefs = [
//   { field: 'athlete', width: 150, suppressSizeToFit: true },
//   {
//     field: 'age',
//     headerName: 'Age',
//     width: 90,
//     minWidth: 50,
//     maxWidth: 150,
//   },
//   { field: 'country', width: 120 },
//   { field: 'year', width: 90 },
//   { field: 'date', width: 110 },
//   { field: 'sport', width: 110 },

// ];

// var gridOptions = {
//   defaultColDef: {
//     resizable: true,
//   },
//   columnDefs: columnDefs,
//   rowData: null,
//   onColumnResized: function (params) {
//     console.log(params);
//   },
// };

// function sizeToFit() {
//   gridOptions.api.sizeColumnsToFit();
// }

// function autoSizeAll(skipHeader) {
//   var allColumnIds = [];
//   gridOptions.columnApi.getAllColumns().forEach(function (column) {
//     allColumnIds.push(column.colId);
//   });

//   gridOptions.columnApi.autoSizeColumns(allColumnIds, skipHeader);
// }

// // setup the grid after the page has finished loading
// document.addEventListener('DOMContentLoaded', function () {
//   var gridDiv = document.querySelector('#contractorsTable');
//   new agGrid.Grid(gridDiv, gridOptions);

//   agGrid
//     // .simpleHttpRequest({
//     //   url: 'https://www.ag-grid.com/example-assets/olympic-winners.json',
//     // })
//     .then(function (data) {
//       gridOptions.api.setRowData(data);
//       sizeToFit();
//     });
// });


var columnDefs = [
  { field: "PO" },
  { field: "Vendor",
  headerName: 'Vendor Name'},

  { field: "StartDate",
  headerName: 'Star Date' },

  { field: "EndDate",
  headerName: 'Star Date' },

  { field: "SubDept",
  headerName: 'Sub-Dept' },

  { field: "Amt",
  headerName: 'Amt ($)'
 },  

 { field: "AmtRemaining",
 headerName: 'Amt Remaining'
}, 
  { field: "Receipt",
  headerName: 'Last Receipt Date' },
  { field: "LatestUpdate",
  
  headerName: 'Latest Update'  },
];


// specify the data
var rowData = [
  { PO: "PO12771", Vendor: "H&H", StartDate: "2/1/2020", EndDate:"1/31/2021", SubDept: "Hardware" , Amt:"0.4M", AmtRemaining:"0.2M", Receipt:"7/15/2020", LatestUpdate:"" },
  { PO: "PO13052", Vendor: "ABC Software", StartDate: "5/1/2020", EndDate:"12/31/2021", SubDept: "Core" , Amt:"0.2M", AmtRemaining:"0.1M", Receipt:"12/15/2020", LatestUpdate:"" },
  { PO: "PO24411", Vendor: "Group 123", StartDate: "12/1/2020", EndDate:"1/15/2021", SubDept: "Core" , Amt:"0.2M", AmtRemaining:"0.0M", Receipt:"12/15/2020", LatestUpdate:"" },

];

// let the grid know which columns and what data to use
var gridOptions = {
  columnDefs: columnDefs,
  rowData: rowData,
  rowHeight: 30,
  headerHeight: 30,
  
  
};

function sizeToFit() {
    gridOptions.api.sizeColumnsToFit();
   }

// lookup the container we want the Grid to use
var eGridDiv = document.querySelector('#contractorsTable');

// create the grid passing in the div to use together with the columns & data we want to use
new agGrid.Grid(eGridDiv, gridOptions);
sizeToFit();


var defaultColDef = {
  flex: 1,
  resizable: true,
  sortable: true,
  wrapText: true,
  autoHeight: true,
  headerComponentParams: {
      template:
          '<div class="ag-cell-label-container" role="presentation">' +
          '  <span ref="eMenu" class="ag-header-icon ag-header-cell-menu-button"></span>' +
          '  <div ref="eLabel" class="ag-header-cell-label" role="presentation">' +
          '    <span ref="eSortOrder" class="ag-header-icon ag-sort-order"></span>' +
          '    <span ref="eSortAsc" class="ag-header-icon ag-sort-ascending-icon"></span>' +
          '    <span ref="eSortDesc" class="ag-header-icon ag-sort-descending-icon"></span>' +
          '    <span ref="eSortNone" class="ag-header-icon ag-sort-none-icon"></span>' +
          '    <span ref="eText" class="ag-header-cell-text" role="columnheader" style="white-space: normal;"></span>' +
          '    <span ref="eFilter" class="ag-header-icon ag-filter-icon"></span>' +
          '  </div>' +
          '</div>',
  },
};


