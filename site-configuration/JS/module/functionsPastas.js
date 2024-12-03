const fs = require('fs');
const path = require('path');

function creatingJsFileView(fileName, location){
    let name = fileName
    let divLo = location
    let content = fs.readFileSync(`./${name}`, 'utf-8')

    let JsFilePreviewField = document.createElement('div')
    JsFilePreviewField.classList.add('JsFilePreviewField')

    let upperFieldOfVisualization = document.createElement('div')
    upperFieldOfVisualization.classList.add('upperFieldOfVisualization')
    upperFieldOfVisualization.appendChild(JsFilePreviewField)
    
    let div1 = document.createElement('div')
    div1.appendChild(upperFieldOfVisualization)

    let JsFileName = document.createElement('h4')
    JsFileName.classList.add('JsFileName')
    JsFileName.textContent = name
    JsFileName.appendChild(div1)

    let img = document.createElement('img')
    img.src = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg'
    img.appendChild(div1)

    let div2 = document.createElement('div')
    div2.appendChild(upperFieldOfVisualization)

    let minEmaxButton = document.createElement('button')
    minEmaxButton.classList.add('minEmaxButton')
    minEmaxButton.appendChild(div2)

    let copyButton = document.createElement('button')
    copyButton.classList.add('minEmaxButton')
    copyButton.appendChild(div2)

    let fileContent = document.createElement('div')
    fileContent.classList.add('fileContent')
    fileContent.appendChild(JsFilePreviewField)

    fileContent.textContent = content

    JsFilePreviewField.appendChild(divLo)
}

export { creatingJsFileView}
