


import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  state={
    progress:0
  }
  setProgress=(progress)=>{
    this.setState({
      progress:progress
    })
  }
  apiKey = process.env.REACT_APP_KEY;
  render() {
    return (
      <div>
       <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
     
      />
        <Routes>
          <Route exact path="/"
         element ={ <News setProgress={this.setProgress} apiKey={this.apiKey} key='home' pageSize={5} country='us' category="general"/>}/>
         
          <Route exact path="/business"
       element={   <News setProgress={this.setProgress} apiKey={this.apiKey} key='business' pageSize={5} country='us' category="business"/> } />
          
          <Route exact path="/entertainment"
         element= {<News setProgress={this.setProgress} apiKey={this.apiKey} key='entertainment' pageSize={5} country='us' category="entertainment"/>} />
         
          <Route exact path="/general"
         element ={ <News setProgress={this.setProgress} apiKey={this.apiKey} key='general' pageSize={5} country='us' category="general"/>} />
       
          <Route exact path="/health"
         element = {<News setProgress={this.setProgress} apiKey={this.apiKey} key='health' pageSize={5} country='us' category="health"/>} />
         
          <Route exact path="/science"
         element = { <News setProgress={this.setProgress} apiKey={this.apiKey} key='science' pageSize={5} country='us' category="science"/>} />
          
          <Route exact path="/sports"
         element = { <News setProgress={this.setProgress} apiKey={this.apiKey} key='sports' pageSize={5} country='us' category="sports"/>} />
          
          <Route exact path="/technology"
         element ={ <News setProgress={this.setProgress} apiKey={this.apiKey} key='technology' pageSize={5} country='us' category="technology"/>} />
      
         
        </Routes>
        </Router>
      </div>
    )
  }
}



