# plotly-graph-image

**plotly-graph-image** is a Node.js library that allows you to generate high-quality PNG images from Plotly figures using Puppeteer. You can easily convert Plotly charts to images for embedding in reports, documents, or web pages.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#basic-example)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)
- [Support](#support)

## Installation

You can install **plotly-graph-image** via npm or yarn.

### Using npm:
```bash
npm install plotly-graph-image
```
### Using yarn:
```bash
yarn add plotly-graph-image
```
## Usage
Once installed, you can use `plotly-graph-image` to generate a PNG image from a Plotly figure.

## Basic Example
Below is an example of how to use `plotly-graph-image` to create a PNG image of a Plotly chart and save it to your local filesystem.

```javascript
const { generatePlotlyImage } = require('plotly-graph-image');
const fs = require('fs');

async function run(figure, imgOpts, name) {
    try {
        const imageBuffer = await generatePlotlyImage(figure, imgOpts);
        const fileName = `${name}.png`;
        const filePath = `./${fileName}`;

        fs.writeFileSync(filePath, imageBuffer);

        console.log("Image saved as:", fileName);
    } catch (error) {
        console.error(error);
    }
}

// Define a Plotly figure
let figure = {
    "data": [
        {
            "x": [1, 2, 3],
            "y": [10, 15, 13],
            "type": "scatter",
            "mode": "lines+markers",
            "name": "Dataset A",
            "marker": {"color": "red"},
            "legendgroup": 3
        },
        {
            "x": [1, 2, 3],
            "y": [12, 14, 10],
            "type": "scatter",
            "mode": "lines",
            "name": "Dataset B",
            "marker": {"color": "blue"},
            "line": { "dash": "dot" },
            "legendgroup": 3
        }
    ],
    "layout": {
        "title": "Graph",
        "autosize": true,
        "font": 30
    }
};

// Define image options (width, height)
let imgOpts = {
    "width": 1000,
    "height": 500
};

// Call the function to generate the image
run(figure, imgOpts, 'graphFile');
```
This example will save the generated image as `graphFile.png` in the current directory.

## API Documentation
`generatePlotlyImage(figure, imgOpts)`
Generates a PNG image from a Plotly figure and options.

### Parameters:

* `figure` (Object): The Plotly figure object, which contains the data and layout for the chart.
* `imgOpts` (Object): Options for generating the image, including:
    * `width` (Number): The width of the generated image (default: 1000).
    * `height` (Number): The height of the generated image (default: 600).
### Returns:

* A Promise that resolves to a Buffer containing the PNG image.

### Example Usage:

```javascript
const { generatePlotlyImage } = require('plotly-graph-image');

async function generateImage(figure) {
    const imgOpts = { width: 1200, height: 800 };
    const imageBuffer = await generatePlotlyImage(figure, imgOpts);
    // Do something with the imageBuffer (e.g., save it to a file)
}
```
## Contributing
Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Write tests for any new functionality.
4. Ensure all existing tests pass.
5. Open a pull request.

## License
This project is licensed under the MIT License - see the [LICENSE](https://github.com/lovechaudhary/plotly-graph-image/edit/main/LICENSE) file for details.

## Acknowledgements
* `Puppeteer`: Used for rendering the Plotly chart in a headless browser to capture the image.
* `Plotly.js`: The charting library that powers the generation of the visualizations.
## Support
If you need help or have any questions, feel free to open an issue in the GitHub repository.
