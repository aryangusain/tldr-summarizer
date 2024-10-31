import './globals.css';
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
})

export const metadata = {
  title: "TLDR Summarizer",
  description: "Summarize Text",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className + " " + "dark"}>
      <body className='p-0 m-0 flex flex-col justify-center items-center h-screen'>
        {children}
      </body>
    </html>
  );
}
