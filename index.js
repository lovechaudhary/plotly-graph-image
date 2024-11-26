const puppeteer = require('puppeteer');

async function generatePlotlyImage(figure, imgOpts) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.setViewport({width: imgOpts.width || 1000, height: imgOpts.height || 600});

    const graphHTML = `
        <!DOCTYPE html>
        <html>
        <head>
            <script src="https://cdn.plot.ly/plotly-latest.min.js"></script>
            <style>
                body {
                    margin: 0;
                    padding: 0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                }
                #chart {
                    width: ${imgOpts.width || 600}px;
                    height: ${imgOpts.height || 400}px;
                }
            </style>
        </head>
        <body>
            <div id="chart" style="width:${imgOpts.width || 600}px; height:${imgOpts.height || 400}px;"></div>
            <script>
                const figure = ${JSON.stringify(figure)};
                Plotly.newPlot('chart', figure.data, figure.layout);
            </script>
        </body>
        </html>
    `;

    await page.setContent(graphHTML);
    await page.waitForSelector('#chart', {visible: true});

    const imageBuffer = await page.screenshot({type: 'png'});
    await browser.close();

    return imageBuffer;
}

module.exports = {
    generatePlotlyImage
}
