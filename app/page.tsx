import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <section className="lg:mt-16 lg:h-[726px] w-full flex justify-center p-4 lg:p-0">
        <div className="lg:w-[970px] lg:h-[476px] flex flex-col-reverse lg:flex-row gap-6">
          <img className="lg:flex-1 border border-black min-h-[276px]"></img>
          <div className="flex flex-col gap-6 flex-1 lg:justify-between">
            <div>
              <p className="text-lg">Hey, I&apos;m Oscar</p>
              <h1 className="text-6xl font-bold">Frontend</h1>
              <h1 className="text-6xl font-bold">Developer</h1>
              <h1 className="text-6xl font-bold">&</h1>
              <h1 className="text-6xl font-bold">Designer</h1>
            </div>
            <hr></hr>
            <p className="text-lg">
              I&apos;m a frontend developer based in Sweden, I&apos;ll help you
              build beautiful websites your users will love.
            </p>
            <div className="flex gap-6 justify-between lg:justify-start">
              <button className="px-5 h-10 font-semibold border border-black">
                Explore Projects
              </button>
              <button className="px-5 h-10 font-semibold bg-slate-700 text-slate-200">
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="lg:h-[790px] lg:p-0 p-12 w-full overflow-hidden bg-slate-900/[.96] gap-7 flex flex-col justify-center items-center">
        <h2 className="text-6xl font-bold text-slate-100">Skills</h2>
        <p className="text-lg text-slate-400">I have obtained in my life</p>
        <ul className="flex lg:flex-row flex-col gap-6 justify-start">
          <li className="h-[232px] w-[232px] border-t border-l border-slate-500 flex flex-col p-3">
            <ul className="flex flex-col gap-2">
              <li className="flex justify-between">
                <h3 className="text-2xl font-bold text-slate-100">Typescript</h3>
                <i className="text-slate-300">X</i>
              </li>
              <li className="flex justify-between">
                <h3 className="text-2xl font-bold text-slate-100">HTML</h3>
                <i className="text-slate-300">X</i>
              </li>
              <li className="flex justify-between">
                <h3 className="text-2xl font-bold text-slate-100">CSS</h3>
                <i className="text-slate-300">X</i>
              </li>
              <li className="flex justify-between">
                <h3 className="text-2xl font-bold text-slate-100">Java</h3>
                <i className="text-slate-300">X</i>
              </li>
            </ul>
          </li>
          <li className="h-[232px] w-[232px] border-t border-l border-slate-500">
          </li>
          <li className="h-[232px] w-[232px] border-t border-l border-slate-500"></li>
          <li className="h-[232px] w-[232px] border-t border-l border-slate-500"></li>
        </ul>
      </section>
      <section className="h-[790px] w-full bg-slate-500">About Section</section>
      <section className="h-[790px] w-full bg-slate-700">
        Projects Section
      </section>
      <section className="h-[790px] w-full bg-slate-500">
        Experience Section
      </section>
    </main>
  );
}
