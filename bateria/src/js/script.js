function play(button, audioId){
    let audio = document.getElementById(audioId);
    audio.play();
}

let audiosMap = {
    'E' : 'audioE',
    'R' : 'audioR',
    'I' : 'audioI',
    'K' : 'audioK',
    'J' : 'audioJ',
    'H' : 'audioH',
    'G' : 'audioG',
    'F' : 'audioF',
    'B' : 'audioB',
};

let atualAudio = null;

function play(button, audioId) {
    let audio = document.getElementById(audioId);
    
    if (atualAudio && !atualAudio.paused) {
        atualAudio.pause();
        atualAudio.currentTime = 0;
    }

    audio.play();
    atualAudio = audio;
}

document.addEventListener('keydown', function(event) {
    let key = event.key.toUpperCase();

    if (key in audiosMap) {
        let audioId = audiosMap[key];
        play(null, audioId);
    }

    let e = document.querySelector('.crash-ride-E-img');
    let k = document.querySelector('.hihat-open-I-img');
    

    if (key === 'E' || key === 'R'){
        e.style.transform = 'rotate(0deg) scale(1.5)'
        setTimeout(() => {
            e.style.transform = 'rotate(-7.2deg) scale(1.5)';
        }, 100)
    }

    if (key === 'K'){
        k.style.top = '32.5%'
        setTimeout(() => {
            k.style.top = '32%'
        }, 100)
    }

})

