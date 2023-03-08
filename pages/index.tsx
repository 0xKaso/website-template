import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="container bg-red-300 mx-auto py-10 flex">
          <div>
            <div className="columns-3 bg-slate-500 gap-8 ">1</div>
            <div className="columns-3 bg-slate-300 gap-8 ">1</div>
            <div className="columns-3 bg-slate-100 gap-8 ">1</div>
          </div>
          <div>
            <div className="columns-3 bg-slate-500 gap-8 ">1</div>
            <div className="columns-3 bg-slate-300 gap-8 ">1</div>
            <div className="columns-3 bg-slate-100 gap-8 ">1</div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-row gap-2">
            <div className="basis-1/4 bg-yellow-200">1</div>
            <div className="basis-1/2 hover:basis-1/4 bg-green-200">1</div>
            <div className="basis-1/4 bg-blue-200">1</div>
          </div>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col-reverse gap-3">
            <div className="bg-red-300">1</div>
            <div className="bg-red-300">2</div>
            <div className="bg-red-300">3</div>
          </div>
        </div>
        <div className="flex gap-3">
          <div className="flex-none w-14 h-14 bg-yellow-300">01</div>
          <div className="flex-initial w-64 bg-yellow-300">02</div>
          <div className="flex-1 w-64 bg-yellow-300">03</div>
        </div>
        <div className="flex gap-3">
          <div className=" h-12 bg-slate-500">01</div>
          <div className="grow h-12 bg-slate-500">02</div>
          <div className=" h-12 bg-slate-500">03</div>
        </div>
      </main>
    </div>
  );
};

export default Home;
