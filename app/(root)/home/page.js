'use client';

import React, { useEffect, useState } from 'react'
import { TextGenerateEffect } from '@/components/ui/text-generate-effect'
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { pipeline } from '@xenova/transformers';

function Home() {

  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  
  async function handleSubmit(event) {
    event.preventDefault();
    
    setInputText(event.target.inputText.value);
    
    const pipe = await pipeline("summarization", "Xenova/distilbart-cnn-6-6");
    const result = await pipe(inputText);

    setOutputText(result[0].summary_text);
  }

  return (
    <div className='flex flex-col gap-12 lg:w-1/2 md:w-2/3 w-3/4'>
      <form onSubmit={(event) => handleSubmit(event)} className="grid gap-2 w-full">
        <Textarea id='inputText' name='inputText' placeholder="Type your text here." />
        <Button type='submit'>Summarize Text</Button>
      </form>
      <div className='w-full'>
        <TextGenerateEffect className='text-sm font-light' words={outputText}></TextGenerateEffect>
      </div>
    </div>
  )
}

export default Home