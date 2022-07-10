const homePoints = document.getElementById("homePoints")
const guestPoints = document.getElementById("guestPoints")

let gameState = {
    home: [0],
    guest: [0]
}

function setScore(element, scoreArr) {
    element.textContent = scoreArr.reduce((x,y) => x + y)
    
    const home = gameState.home.reduce((x,y) => x + y)
    const guest = gameState.guest.reduce((x,y) => x + y)
    if(home > guest) {
        homePoints.style.color = "#10B981"
        guestPoints.style.color = "#F94F6D"
    } else if (home < guest) {
        guestPoints.style.color = "#10B981"
        homePoints.style.color = "#F94F6D"
    } else {
        guestPoints.style.color = "#F94F6D"
        homePoints.style.color = "#F94F6D"
    }
}

function homeScore(event) {
    const {innerHTML} = event.target
    gameState.home.push(Number(innerHTML.slice(1)))
    setScore(homePoints, gameState.home)
}

function guestScore(event) {
    const {innerHTML} = event.target
    gameState.guest.push(Number(innerHTML.slice(1)))
    setScore(guestPoints, gameState.guest)
}

function reset() {
    gameState = {
        home: [0],
        guest: [0]
    }
    setScore(homePoints, gameState.home)
    setScore(guestPoints, gameState.guest)
}