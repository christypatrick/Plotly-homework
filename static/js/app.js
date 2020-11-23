// Use D3 fetch to read the JSON file
// The data from the JSON file is arbitrarily named importedData as the argument
d3.json("data/samples.json").then((importedData) => {

  var data = importedData;
});

// function to initially populate the page with the first subject ID
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
  demographics(initial);
  });
};


// function to handle a change in the subject dropdown 
function optionChanged(changeSample) {
  charts(changeSample);
  demographics(changeSample);
};



// Populate Demographic info
function demographics(sample) {
  d3.json("data/samples.json").then((importedData) => {

    var metadata = importedData.metadata;
    var filteredMetadata = metadata.filter(subject => subject.id == sample);
    var filtered = filteredMetadata[0];

    // Get a reference to the Demographics panel
    var demographic = d3.select("#sample-metadata");

    // Clear the demographics panel 
    demographic.html("");

    Object.entries(filtered).forEach(([key, value]) => {
      demographic.append("h5").text(`${key}: ${value}`);
  });
});
};

// function for the bar chart and bubble chart
function charts(sample){
  d3.json("data/samples.json").then((importedData) => {

    var samples = importedData.samples;
    var filteredSamples = samples.filter(subject => subject.id == sample);
    var filtered = filteredSamples[0];
   
    var sample_values = filtered.sample_values;
    var otu_ids = filtered.otu_ids;
    var otu_labels = filtered.otu_labels;


  //Trace1 for the Sample Data
    var trace1 = {
      x: sample_values,
      y: otu_ids.slice(0,10).map(otuID => `OTU ${otuID}`),
      text: otu_labels,
      name: "Samples",
      type: "bar",
      orientation: "h",
      transforms:[{
        type: "sort",
        target: "y",
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

  // Trace2 for the Sample Data
  var trace2 = {
    x: otu_ids,
    y: sample_values,
    text: otu_labels,
    mode: 'markers',
    marker: {
    size: sample_values,
    color: otu_ids,
    colorscale: "Jet"
    },
    type: "bubble"
    
    };

  // data
  var bubbleData = [trace2];

  // Apply the bubble mode to the layout
  var bubbleLayout = {
    title: "Sample Values by OTU IDs",
    xaxis: { title: "OTU IDs" },
    yaxis: { title: "Sample Values"}
  };

   // Render the bar plot to the div tag with id "bar"
   Plotly.newPlot("bar", chartData, layout);

   // Render the scatter plot to the div tag with id "bubble"
   Plotly.newPlot("bubble", bubbleData, bubbleLayout);
  });
};

// Initial load of the charts and metadata panel based on 1st subject ID
subjectID();


