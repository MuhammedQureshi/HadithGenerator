import { useEffect, useState } from 'react';

import { PageWrapper } from "./components/page-wrapper";
import Hadith from "./components/hadith";

async function Bukhari() {
  const res = await fetch('https://random-hadith-generator.vercel.app/bukhari/');
  const data = await res.json();

  return data.data;
}

export default async function Home() {

  const data = await Bukhari();

  return (
    <PageWrapper>
      <main className="flex bg5 min-h-screen flex-col items-center justify-center customBg">
        <div className="container p-2 max-w-[1250px] h-screen">
          <h1 className="flex p-4 text-3xl justify-center font-serif">Hadith a day</h1>
          <Hadith data={data} />
        </div>
      </main>
    </PageWrapper>
  );
}