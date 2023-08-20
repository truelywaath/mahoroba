import React, { useState } from 'react';
import Axios from 'axios';
import './../App.css';

export function TopPage() {
  const [text, setText] = useState('');
  const [doubled_text, setDoubledText] = useState('');
  const onChangeText = (e) => setText(e.target.value);
  const onClick = () => {
        console.log("input text >>"+text)
    Axios.post('http://127.0.0.1:5000/doublify', {
      post_text: text
    }).then(function(res) {
      setDoubledText(res.data.result);
    })
  }

  return(
    <>
          <header className="App-header">
            <h1>text * 2</h1>
              <label>
                <input name="text" cols="80" rows="4" value={text} onChange={onChangeText} />
              </label>
              <br/>
              <button onClick={onClick}>doublify!</button>
              <p> {doubled_text} </p>
          </header>
        <br></br>
    </>
    );
}
