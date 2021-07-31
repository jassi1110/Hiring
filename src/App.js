import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Main from './Components/Main'
import Footer from './Components/Footer';
import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
        Original_link:undefined,
        short_link:undefined,
        error:false
    }
  }

  get_link = async(e)=>{
      e.preventDefault()

      const orig_link = e.target.elements.link.value
      const api_call = await fetch(`https://api.shrtco.de/v2/shorten?url=${orig_link}`)
      const response = await api_call.json()
      console.log(response)
      // console.log("Hello")

      if(orig_link){
        this.setState({
          Original_link:response.result.original_link,
          short_link:response.result.full_short_link,
          error:false
        })
      }
      else{
        this.setState({
          error:true
        })
      }
  }


  render(){
    return(
      <>
      <Header />
      <Main getlink = {this.get_link}
      Original_link = {this.state.Original_link}
      short_link = {this.state.short_link}
      error = {this.state.error} />
      <Footer />
      </>
    )
  }
}

export default App;
