"use client"
import { Button } from "@/components/Button/Button";
import { Container } from "@/components/IdeaContainer/Container";
import { TextAreaInput } from "@/components/TextAreaInput/TextAreaInput";
import { useState } from "react";

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [entryValue, setEntryValue] = useState(['']);

  const onClick = (value: string)=>{
    setEntryValue((previous)=>{ return[...previous, value]});
  }

  return (
    <div className="container-main">
      <div id="show_comments" className="comment-container">
        <h1>My ideas!</h1>
        <Container entryList = {entryValue} />
      </div>
      <div className="comment-section">
        <TextAreaInput inputValue={inputValue} onInputChange={setInputValue} />
        <Button inputValue={inputValue} onButtonClick = {onClick} />
      </div>
    </div>
  );
}
