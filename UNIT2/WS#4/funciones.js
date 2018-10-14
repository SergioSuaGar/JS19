function ejer1(){
    document.write('<table border="1">')
    for (let i in navigator){
        document.write('<tr>')
        document.write('<td bgcolor="#5f9ea0">navigator.'+i+'</td>')
        document.write('<td bgcolor="aqua">' + navigator[i]  + '</td>')
        document.write('</tr>')
    }
    document.write('</table>')
}

function ejer2(){
    document.write('<table border="1">')
    for (let i in window){
        document.write('<tr>')
        document.write('<td bgcolor="#5f9ea0"> window.'+i+'</td>')
        document.write('<td bgcolor="aqua">'+window[i]+'</td>')
        document.write('</tr>')
    }
    document.write('</table>')
}