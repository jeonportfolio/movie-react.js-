import { Component } from "./core/jsu";
import FruitItem from "./components/FruitItem";
import TheHeader from "./components/TheHeader";
export default class App extends Component {
    render(){
        const routerView = document.createElement('router-view')
        this.el.append(
            new TheHeader().el,
            routerView
        )
    }
}