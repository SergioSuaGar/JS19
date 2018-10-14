function paresImpares() {
    var arrayUno= [];
    var arrayAux=[];
    for (let i=1;i<=100;i++){
        let random = Math.round(Math.random() * (1000 - 1) ) + 1;
        arrayUno[i]=random;
        document.write(random+" | ");
    }
    document.write("<br>");
    arrayUno.sort();
    for (let i=0;i<100;i++){
        document.write(arrayUno[i]+" | ");
    }
    document.write("<br>");
    arrayUno.sort((a,b)=>{
        if(a%2==0) {
            return -1;
        }else{
            return 1;
        }
    })
    for (let i=0;i<arrayAux.length;i++){
        arrayUno.push(arrayAux[i]);
    }
    for (let i=0;i<100;i++){
        document.write(arrayUno[i]+" | ");
    }
}