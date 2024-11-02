'use client';

import React, { useState } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import copy from 'copy-to-clipboard';
import Image from 'next/image';

function Home() {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setOutputText('');
    setInputText(e.target.inputText.value);
    console.log(inputText);

    try {
      const response = await fetch('/api/summarize', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ inputText }),
      });
      const data = await response.json();
      await setOutputText(data.text);
      console.log(outputText)
    } 
    catch (error) {
      console.error('Failed to summarize text:', error);
      setOutputText('Error: Could not fetch summary.');
    }
    finally {
      setLoading(false);
    }
  }

  function handleCopy() {
    copy(outputText);
    setCopied(true);
    setTimeout(() => setCopied(false), 1000);
  };

  return (
    <div className='flex flex-col gap-12 lg:w-1/2 md:w-2/3 w-3/4 opacity-1'>
      <form onSubmit={handleSubmit} className="grid gap-2 w-full">
        <Textarea
          id='inputText'
          name='inputText'
          placeholder="Type your text here."
          value = {inputText}
          onChange={(e) => {setInputText(e.target.value)}}
          className='min-h-60 [&::-webkit-scrollbar]:hidden lg:leading-6 bg-black'
          disabled={loading}
        />
        <Button type='submit' disabled={loading} className='mt-2'>
          {loading ? 'Summarizing...' : 'Summarize Text'}
        </Button>
      </form>
      <div className='w-full bg-gray-800 p-4 rounded-lg' >
        <div className='flex justify-between mb-2'>
          <h2 className='mb-2'>Summary</h2>
          <div onClick={handleCopy} aria-label="Copy text" className='cursor-pointer'>
            {!copied ? 
              <Image 
                  src='/copy-icon.svg' 
                  onClick={handleCopy}
                  width={16}
                  height={16}
                  alt='copy icon'
                  className={outputText=='' ? 'hidden': 'mt-1'}
                /> 
              : 
              <Image
                  src='/check-icon.svg'
                  width={16}
                  height={16}
                  alt='check icon'
                  className='mt-1'
              />
            }
          </div>
        </div>
        <div className='text-sm font-light animate-in lg:leading-6'>{outputText}</div>
      </div>
    </div>
  );
}

export default Home;
