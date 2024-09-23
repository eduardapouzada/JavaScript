let button_download = document.querySelector('.button.download');
var container_img = document.querySelector('.container-img');
let submit_text = document.querySelector('.submit-text');
let text = document.querySelector('.input-text');
var img;
var stage;
let selectedColor = '#000';
let selectedSize = 16;
let selectedFont = 'Arial';
let selectedStyle = 'normal'
let active = false;

document.addEventListener('DOMContentLoaded', function(){
    carrega_img();
    move_img();
    color(); 
    Size();
    Font()
    move_text();
    restart_all();
});

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
    });
}

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

function Size(){
    const text_size = document.querySelector('.text-size');

    const mais = document.querySelector('.mais');
    const menos = document.querySelector('.menos');

    text_size.addEventListener('input', (event) => {
            selectedSize = event.target.value;
        });

    mais.addEventListener('click', function(){
        let valor = parseInt(text_size.value); // Converte o valor para número inteiro
        valor = valor + 1;
        text_size.value = valor;
        selectedSize = valor;
        alert(selectedSize)
    })

    menos.addEventListener('click', function(){
        let valor = parseInt(text_size.value);
        valor -= 1;
        text_size.value = valor;
    })


}

function Font(){
    const font = document.querySelector('.select-font');
    const buttonStyle = document.querySelector('.button-style');

    font.addEventListener('change', (event) => {
        selectedFont = event.target.value;
    })

    buttonStyle.addEventListener('click', function(){
        active = !active;

        if (active){
            selectedStyle = 'italic';
            buttonStyle.style.border = "1px solid #c4c6c6";
            buttonStyle.style.backgroundColor = '#262626';

        } else {
            selectedStyle = 'normal';
            buttonStyle.style.border = 'none';
            buttonStyle.style.backgroundColor = '#2b2b2b';

        }
    })

}

function color() {
    const colorPicker = document.getElementById('colorPicker');

    colorPicker.addEventListener('input', (event) => {
        selectedColor = event.target.value;
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
            fontSize: selectedSize,
            fill: selectedColor, 
            fontFamily: selectedFont,
            fontStyle: selectedStyle,
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

function restart_all(){
    let button_restart = document.querySelector('.button-restart');

    button_restart.addEventListener('click', function(){
        stage.destroy();
        text.value = "";
        text_size.value = "";
        document.querySelector('.text-size').value = "";  
    });

}    