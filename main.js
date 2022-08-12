window.onload = function(){
    var app = new Vue({
        el: "#app",
        data: {
            alcool: '',
            gasolina: '',
            resultado: ''
        },
        watch: {
            alcool: function(){
                this.resultado = 'Aguardando digitação...';
                this.debouncedCalculo();
            },
            gasolina: function(){
                this.resultado = 'Aguardando digitação...';
                this.debouncedCalculo();
            }
        },
        created: function(){
            this.debouncedCalculo = _.debounce(this.calcular, 500);
        },
        methods: { 
            calcular: function(){
                if(!this.alcool || !this.gasolina){
                    this.resultado = 'Ambos os valores devem ser informados...';
                    return;
                }
                
                let result = Number(this.alcool) / Number(this.gasolina);
                this.resultado = result <= 0.7 ? 'É mais vantajoso usar álcool!' : 'É mais vantajoso usar gasolina!';
            }
        }
    });
}