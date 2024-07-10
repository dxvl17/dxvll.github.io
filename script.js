window.addEventListener('load', function() {
    var stage = new createjs.Stage("demoCanvas");
    var w = stage.canvas.width;
    var h = stage.canvas.height;

    document.getElementById('greeting').addEventListener('click', function() {
        // Oculta el saludo, muestra las fotos y oculta el canvas
        document.getElementById('greeting').style.display = 'none';
        document.getElementById('photos').style.display = 'block';
        stage.canvas.style.display = 'none';
    });
});

function showText(text) {
    document.getElementById('photo-text').textContent = text;
    document.getElementById('message').style.display = 'block';
}
