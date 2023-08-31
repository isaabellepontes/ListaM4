import { createInterface } from 'readline';

class CssLista {
    constructor(){
        this.css = [];
        this.rl = createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    start() {
        console.log('Digite uma propriedade css, ou digite "parar" para sair');
        this.rl.on('line', input => {
            if (input.toLowerCase() === 'parar') {
                this.rl.close();
            } else {
                if (!this.isNumeric(input)) {
                    this.addCss(input);
                } else {
                    console.log('Entrada inválida. Números não são permitidos.');
                }
            }
        });
        this.rl.on('close', () => {
            this.showSortedCss();
            console.log('Programa Encerrado');
        });
    }
    addCss(css) {
        this.css.push(css);
    }
    showSortedCss() {
        const sortedCss = this.css.sort();
        console.log('Css Ordenado:');
        sortedCss.forEach(css => console.log(css));
    }
    isNumeric(input) {
        return !isNaN(parseFloat(input)) && isFinite(input);
    }
}
const cssLista = new CssLista();
cssLista.start();

