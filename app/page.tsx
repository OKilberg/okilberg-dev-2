import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center">
      <section className="mt-16 h-[726px] w-full flex justify-center">
        <div className="w-[970px] h-[476px] flex gap-6">
          <img className="flex-1 border border-black"></img>
          <div className="flex flex-col gap-6 flex-1">
            <div>
              <p className="text-lg">Hey, I'm Oscar</p>
              <h1 className="text-6xl font-bold">Frontend</h1>
              <h1 className="text-6xl font-bold">Developer</h1>
              <h1 className="text-6xl font-bold">&</h1>
              <h1 className="text-6xl font-bold">Designer</h1>
            </div>
            <hr></hr>
            <p className="text-lg">
              I'm a frontend developer based in Sweden, I'll help you build
              beautiful websites your users will love.
            </p>
            <div className="flex gap-6">
              <button className="px-5 h-10 font-semibold border border-black">Explore Projects</button>
              <button className="px-5 h-10 font-semibold bg-slate-700 text-slate-200">Get In Touch</button>
            </div>
          </div>
        </div>
      </section>
      <section className="h-[790px] w-full bg-slate-700">Skill Section</section>
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
