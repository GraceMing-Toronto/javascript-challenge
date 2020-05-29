// from data.js
var tableData = data;

// select the submit button
var submit = d3.select("#filter-btn");

submit.on("click",function() {

    // prevent the page from refreshing
    d3.event.preventDefault();

    // select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // get the value property of the input element
    var inputValue = inputElement.property("value");

    // log the input
    console.log("input", inputValue);

    // filter the data based on the input
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    // log the filtered data 
    console.log("filtered data", filteredData);

    // select the table body
    var tbody = d3.select("tbody");

    // remove any data from the table to
    tbody.html("")

    // append filtered data to the table 
    filteredData.forEach(function(info) {
        var row = tbody.append("tr");
        Object.entries(info).forEach(function([key,value]) {
            console.log(key,value);
            var cell = row.append("td");
            cell.text(value);
        });
    });
});