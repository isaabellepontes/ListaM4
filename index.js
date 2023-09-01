import { createInterface } from 'readline';

class CssLista {
    #valid_css_properties;
    #css;
    #rl;
    constructor(){
        this.#valid_css_properties = [
            'font',
            'text',
            'letter-spacing',
            'color'
        ];
        this.#css = [];
        this.#rl = createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }
    start() {
        console.log('Digite uma propriedade css, ou digite "parar" para sair');
        this.#line();
        this.#rl.on('close', () => {
            this.#showSortedCss();
            console.log('Programa Encerrado');
        });
    }
    #line() {
        this.#rl.on('line', input => {
            if (input.toLowerCase() === 'parar') {
                this.#rl.close();
                return;
            }
            if (this.#isNumeric(input)) {
                console.log('Entrada inválida. Números não são permitidos.');
                return;
            }
            this.#addCss(input);
        });
    }
    #addCss(css) {
        if (!this.#valid_css_properties.includes(css)) {
            console.log(`O valor ${css} não é uma propriedade do css`);
            return;
        }
        this.#css.push(css);
    }
    #showSortedCss() {
        const sortedCss = this.#css.sort();
        console.log('Css Ordenado:');
        sortedCss.forEach(css => console.log(css));
    }
    #isNumeric(input) {
        return !isNaN(parseFloat(input)) && isFinite(input);
    }
}
const cssLista = new CssLista();
cssLista.start();

