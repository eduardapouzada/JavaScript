function play(button, audioId){
    var audio = document.getElementById(audioId);
    audio.play();
}

var audiosMap = {
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

document.addEventListener('keydown', function(event){
    var key = event.key.toUpperCase();
    
    if (key in audiosMap){
        var audioId = audiosMap[key];
        var audio = document.getElementById(audioId);
        audio.play();  
    }
})

