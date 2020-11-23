# Plot.ly Homework - Belly Button Biodiversity

## Introduction:
In this assignment, we built an interactive dashboard to explore the Belly Button Biodiversity dataset, which catalogs the microbes that colonize human navels.

The dataset reveals that a small handful of microbial species (also called operational taxonomic units, or OTUs, in the study) were present in more than 70% of people, while the rest were relatively rare.

## Dashbard with Plot.ly
* D3 was used to read in samples.json

* A horizontal bar chart was created with a dropdown menu to display the top 10 OTUs found in that individual
  * Sample_values are the values for the bar chart
  * OTU_IDs are the labels for the bar chart
  * OTU_IDs are the hover over text for the bar chart
  
 * A bubble chart was created for each sample for the selected individual
    * OTU_IDs are found along the X axis
    * Sample_Values are displayed along the Y axis and are represented by the marker size
    * OTU_IDs are used for the marker colors
    * OTU_IDs are used for the hover over text in the bubble chart
  
 * The selected subject's metadata is displayed in the Demographic Info panel
 
 * The plots and demographic info panel update each time a new sample is selected using the dropdown
  
