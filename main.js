window.onload = function(){
    document.getElementById("bVerificar").onclick = function(){
        let valorAlcool = document.getElementById("iPrecoAlcool").value;
        let valorGasolina = document.getElementById("iPrecoGasolina").value;

        if(!valorAlcool || !valorGasolina){
            alert("Por favor, insira os 2 valores!");
        }else{
            let resultado = Number(valorAlcool) / Number(valorGasolina);

            resultado <= 0.7 ? document.getElementById("sResultado").text = "É mais vantajoso usar álcool!" : document.getElementById("sResultado").text = "É mais vantajoso usar gasolina!";
        }
    }
}