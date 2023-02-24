//class based counter

// import React, { Component } from 'react'
// import Counter from './Counter'

// export default class  extends Component {
//   render() {
//     return (
//       <div>
//         <Counter/>
//       </div>
//     )
//   }
// }


//student details assignment

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor()
//   {
//     super()
//     this.state={
      
//       studentID : " Id-124",
//       studentName : "NAME-SAM"
//     }
//   }
//   handleChange=()=>{
//     this.setState({studentID:"Id-123"})
//     this.setState({studentName : "NAME-RAJ"})
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.studentID}</h1>
//         <h2>{this.state.studentName}</h2>
//         <button onClick={this.handleChange}>CHANGE NAME</button>
//       </div>
//     )
//   }
// }

//function based counter

import React from 'react'
import CounterFBC from './CounterFBC.jsx'

const App = () => {
  return (
    <div>
      <CounterFBC/>
    </div>
  )
}

export default App

