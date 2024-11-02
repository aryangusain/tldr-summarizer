import { auth } from "@/auth";
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { redirect } from "next/navigation";
import { SparklesCore } from "@/components/ui/sparkles";

export default async function Home() {
  const session = await auth()
  
  if(session?.user) {
    'use server'
    redirect('/home');
  }

  return (
    <main className="flex flex-col items-center justify-center gap-8">
          <div className="flex flex-col gap-4 items-center opacity-1">
            <Logo></Logo>
            <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400 text-center"><span>Instant Summaries.</span><br></br><span>Save Time, Read More!</span></p>
          </div>
          <Link href='/auth/signin' className="opacity-1"><Button>Get Started</Button></Link>
    </main>
  );
}
