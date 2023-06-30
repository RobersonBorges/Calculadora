function criaCalculadora() {
    return {
        display: document.querySelector('.display'),
        btnClear: document.querySelector('.btn-clear'),

        inicia: function () {
            this.cliqueBotoes()
            this.pressionaEnter()

        },

        clearDisplay() {
            this.display.value = ''
        },

        apagaUm() {
            this.display.value = this.display.value.slice(0, -1)
        },


        //"captura um evento" se a tela for enter (keycode 13), executa o metodo realizaConta()
        pressionaEnter() {
            this.display.addEventListener('keypress', e => {
                if (e.keyCode === 13) {
                    this.realizaConta()
                }
            })
        },

        realizaConta() {
            let resultado = this.display.value

            try {
                resultado = eval(resultado)

                if (!resultado) {
                    alert('conta invalida')
                    return
                }

                this.display.value = String(resultado)
            } catch (e) {
                alert('conta invalida')
                return
            }

        },

        cliqueBotoes() {
            //this-> calculadora
            document.addEventListener('click', (e) => { //arrow function
                const elementoClicado = e.target; //captura o elemento onde você está clicando


                if (elementoClicado.classList.contains('btn-num')) {
                    this.btnParaDisplay(elementoClicado.innerText)
                }

                if (elementoClicado.classList.contains('btn-clear')) {
                    this.clearDisplay()
                }

                if (elementoClicado.classList.contains('btn-del')) {
                    this.apagaUm()
                }

                if (elementoClicado.classList.contains('btn-eq')) {
                    this.realizaConta()
                }
            })
        },

        btnParaDisplay(valor) {
            this.display.value += valor
        }
    }

}

const calculadora = criaCalculadora()
calculadora.inicia();