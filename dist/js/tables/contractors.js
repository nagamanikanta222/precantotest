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
  headerName: 'Amt Remaining'
 },  
  { field: "Receipt",
  headerName: 'Receipt' },
  { field: "LatestUpdate",
  headerName: 'Latest Update'  },
];

// specify the data
var rowData = [
  { PO: "PO12771", Vendor: "H&H", StartDate: "01-02-2020", EndDate:"31-01-2021", SubDept: "Hardware" , Amt:"0.4M", Receipt:"15-07-2020", LatestUpdate:"image" },
  { PO: "PO12771", Vendor: "H&H", StartDate: "01-02-2020", EndDate:"31-01-2021", SubDept: "Hardware" , Amt:"0.4M", Receipt:"15-07-2020", LatestUpdate:"image" },
  { PO: "PO12771", Vendor: "H&H", StartDate: "01-02-2020", EndDate:"31-01-2021", SubDept: "Hardware" , Amt:"0.4M", Receipt:"15-07-2020", LatestUpdate:"image" },
  { PO: "PO12771", Vendor: "H&H", StartDate: "01-02-2020", EndDate:"31-01-2021", SubDept: "Hardware" , Amt:"0.4M", Receipt:"15-07-2020", LatestUpdate:"image" },
  { PO: "PO12771", Vendor: "H&H", StartDate: "01-02-2020", EndDate:"31-01-2021", SubDept: "Hardware" , Amt:"0.4M", Receipt:"15-07-2020", LatestUpdate:"image" },
  { PO: "PO12771", Vendor: "H&H", StartDate: "01-02-2020", EndDate:"31-01-2021", SubDept: "Hardware" , Amt:"0.4M", Receipt:"15-07-2020", LatestUpdate:"image" },
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



