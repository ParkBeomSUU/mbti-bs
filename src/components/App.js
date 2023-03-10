import React, { useState } from 'react'
import Home from './Home'
import Game from './Game'

const container = {
    height: '100vh', display: 'flex', 
    justifyContent: 'center', alignItems: 'center'
}

const App = () => {

    const [ begin, setBegin ] = useState(false)

    const goToGame = () => setBegin(true)
    const goToHome = () => setBegin(false)

    return <div style={container}>
        { begin ? <Game goToHome={goToHome} /> : <Home goToGame={goToGame} /> }
    </div>
}

export default App