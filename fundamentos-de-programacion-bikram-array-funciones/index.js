function suma(n1,n2){
    return (n1+n2);
}
function potenciacion(n1,n2){
    let i=0;
    let m=n1;
    while(i<(n2-1)){
        n1*=m;
        i++;
    }
    return (n1);
}

function repetirString(s,n){
    let m=s;
    for (let i = 1; i < n; i++){
        m+=s
    }
    return (m);
}

function esPrimo(n){
    let i=2;
    while(i<n){
        if(n%i==0){
            return false;
        }
        i++;
    }
    return true;
}
function obtenerImpares(arr){
    let lenghtArr = arr.length;
    let myArr = [];
    for(let i=0; i<lenghtArr; i++){
        if(arr[i]%2!=0){
            myArr.push(arr[i]);
        }
    }
    return myArr;

}
function sumarArray(arr){
    let lenghtArr = arr.length;
    let sumArray=0;
    for(let i=0; i<lenghtArr; i++){
        sumArray+=arr[i];
    }
    return sumArray;
}
function multiplicarArray(arr){
    let lenghtArr = arr.length;
    let mulArray = arr[0];
    for(let i=1; i<lenghtArr; i++){
        mulArray*=arr[i];
    }
    return mulArray;
}
