import './globals.css';
import { Poppins } from 'next/font/google'
import { SparklesCore } from '@/components/ui/sparkles';

const poppins = Poppins({
  weight: '400',
  style: 'normal',
  subsets: ['latin'],
})

export const metadata = {
  title: "TLDR Summarizer",
  description: "Summarize Text, Read More",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.className + " " + "dark"}>
      <head>
        <link rel='icon' href='/favicon.ico' />
      </head>
      <body className='p-0 m-0 flex flex-col justify-center items-center h-screen [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-thumb]:bg-gray-700 [&::-webkit-scrollbar-thumb]:rounded-full'>
        <div className="w-full absolute inset-0 h-screen -z-10">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.4}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#575353"
          />
        </div>
        {children}
      </body>
    </html>
  );
}
