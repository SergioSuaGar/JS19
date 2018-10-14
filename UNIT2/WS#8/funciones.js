function ejer1(){
    var video = document.querySelector("#webcam");
    const mediaSource = new MediaSource();
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
        navigator.getUserMedia({video: true}, grabar, error);
    }
    function grabar(stream) {
        video.srcObject = stream;
    }
    function error(error) {
        document.write(error.code+ " : "+error.message);
    }
}

function ejer2(){
    var audio = document.querySelector("#audio");
    const mediaSource = new MediaSource();
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || navigator.oGetUserMedia;
    if (navigator.getUserMedia) {
        navigator.getUserMedia({audio: true}, grabar, error);
    }
    function grabar(stream) {
        audio.srcObject = stream;
    }
    function error(error) {
        document.write(error.code+ " : "+error.message);
    }
}