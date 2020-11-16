// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("data/samples.json").then((importedData) => {
    console.log(importedData);
    var data = importedData;

    // Sort the data array using the sample_values value
  // data.sort(function(a, b) {
  //   return parseFloat(b.sample_values) - parseFloat(a.sample_values);
  });

// function updatePage(){
//   

//   var dropdownID = dropdown.property("id");
//   var dropdownValue = dropdown.property("value")
//   console.log(dropdownValue);
// }

function subjectID(){

  // Get a reference to the subject ID dropdown
  var dropdown = d3.select("#selDataset");

  // Populate the Subject ID dropdown
  d3.json("data/samples.json").then((importedData) => {
    var names = importedData.names;
    names.forEach((name) => {
      dropdown
      .append("option")
      .text(name)
      .property("value", name);
    });
  });
};

//
subjectID();


//sample_values as bar chart values
//out_ids as labels for the bar chart
//otu_labels as the hovertext for the chart
  // values in dropdown = names

  // // Slice the first 10 objects for plotting
  // data = data.slice(0, 10);

  // // Reverse the array due to Plotly's defaults
  // data = data.reverse();

  // // Trace1 for the Sample Data
  // var trace1 = {
  //   x: data.map(row => row.sample_values),
  //   y: data.map(row => row.otu_ids),
  //   text: data.map(row => row.otu_ids),
  //   name: "Greek",
  //   type: "bar",
  //   orientation: "h"
  // };

  // // data
  // var chartData = [trace1];

  // // Apply the group bar mode to the layout
  // var layout = {
  //   title: "Greek gods search results",
  //   margin: {
  //     l: 100,
  //     r: 100,
  //     t: 100,
  //     b: 100
  //   }
  // };

  // // Render the plot to the div tag with id "plot"
  // Plotly.newPlot("bar", chartData, layout);
