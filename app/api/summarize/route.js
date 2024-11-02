import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

export async function POST(request) {
  const { inputText } = await request.json();

  const genAI = new GoogleGenerativeAI(process.env.API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  try {
    const prompt = `Summarize this text - ${inputText}`;
    const result = await model.generateContent(prompt);
    return NextResponse.json({ text: result.response.text() });
  } 
  catch (error) {
    console.error('Error fetching summary:', error);
    return NextResponse.json(
      { message: 'Failed to fetch summary' },
      { status: 500 }
    );
  }
}
