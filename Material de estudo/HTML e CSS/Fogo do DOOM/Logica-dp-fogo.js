const fogoPixel = []
const fogoWidth = 50
const fogoHeight = 50
const fogoColorPaleta = [{"r":7,"g":7,"b":7},{"r":31,"g":7,"b":7},{"r":47,"g":15,"b":7},{"r":71,"g":15,"b":7},{"r":87,"g":23,"b":7},{"r":103,"g":31,"b":7},{"r":119,"g":31,"b":7},{"r":143,"g":39,"b":7},{"r":159,"g":47,"b":7},{"r":175,"g":63,"b":7},{"r":191,"g":71,"b":7},{"r":199,"g":71,"b":7},{"r":223,"g":79,"b":7},{"r":223,"g":87,"b":7},{"r":223,"g":87,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":95,"b":7},{"r":215,"g":103,"b":15},{"r":207,"g":111,"b":15},{"r":207,"g":119,"b":15},{"r":207,"g":127,"b":15},{"r":207,"g":135,"b":23},{"r":199,"g":135,"b":23},{"r":199,"g":143,"b":23},{"r":199,"g":151,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":159,"b":31},{"r":191,"g":167,"b":39},{"r":191,"g":167,"b":39},{"r":191,"g":175,"b":47},{"r":183,"g":175,"b":47},{"r":183,"g":183,"b":47},{"r":183,"g":183,"b":55},{"r":207,"g":207,"b":111},{"r":223,"g":223,"b":159},{"r":239,"g":239,"b":199},{"r":255,"g":255,"b":255}];

function start() {
    criaFogo()
    criaFogoFonte()
    renderFogo()

    setInterval(calcularFogo,50)

}

function criaFogo() {
    const numeroPixels = fogoWidth * fogoHeight

    for (let i = 0; i < numeroPixels; i++){
        fogoPixel[i] = 0
    }
}

function calcularFogo() {
    for (let row = 0; row < fogoHeight - 1; row++) { // -1 para evitar a última linha
        for (let column = 0; column < fogoWidth; column++) {
            const pixelIndex = column + (fogoHeight * row);
            updateFogo(pixelIndex);
        }
    }
    renderFogo();
}

function updateFogo(currentPixelIndex) {
    const belowPixelIndex = currentPixelIndex + fogoWidth; // Calcula o índice do pixel abaixo

    if (belowPixelIndex >= fogoWidth * fogoHeight) {
        return;
    }

    const decay = Math.floor(Math.random() * 3);
    const belowPixelIntensity = fogoPixel[belowPixelIndex];
    const newFireIntensity = belowPixelIntensity - decay >= 0 ? belowPixelIntensity - decay : 0;

    fogoPixel[currentPixelIndex + decay] = newFireIntensity;
}


function renderFogo() {
    const debug = false;
    let html = '<table cellpadding=0 cellspacing=0>';

    for (let row = 0; row < fogoHeight; row++) {
        html += '<tr>';
        for (let column = 0; column < fogoWidth; column++) {
            const pixelIndex = column + (fogoHeight * row);
            const fogoIntensidade = fogoPixel[pixelIndex];
            if (debug === true) {
                html += '<td>';
                html += `<div class="pixel-index">${pixelIndex}</div>`;
                html += fogoIntensidade;
                html += '</td>';
            } else {
                const color = fogoColorPaleta[fogoIntensidade];
                const colorString = `${color.r},${color.g},${color.b}`;
                html += `<td class="pixel" style="background-color: rgb(${colorString})"></td>`;
            }
        }
        html += '</tr>';
    }
    html += '</table>';
    document.querySelector('#fogoCanvas').innerHTML = html;
}


function criaFogoFonte(){
    for (let column = 0; column <= fogoWidth; column++) {
        const overflowpixelLindex = fogoWidth * fogoHeight
        const pixelLindex = (overflowpixelLindex - fogoWidth) + column

        fogoPixel[pixelLindex] = 36

    }
}

start()