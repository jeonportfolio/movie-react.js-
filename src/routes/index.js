import { createRouter } from '../core/jsu'
import Home from "./Home";
import About from "./About";

export default createRouter([
    { path: '#/', Component: Home},
    { path: '#/about', Component: About},
])