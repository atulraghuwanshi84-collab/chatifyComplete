const keyStrokeSounds = [
    new Audio("/keystroke1.mp3"),
    new Audio("/keystroke2.mp3"),
    new Audio("/keystroke3.mp3"),
    new Audio("/keystroke4.mp3"),
] ;

function usekeyboardSound() {
    const playRandomKeyStrokeSound = () => {
        const randomSound = keyStrokeSounds[Math.floor(Math.random() * keyStrokeSounds.length)] ;
        randomSound.currentTime = 0 ;
        randomSound.play().catch(error=> console.log("Audio play failed",error))
    };
    return { playRandomKeyStrokeSound} ;

}

export default usekeyboardSound ;