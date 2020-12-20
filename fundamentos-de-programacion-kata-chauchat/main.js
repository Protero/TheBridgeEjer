function chauchat(numDisparos){
    const cargador = 7;
    const minDisparos = 1;
    const espacioBlanco=3;
    const porcentaje = ((cargador*80)/100);
    /*Se controla que los números introducidos por el usurios no sean mayor que los disponibles en el cargador */
    if (numDisparos<=cargador){
        /*Disparos */
        for (let i = 0; i < cargador; i++){
            /*Se filtra que no se encasquille en el % estimado */
            if (getRndInteger(minDisparos,cargador)>porcentaje){
                //Se controla cuándo pintar el espacio en blanco
                if(i!=espacioBlanco){
                    console.log("pium!");
                }
                else{
                    console.log("");
                }
            }
            else{
                console.log("Illo, me he quedao pillá!");
                i=8;
            }
        }
    }
    else{
        chauchat(prompt("No puedes disparar más de 7 balas"));
    }
}
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

chauchat(prompt("¿Cuántas veces quieres disparar?"));