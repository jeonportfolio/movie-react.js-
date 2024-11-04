export class Component {
    constructor(payload = {}) {
        const{
            tagName = 'div', 
            state = {},
            props = {}
        } = payload
        this.el = document.createElement(tagName)
        this.state = state
        this.props = props
        this.render()
     }
     render() {

     }
}

//라우터 
function routeRender(routes) {
    if(!location.hash) {
        history.replaceState(null, '', '/#/')
    }
    const routerView = document.querySelector('router-view')
    const [hash, queryString = ''] = location.hash.split('?')// 물음표를 기준으로오른쪽과 왼쪽의 내용을 구분함 

    // a=123&b=456
    //['a=123', 'b=456']
    //{a:123, b:'456'}
   const query = queryString
    .split('&')
    .reduce((acc, cur) => {
        const [key,value] = cur.split('=')
        acc[key] = value
        return acc
    },{})

    history.replaceState(query, '')

    const currentRoute = routes.find(route => new RegExp(`${route.path}/?$`).test(hash))
    // /?$ => 마지막에 /가 있을수도 있고 없을수도 있으며 이러한 문자로 끝나야한다.
    routerView.innerHTML = ''
    routerView.append(new currentRoute.Component().el)

    window.scrollTo(0,0)
}


export function createRouter(routes) {
    return function(){
        window.addEventListener('popstate', () => {
            routeRender(routes)
        })
        routeRender(routes)
    }      
}

//스토어 

export class Store {
    constructor(state) {
        this.state = {}
        this.observers = {}    
        for (const key in state){
                Object.defineProperty(this.state,key,{
                    get: () => state[key], // state['message']
                    set: val => {
                        state[key] = val
                        this.observers[key].forEach(observer => observer(val))
                    }
                })
        } // 객체데이터는 for in 문을 통해 반복한다
    }
    // 데이터의 변경 감지 
    subscribe(key, cb) {
        Array.isArray(this.observers[key])
        ? this.observers[key].push(cb)
        : this.observers[key] = [cb]
    }
}