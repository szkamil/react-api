import React, {Component} from "react"
import Graph from './graph/graph.js'
import api from './graph/data.js'

// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

class App extends Component {
    constructor() {
        super()
        this.state = {
            character: {}
        }
      //  this.renderGraph = this.renderGraph.bind(this)
    }
    
    
    // componentDidMount() {
    //     fetch("https://swapi.co/api/people")
    //         .then(response => response.json())
    //         .then(data => {
    //             this.setState({
    //                 character: data
    //             })
    //         })
    //    //     this.renderGraph()
    // }

    componentDidMount(){
      this.setState({
        character: api
      })

    }
    
    render() {
      console.log("results")
      const name = api.map(x => x.name)
      const height = api.map(x => x.height)
      console.log("NAME: " + name)
      console.log("HH: " + height)
        return (
            <div>
              <Graph data= {api}/>
            </div>
        )
    }
}

export default App


// https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch
// https://swapi.co/
// https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//           loading: false, 
//             character: {}
//         }
//     }
    
//     componentDidMount() {
//       this.setState({loading: true})
//         fetch("https://swapi.co/api/people/1")
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     character: data,
//                     loading: false
//                 })
//             })
//     }
    
//     render() {
//         return (
//             <div>
//               {this.state.character.name}
//             </div>
//         )
//     }
// }

// export default App



/**
 * Other modern/advanced React features/topics to learn:
 * 
 * Official React Context API - https://reactjs.org/docs/context.html
 * Error Boundaries - https://reactjs.org/docs/error-boundaries.html
 * render props - https://reactjs.org/docs/render-props.html
 * Higher Order Components - https://reactjs.org/docs/higher-order-components.html
 * React Router - https://reacttraining.com/react-router/core/guides/philosophy
 * React Hooks - https://reactjs.org/docs/hooks-intro.html
 * React lazy, memo, and Suspense - https://reactjs.org/blog/2018/10/23/react-v-16-6.html
 */