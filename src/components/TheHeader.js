import { Component } from "../core/jsu";

export default class TheHeader extends Component {
    constructor() {
        super({
            tagName: 'header'
        })
    }
    render(){
        this.el.innerHTML =/*html*/ `
            <a herf="#/">Main!</a>
            <a herf="#/about">About!</a>
        `
    }
} 