import React from 'react';
import './App.css';
import Axios from 'axios';

//function App() {
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <div className="App">
      <div className="border border-gray-400 rounded-2xl p-2 m-2 flex justify-around items-center">
        <h1 className="text-3xl font-bold underline">
          Hello Mahoroba!
        </h1>
        <p className="m-0 text-gray-400">mahoroba</p>
        <button className="bg-gray-300 border-0 p-2 rounded-md hover:bg-gray-400 hover:text-white">ボタン</button>
      </div>
        <header className="App-header">
          <h1>text * 2</h1>
          <form onSubmit={this.handleSubmit}>
            <label>
              <textarea name="text" cols="80" rows="4" value={this.state.value} onChange={this.handleChange} />
            </label>
            <br/>
            <input type="submit" value="doublify!" />
          </form>
        </header>
      </div>
    );
  }


  doubled_text = text => {
    //console.log("input text >>"+text)
    Axios.post('http://127.0.0.1:5000/doublify', {
      post_text: text
    }).then(function(res) {
      alert(res.data.result);
    })
  };

  handleSubmit = event => {
    this.doubled_text(this.state.value)
    event.preventDefault();
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
}

export default App;

