import React, { useState } from "react";

function TextFrom(props) {
  // const authorStyle = {
  //   right:"1200px"
  // }
  const [text, setText] = useState("");

  const changeToUpperCase = () => {
      
      setText(text.toUpperCase());
  };

  const changeToLowerCase = () => {
      setText(text.toLowerCase());
  };
  const handleOnChange = (event) => {
    
    setText(event.target.value);
  };

  const getNoOfWords = (word)=>{
    if(word===""){
        return 0;
    }
    return word.trim().split(" ").length;
  }

  const getNoOfCharacters = (characters)=>{
    return characters.length;
  }

  const clearText = ()=>{
    setText("")
  }

  const convertSentenceCase = ()=>{
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
      words[i] = words[i].charAt(0).toUpperCase()+words[i].slice(1);
    }

    setText(words.join(" "));

  }

  const encodeToBase = ()=>{
    setText(btoa(text))
  }

  const decodeText = ()=>{
    setText(atob(text));
  }

  const extractNumber = ()=>{
    let number = ""
    for(let i=0;i<text.length;i++){
      if(text.charAt(i)>='0' && text.charAt(i)<='9'){
        number += text.charAt(i);
      }
    }

    setText(number);
  }

  const extractText = ()=>{
    let sentence = "";
    for(let i=0;i<text.length;i++){
      if(text.charAt(i)>='a' && text.charAt(i)<='z'){
        sentence += text.charAt(i);
      }else if(text.charAt(i)>='A' && text.charAt(i)<='Z'){
        sentence += text.charAt(i);
      }
    }

    setText(sentence);
  }

  const removeWhiteSpace = ()=>{
    setText(text.trim())
  }

  const removeExtraSpace = ()=>{
    const regex =/ {2,}/g;
    const words = text.split(regex);
    console.log(words);
    setText(words.join(" "));
  }

  const replaceWords = ()=>{
    const word = prompt("Enter word")
    const newWord = prompt("Enter new word")
    if(word && newWord){
      setText(text.replace(new RegExp(word, "g"), newWord));
    }else{
      alert("Please Enter both word and new word")
    }
  }

  const removeSpacialChar = ()=>{
    let sentence = "";
    for(let i=0;i<text.length;i++){
      if(text.charAt(i)>='a' && text.charAt(i)<='z'){
        sentence += text.charAt(i);
      }else if (text.charAt(i)>='A' && text.charAt(i)<='Z'){
        sentence += text.charAt(i);
      }else if(text.charAt(i)>='0' && text.charAt(i)<='9'){
        sentence += text.charAt(i);
      }
    }

    setText(sentence);
  }

  const reverseText = ()=>{
    let chars = text.split("");
    let start = 0;
    let end = chars.length-1;

    while(start<end){
        let temp = chars[start];
        chars[start] = chars[end];
        chars[end] = temp;
        start++;
        end--;
    }

    setText(chars.join(""));
  }

  const copyText = ()=>{
    const textArea = document.querySelector("textarea");
    textArea.select();
    navigator.clipboard.writeText(textArea.value);
  }

  const pasteText = async () => {
    try {
        const text = await navigator.clipboard.readText();
        setText(text); // Update the state with the copied text
    } catch (error) {
        alert('Unable to paste from clipboard:');
    }
  }
  return (
    <>
      <div className="container">
        <div className="mb-3 my-3">
          <h4>{props.heading}</h4>
          <textarea
            className="form-control"
            id="text-form"
            rows="6"
            value={text}
            onChange={handleOnChange}
            placeholder="Enter Here"
            style={{backgroundColor:props.mode==='dark'?'#454372':'white',color:props.mode==='dark'?"whitesmoke":"black",fontSize:"1.2rem"}}
          ></textarea>
        </div>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={changeToUpperCase}
        >
          UpperCase
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={changeToLowerCase}
        >
          LowerCase
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={convertSentenceCase}
        >
          Convert to SentenceCase
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={encodeToBase}
        >
          Encode to base 64
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={decodeText}
        >
          Decode Text
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={extractNumber}
        >
          Extract Number
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={extractText}
        >
          Extract Text
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={removeWhiteSpace}
        >
          Remove White Space
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={removeExtraSpace}
        >
          Remove Extra Spaces
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={replaceWords}
        >
          Replace Words
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={removeSpacialChar}
        >
          Remove Spacial Character
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={reverseText}
        >
          Reverse Text
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={copyText}
        >
          Copy To Clipboard
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={pasteText}
        >
          Paste From Clipboard
        </button>
        <button
          id="submit-btn"
          className="btn btn-primary mx-1 my-1"
          onClick={clearText}
        >
          ClearText
        </button>
        
      </div>
      <div className="container my-3">
        <h1>Summary</h1>
        <h4>No of words:- {getNoOfWords(text)} </h4>
        <h4>No of character :- {getNoOfCharacters(text)}</h4>
        <h4>Time to read:- {(getNoOfWords(text)/300).toFixed(2)} minutes (an Average person takes 1 minute to read 300 words)</h4>
        <h4 className="mt-5">Your Written Text :- </h4>
        <p id="your-text">{text}</p>
        {/* <div className="author" style={authorStyle}>
          hello
        </div> */}
      </div>
    </>
  );
}

export default TextFrom;
