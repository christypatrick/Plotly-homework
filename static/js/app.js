// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("data/samples.json").then((importedData) => {
  // console.log(importedData);
  var data = importedData;
});

function subjectID() {

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

  var initial = names[0];
  charts(initial);
  });
};



function optionChanged(changeSample) {
  charts(changeSample);
}


function charts(sample){
  d3.json("data/samples.json").then((importedData) => {

    var samples = importedData.samples;
    var filteredSamples = samples.filter(subject => subject.id == sample);
    var filtered = filteredSamples[0];
    // console.log(filteredSamples);

    var otu_ids = filtered.otu_ids;
    var otu_labels = filtered.otu_labels;
    var sample_values = filtered.sample_values.slice(0,10);

  //Trace1 for the Sample Data
    var trace1 = {
      x: sample_values,
      y: otu_ids,
      text: otu_labels,
      name: "Samples",
      type: "bar",
      orientation: "h",
      transforms:[{
        type: "sort",
        target: "x",
        order: "descending"
      }]
    };

    // data
    var chartData = [trace1];

    // Apply the group bar mode to the layout
    var layout = {
      title: "Top 10 Samples",
      xaxis: { title: "Sample Values" },
      yaxis: { title: "OTU IDs"}
  };

   // Render the plot to the div tag with id "plot"
   Plotly.newPlot("bar", chartData, layout);

});
};

subjectID();
//charts();


// // Slice the first 10 objects for plotting
// otu_ids = otu_ids.slice(0, 10);

//   

  // function updatePage(){
//   

//   var dropdownID = dropdown.property("id");
//   var dropdownValue = dropdown.property("value")
//   console.log(dropdownValue);
// }
//
