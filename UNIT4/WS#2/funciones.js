var swapStyle = (event) => {
    let style = event.target.getAttribute("data-theme");
    if (style) document.getElementById("mainstyle").setAttribute("href", style + ".css")
};
var listenSwap = () => {
    Array.prototype.forEach.call(document.getElementsByClassName("styleswap"), anchor => {
            anchor.addEventListener("click", swapStyle)
        }
    );
};
window.addEventListener("load", listenSwap);

var letra = 1;
function zoom_mas(){
    letra += 0.5;
    document.body.style.fontSize= letra + "em"
}
function zoom_menos(){
    letra -= 0.5;
    document.body.style.fontSize= letra + "em"
}
function justificar(){
    document.body.style.textAlign="justify"
}
function izquierda(){
    document.body.style.textAlign="right"
}