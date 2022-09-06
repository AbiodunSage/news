import React, { Component } from 'react';
import Header from './components/Header/Header';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import JSON from './db (1).json';



import './App.css';



class App extends Component{

  state = {
    news: JSON,
    filtered:[],
    footerText:'i am sage'
  }
  getKeywords=(event)=>{
    let keyword = event.target.value;
    let filtered = this.state.news.filter((item)=>{
      return item.title.indexOf(keyword)> -1
    })
    this.setState({filtered})
  
  }

  

  render (){
    const{filtered,news,footerText}= this.state
    return(
      <>
        <div>
          <Header keyword = {this.getKeywords}/> 
          <News news = {filtered.length===0?news:filtered}/>
          <Footer footerText={footerText}/>
        </div>
        
      </>
      
    )
  }
}

export default App;
