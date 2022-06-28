import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked." + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!", "success");
    document.title = "TextUtils - UpperCase Conversion";
  };
  const handleLoClick = () => {
    console.log("Lowercase was clicked." + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase!", "success");
    document.title = "TextUtils -LowerCase Conversion";
  };
  const handleExtraSpace = () => {
    console.log("Extra spaces removed." + text);
    let newText = text.split(/[ ]+/);

    setText(newText.join(" "));
    document.title = "TextUtils - Remove extra spaces ";
  };
  const clearClick = () => {
    console.log("Clear Text was clicked." + text);
    let newText = " ";
    setText(newText);
    document.title = "TextUtils - Clear text";
  };

  const handleCopy = () => {
    console.log("copied");
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.title = "TextUtils - Text Copy";
  };
  const handleReverse = (event) => {
    let strArr = text.split("");
    strArr = strArr.reverse();
    let newText = strArr.join("");
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  
  const replaceString=()=>{
    let repval=prompt("Enter the word to be replaced:")
    let tobereplaced= new RegExp(repval,'g');

    let toreplace=prompt("Enter the text that you want to replace with:");
    
    let newText= text.replace(tobereplaced,toreplace);
    setText(newText);
  }

  const capitalFirstLetter = ()=>{
    let words = text.split(" ")
   let uppercaseword = ' '
    words.forEach(element => {
       uppercaseword += element.charAt(0).toUpperCase() + element.slice(1) + " "
    });
    setText(uppercaseword)
}
const onRemoveDuplicatesClick = (e) => {
  let newText = text.split(' ').filter(function(item,i,allItems){
      return i === allItems.indexOf(item);
  }).join(' ');

  setText(newText)
}
const handleSPerLineClick =() =>{
  let newText = text.replaceAll('.',"\n");
  setText(newText);
}
function capitalizeSelectedText() {
  if (window.getSelection) {
  let selectedText = window.getSelection().toString();
  
  if (selectedText) {
  let newText = text.replace(selectedText, selectedText.toUpperCase());
  setText(newText);
  }
  }
  }
  const readTxt = (event) => {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.onload = function(event){
        setText(event.target.result);
    };
    reader.readAsText(file);
}
const textToSentenceCase = () => {
  const arr = text.split(". ");

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  const newtext3 = arr.join(". ");
  setText(newtext3);
  }
  const vowelCheck = ()=>{
    const count = text.match(/[aeiou]/gi).length;
    setText("You have "+count + " no of vowels");
}
  const handleSrchClick = () => {
    let str = prompt("enter the string you wanna search :");
    let newText = text.includes(str, 0);
    if (newText === true){
        setText(str + " is present");
    }
    else{
        setText(str + " is not present");
    }
}
const handlevoice =()=>{
  let speech = new SpeechSynthesisUtterance();
  speech.lang = "en-US";
  speech.text = text;
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;                
  window.speechSynthesis.speak(speech);
}
const handleTrim = () => {
  let NewText= text.trim("    ");
  setText(NewText);
}
const handleUnderscore = ()=>{
  let newText = text.replace(/ /g,  "_");
  setText(newText);
}     
const handleItalicFont = () => {
  var text = document.getElementById("myBox");
  text.style.fontStyle = "italic"
}
const download=(filename, text)=>{
  var element = document.createElement('a');
  element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
  element.setAttribute('download', filename);
  element.style.display = 'none'; 
  document.body.appendChild(element);
  element.click(); 
  document.body.removeChild(element);
}
const handleCutclick = () => {
  console.log("Cut case was clicked" + text);
  let newText = document.getElementById("myBox");
  newText.select();
  navigator.clipboard.writeText(newText.value);
  newText.value = '';
}
const handlefont =()=>{
  var element = document.getElementById("myBox");
  element.style.fontFamily = "cursive";
}
const handlefontNormal =()=>{
  var element = document.getElementById("myBox");
  element.style.fontFamily = "Arial";
}
const textToBin =()=> {
  let newText = "";
  for (var i = 0; i < text.length; i++) {
    newText += text[i].charCodeAt(0).toString(2) + " ";
}
  setText(newText);
}
const orderWords = () =>{
  const words = text.split(" ");
  words.sort();
  let newText="";
  for (var i = 0; i < words.length; i++) {
    newText += words[i]+ " ";
}
setText(newText);
}
const repeat = () =>{
  let newText = text.repeat(2);
  setText(newText);
}
  const [text, setText] = useState(" ");
  
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <label for="myBox">Enter your text below.</label>
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary " onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-4" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary " onClick={clearClick}>
          Clear the Text
        </button>
        <button className="btn btn-primary mx-4" onClick={handleCopy}>
          Copy the Text
        </button>
        <button className="btn btn-primary my-4 " onClick={capitalFirstLetter}>
         Capitalise First Letter
        </button>
        <button
          className="btn btn-primary my-4 mx-4"
          onClick={handleExtraSpace}
        >
          Remove extra Spaces
        </button>
        <button className="btn btn-primary " onClick={handleReverse}>
          Reverse text
        </button>
        <button className="btn btn-primary mx-4" onClick={replaceString}>
          Replace
        </button>
        <button className="btn btn-primary " onClick={onRemoveDuplicatesClick}>
         Remove duplicate words
        </button>
        <button className="btn btn-primary mx-4" onClick={handleSPerLineClick}>
         Convert Paragraph to lines
        </button>
        <button className="btn btn-primary my-4" onClick={capitalizeSelectedText}>
         Capitalize selected text
        </button>
        
        
        <input type="file" className="btn btn-primary mx-4" accept="text/plain" onChange = {readTxt}/>
        <button className="btn btn-primary my-4" onClick={textToSentenceCase}>
        LowerCase to SentenceCase
        </button>
        <button className="btn btn-primary my-4 mx-4" onClick={handleSrchClick}>
        Search in text
        </button>
        <button className="btn btn-primary mx-4" onClick={handlevoice}>Text to Voice</button>
        <button className="btn btn-primary my-4" onClick={handleTrim}>Trim text</button>
        <button className="btn btn-primary mx-4" onClick={handleUnderscore}>Add Underscore</button>
        <button className="btn btn-primary " onClick={handleItalicFont}>Change to italic</button>
        <button className="btn btn-primary my-4 mx-4" onClick={download}>Download</button>
        <button className="btn btn-primary " onClick={handleCutclick}>Cut the text</button>
        <button className="btn btn-primary mx-4" onClick={vowelCheck}>Count vowels</button>
        <button className="btn btn-primary " onClick={handlefont}>Change font</button>
        <button className="btn btn-primary mx-4" onClick={handlefontNormal}>Change font to arial</button>
        <button className="btn btn-primary " onClick={textToBin}>Text to binary</button>
        <button className="btn btn-primary mx-4" onClick={orderWords}>Ascending order of ASCII</button>
        <button className="btn btn-primary " onClick={repeat}>Repeat text</button>
      </div>
      <div className="container my-2">
        <h3>Your text summary.</h3>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words ,{text.length} characters.{" "}
        </p>
        <p>Average reading time - {text.split(" ").length * 0.008} seconds. </p>
        <p>
          {text === ""
            ? text
                .trim()
                .split(".")
                .filter((text) => text !== "").length
            : text.split(".").length - 1}{" "}
           no. of sentences
           (a sentence is identfied as a text which is ending with a ".")
        </p>
      </div>
    </>
  );
}
