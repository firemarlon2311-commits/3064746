function fngeo(){
    let datovariable="";
    datovariable = document.getElementById("txtdato").Value;
    console.log("ingresaste dato",datovariable)


}

function fnsuma(){
    let numero1= 0;
    let numero2= 0;
    numero1= document.querySelector("#txtnum1").value;
    numero2= document.querySelector(".txtnum2").value;

    let resultadosuma= parseInt(numero1)+ parseInt(numero2);

    console.log("la suma de los datos:"
        ,numero1, "+", numero2, "es",resultadosuma);
}

function fnresta(){
    let numero1= 0;
    let numero2= 0;
    numero1= document.querySelector("#txtnum1").value;
    numero2= document.querySelector(".txtnum2").value;



       let resultadoresta= parseInt(numero1)- parseInt(numero2);
       console.log("la resta de los datos:"
        ,numero1, "-", numero2, "es",resultadoresta);

}


function fndivision(){
    let numero1= 0;
    let numero2= 0;
    numero1= document.querySelector("#txtnum1").value;
    numero2= document.querySelector(".txtnum2").value;


         let resultadodivision= parseInt(numero1)/ parseInt(numero2);

    console.log("la division de los dato:"
        ,numero1, "/", numero2, "es",resultadodivision);
}


    function fnmultiplicacion(){
    let numero1= 0;
    let numero2= 0;
    numero1= document.querySelector("#txtnum1").value;
    numero2= document.querySelector(".txtnum2").value;
         let resultadomultiplicacion= parseInt(numero1)* parseInt(numero2);

    console.log("la multiplicacion de los datos:"
        ,numero1, "*", numero2, "es",resultadomultiplicacion);



}

console.log(resultado)