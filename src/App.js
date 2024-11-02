import { Component } from "./core/jsu";
import FruitItem from "./components/FruitItem";

export default class App extends Component {
    constructor() {
        super({
            state: {
                //inputText: ''
                fruits : [
                    {name: 'apple', price:1000},
                    {name: 'banana', price:2000},
                    {name: 'cherry', price:3000}
                ]
            }
        })
    }
    render(){
        // this.el.classList.add('search')
        // this.el.innerHTML  =  `
        //     <input/>
        //     <button>Click!</button>
        // `

        // const inputEl=this.el.querySelector('input')
        // inputEl.addEventListener('input', () => {
        //     this.state.inputText = inputEl.value
        // })

        // const buttonEl = this.el.querySelector('button')
        // buttonEl.addEventListener('click', () => {
        //     console.log(this.state.inputText)
        // })

        console.log(this.state.fruits)

        this.el.innerHTML = `
            <h1>Fruits</h1>
            <ul></ul>
        `
        const ulEl = this.el.querySelector('ul')
        ulEl.append(...this.state.fruits
            .map(fruit => new FruitItem({
                props: {
                    name: fruit.name,
                    price : fruit.price
                }
            }).el)
        )
    }

}