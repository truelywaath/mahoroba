import React, { useState } from 'react';
import Axios from 'axios';
import './../App.css';

export function Doublify() {
  const [doublifytext, setDoublifyText] = useState('');
  const [doubled_text, setDoubledText] = useState('');

  const [triplifytext, setTriplifyText] = useState('');
  const [tripled_text, setTripledText] = useState('');

  const onDoublifyChangeText = (e) => setDoublifyText(e.target.value);
  const onTriplifyChangeText = (e) => setTriplifyText(e.target.value);

  const onDoublifyClick = () => {
        console.log("input text >>"+doubled_text)
    Axios.post('http://127.0.0.1:5000/doublify', {
      post_text: doublifytext
    }).then(function(res) {
      setDoubledText(res.data.result);
    });
  };

  const onTriplifyClick = () => {
    console.log("input text >>"+tripled_text)
    Axios.post('http://127.0.0.1:5000/triplify', {
      post_text: triplifytext
    }).then(function(res) {
      setTripledText(res.data.result);
    });
  };

  return(
    <>
          <header className="App-header">
            <div>
            <h1>text * 2</h1>
              <label>
                <input name="doublifytext" cols="80" rows="4" value={doublifytext} onChange={onDoublifyChangeText} />
              </label>
              <br/>
              <button onClick={onDoublifyClick}>doublify!</button>
              <p> {doubled_text} </p>
            </div>
            <div>
            <h1>text * 3</h1>
              <label>
                <input name="triplifytext" cols="80" rows="4" value={triplifytext} onChange={onTriplifyChangeText} />
              </label>
              <br/>
              <button onClick={onTriplifyClick}>triplify!</button>
              <p> {tripled_text} </p>
            </div>
          </header>
        <br></br>
    </>
    );
}
