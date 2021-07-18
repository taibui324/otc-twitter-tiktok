import React from 'react';
import ReactPlayer from "react-player";
import SocialMedia from "./SocialMedia";
class Search extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      inputValue : "",
      url:""
    }
  }

  handleChange = (event)=>{
    this.setState({inputValue : event.target.value})
  }

  handleSubmit = (event) =>{
    event.preventDefault();
    this.setState({url: this.state.inputValue})
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <div>
              <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} style={{margin:"20px"}} className="form-control" type="text" placeholder="Input url" />
                <button style={{margin:"20px"}} className="btn btn-primary">Enter</button>
              </form>
            
          </div>
          <SocialMedia url={this.state.url} controls={true} />
        </header>
      </div>
    );
  }
  
}

export default Search;