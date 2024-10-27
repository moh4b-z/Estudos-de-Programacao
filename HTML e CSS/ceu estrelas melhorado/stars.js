var dynamicStars = false // Controla o modo de movimentação das estrelas
var pauseAnimations = false // Controla o estado de pausa das animações
var adjustSpeed = false // Controla se a velocidade está sendo ajustada com base no cursor
var adjustTailWidth = false // Controla se a largura da cauda é ajustada com base no cursor
var isMKeyPressed = false // Controla se 'M' foi pressionado recentemente
var maxStars = 20 // Número máximo de estrelas padrão

function generateStars() {
    let sky = document.querySelector(".sky") || document.createElement("div")
    sky.classList.add("sky")
    if (!document.body.contains(sky)) {
        document.body.appendChild(sky)
    }
    sky.textContent = "" // Limpa estrelas antigas

    let skyWidth = sky.offsetWidth
    let skyHeight = sky.offsetHeight

    let starCount = Math.round(parseInt((skyWidth / skyHeight).toFixed(2).replace(".", "")) / 5) * 5
    starCount = Math.min(starCount, maxStars)

    let getPositionAndDelay = (index) => {
        let baseDelay = 100 * index
        let isDivisibleBy3 = index % 3 === 0

        return {
            top: `calc(50% - ${Math.floor(Math.random() * skyHeight) - skyHeight / 2}px)`,
            left: `calc(50% - ${Math.floor(Math.random() * skyWidth) - skyWidth / 2}px)`,
            delay: isDivisibleBy3 ? `${baseDelay * 2.5}ms` : `${baseDelay}ms`
        }
    }

    for (let i = 1; i <= starCount; i++) {
        let star = document.createElement("div")
        star.classList.add("star")

        let { top, left, delay } = getPositionAndDelay(i)
        star.style.top = top
        star.style.left = left
        star.style.animationDelay = delay
        star.style.setProperty("--star-delay", delay)

        star.addEventListener("animationiteration", () => {
            if (dynamicStars && !pauseAnimations) {  // Só muda a posição se não estiver pausado
                let newPosition = getPositionAndDelay(i)
                star.style.top = newPosition.top
                star.style.left = newPosition.left
            }
        })

        sky.appendChild(star)
    }
}

// Funções de alternância para configurações
function handleMKeyPress() {
    isMKeyPressed = true
    setTimeout(() => {
        isMKeyPressed = false
    }, 500)
}

function PauseAnimations() {
    pauseAnimations = !pauseAnimations
    document.querySelectorAll(".star").forEach(star => {
        star.style.animationPlayState = pauseAnimations ? "paused" : "running"
    })
}

function changesStarPositions() {
    dynamicStars = !dynamicStars
}

function changeSpeed() {
    adjustSpeed = !adjustSpeed
}

function changeSize() {
    adjustTailWidth = !adjustTailWidth
}

function increaseMaxStars() {
    maxStars += 5;
    generateStars() // Atualiza estrelas com novo máximo
}

function decreaseMaxStars() {
    maxStars = Math.max(5, maxStars - 5) // Garante o mínimo de 5 estrelas
    generateStars()
}

function resetSettings() {
    dynamicStars = false
    pauseAnimations = false
    adjustSpeed = false
    adjustTailWidth = false
    maxStars = 20
    document.documentElement.style.setProperty("--speed", "3000ms")
    document.documentElement.style.setProperty("--tail-width", "10em")
    generateStars() // Redefine estrelas para o valor padrão
}

function disappearance() {
    // Obtém o valor atual da variável CSS "--vision"
    let currentVision = getComputedStyle(document.documentElement).getPropertyValue("--vision").trim()
    
    // Alterna o valor de "--vision" entre "none" e "block"
    if (currentVision === "none") {
        document.documentElement.style.setProperty("--vision", "block")
    } else {
        document.documentElement.style.setProperty("--vision", "none")
    }
}


// Detecta teclas pressionadas
window.addEventListener("keydown", (event) => {
    if (event.key === "m") {
        handleMKeyPress();
    }

    if (isMKeyPressed) {
        switch (event.key) {
            case " ":
                PauseAnimations()
                break;
            case "1":
                changesStarPositions()
                break;
            case "2":
                changeSpeed()
                break;
            case "3":
                changeSize()
                break;
            case "5":
                increaseMaxStars()
                break;
            case "4":
                decreaseMaxStars()
                break;
            case "0":
                resetSettings()
                break
            case "n":
                disappearance()
                break
        }
    }
})

// Ajusta a velocidade com base no cursor se `adjustSpeed` estiver ativo
window.addEventListener("mousemove", (event) => {
    if (adjustSpeed) {
        let maxSpeed = 5000
        let minSpeed = 1000
        let windowWidth = window.innerWidth

        let speed = Math.max(minSpeed, maxSpeed - ((event.clientX / windowWidth) * (maxSpeed - minSpeed)))
        document.documentElement.style.setProperty("--speed", `${Math.round(speed)}ms`)
    }

    if (adjustTailWidth) {
        let maxTailWidth = 50
        let minTailWidth = 5
        let windowHeight = window.innerHeight

        let tailWidth = Math.max(minTailWidth, maxTailWidth * (event.clientY / windowHeight))
        document.documentElement.style.setProperty("--tail-width", `${tailWidth.toFixed(1)}em`)
    }
})

// Gera as estrelas ao carregar a página
window.addEventListener("DOMContentLoaded", generateStars)
