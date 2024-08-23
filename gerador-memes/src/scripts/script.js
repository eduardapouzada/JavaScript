let button_download = document.querySelector('.button.download');
var container_img = document.querySelector('.container-img');
let submit_text = document.querySelector('.submit-text'); // Adicionada a classe correta
let text = document.querySelector('.input-text');

var img;
var stage;

document.addEventListener('DOMContentLoaded', function(){
    carrega_img();
    move_img();
    move_text();
});

// Carrega a imagem no container_img
function carrega_img(){
    var input_file = document.querySelector('.input-file');

    input_file.addEventListener('change', function(event){
        var file = event.target.files[0];
        var URLimg = URL.createObjectURL(file);

        img = document.createElement('img');
        img.src = URLimg;

        container_img.innerHTML = '';
        container_img.appendChild(img);

        var eventImgLoaded = new CustomEvent('imageLoaded', { detail: { image: img } });
        document.dispatchEvent(eventImgLoaded);
    })
}

// Para mover a imagem
function move_img(){
    document.addEventListener('imageLoaded', function(event) {
        var img = event.detail.image;

        let width = container_img.offsetWidth;
        let height = container_img.offsetHeight;

        stage = new Konva.Stage({
            container: 'container-img',
            width: width,
            height: height,
        });

        let layer = new Konva.Layer();
        stage.add(layer);

        let konva_img = new Konva.Image({
            image: img,
            x: stage.width() / 2 - width / 2,
            y: stage.height() / 2 - height / 2,
            draggable: true,
        });

        layer.add(konva_img);
        layer.draw();

        let transform = new Konva.Transformer();
        layer.add(transform);
        transform.nodes([konva_img]);
    });
}

function move_text(){
    submit_text.addEventListener('click', function(){
        let texto = text.value;
        transform_text(texto);
    });

    function transform_text(texto){
        let text_layer = new Konva.Layer();

        let width = stage.width();
        let height = stage.height();

        let textTop = new Konva.Text({
            x: width / 2,
            y: height / 2,
            text: texto, 
            fontSize: 20,
            fill: 'white',
            align: 'top',
            verticalAlign: 'middle',
            draggable: true,
        });


        stage.add(text_layer);
        text_layer.add(textTop);
        text_layer.draw(); 


        let transform = new Konva.Transformer();
        text_layer.add(transform);
        transform.nodes([textTop]);
        
    }
}
