import Image from "next/image";
import { AiOutlineHtml5 } from "react-icons/ai";
import {
  FaDocker,
  FaEye,
  FaFigma,
  FaGitAlt,
  FaGlobe,
  FaHtml5,
  FaJava,
} from "react-icons/fa";
import { GrReactjs } from "react-icons/gr";
import { ImHtmlFive } from "react-icons/im";
import { IoLogoCss3, IoMdRocket } from "react-icons/io";
import { IoColorPalette } from "react-icons/io5";
import { SiNextdotjs, SiTypescript } from "react-icons/si";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center">
      <section className="lg:mt-16 lg:h-[726px] w-full flex justify-center p-4 lg:p-0">
        <div className="lg:w-[970px] lg:h-[476px] flex flex-col-reverse lg:flex-row gap-6">
          <img
            src="bg.jpg"
            className="bg-cover lg:flex-1 border border-black min-h-[276px] lg:max-w-[474px]"
          ></img>
          <div className="flex flex-col gap-6 flex-1 lg:justify-between">
            <div className="tracking-tighter	">
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
            <div className="flex gap-3 lg:gap-6 justify-between lg:justify-start">
              <button className="px-5 h-10 flex-1 font-semibold border border-black">
                Explore Projects
              </button>
              <button className="px-5 h-10 flex-1 font-semibold bg-slate-700 text-slate-200">
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
          <li className="h-[232px] w-[232px] border-t border-l border-slate-500 flex flex-col justify-between p-3">
            <ul className="flex flex-col gap-2 tracking-wider">
              <li className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-slate-100">
                  Typescript
                </h3>
                <i className="text-2xl text-slate-300">
                  <SiTypescript />
                </i>
              </li>
              <li className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-slate-100">HTML</h3>
                <i className="text-2xl text-slate-300">
                  <ImHtmlFive />
                </i>
              </li>
              <li className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-slate-100">CSS</h3>
                <i className="text-2xl text-slate-300">
                  <IoLogoCss3 />
                </i>
              </li>
              <li className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-slate-100">Java</h3>
                <i className="text-2xl text-slate-300">
                  <FaJava />
                </i>
              </li>
            </ul>
            <p className="text-lg text-slate-400">Technologies</p>
          </li>
          <li className="h-[232px] w-[232px] border-t border-l border-slate-500 flex flex-col justify-between p-3">
            <ul className="flex flex-col gap-2 tracking-wider">
              <li className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-slate-100">React</h3>
                <i className="text-2xl text-slate-300">
                  <GrReactjs />
                </i>
              </li>
              <li className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-slate-100">Nextjs</h3>
                <i className="text-2xl text-slate-300">
                  <SiNextdotjs />
                </i>
              </li>
            </ul>
            <p className="text-lg text-slate-400">Frameworks</p>
          </li>
          <li className="h-[232px] w-[232px] border-t border-l border-slate-500 flex flex-col justify-between p-3">
            <ul className="flex flex-col gap-2 tracking-wider">
              <li className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-slate-100">Figma</h3>
                <i className="text-2xl text-slate-300">
                  <FaFigma />
                </i>
              </li>
              <li className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-slate-100">Git</h3>
                <i className="text-2xl text-slate-300">
                  <FaGitAlt />
                </i>
              </li>
              <li className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-slate-100">Docker</h3>
                <i className="text-2xl text-slate-300">
                  <FaDocker />
                </i>
              </li>
            </ul>
            <p className="text-lg text-slate-400">Workflow</p>
          </li>
          <li className="h-[232px] w-[232px] border-t border-l border-slate-500 flex flex-col justify-between p-3">
            <ul className="flex flex-col gap-2 tracking-wider">
              <li className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-slate-100">
                  Creative
                </h3>
                <i className="text-2xl text-slate-300">
                  <IoColorPalette />
                </i>
              </li>
              <li className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-slate-100">
                  Initiative
                </h3>
                <i className="text-2xl text-slate-300">
                  <IoMdRocket />
                </i>
              </li>
              <li className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-slate-100">
                  Versatile
                </h3>
                <i className="text-2xl text-slate-300">
                  <FaGlobe />
                </i>
              </li>
              <li className="flex justify-between items-baseline">
                <h3 className="text-2xl font-bold text-slate-100">
                  Insightful
                </h3>
                <i className="text-2xl text-slate-300">
                  <FaEye />
                </i>
              </li>
            </ul>
            <p className="text-lg text-slate-400">Traits</p>
          </li>
        </ul>
      </section>
      <section className="lg:h-[790px] lg:w-[976px] lg:p-0 p-12 w-full overflow-hidden gap-7 flex flex-col justify-center items-center">
        <article className="flex flex-col gap-14 pb-3">
          <h2 className="text-6xl font-bold ">About Me</h2>
          <div className="flex flex-col-reverse lg:flex-row gap-7">
            <aside className="flex flex-col items-center">
              <img src="/img.jpg" alt="A photo of Oscar" className="lg:w-[232px] h-[232px] min-w-full bg-contain"></img>
              <ul className="flex w-full flex-col p-4 gap-2">
                <li className="flex justify-between">
                  <p className="text-slate-400">Age</p>
                  <p className="text-slate-600">25</p>
                </li>
                <li className="flex justify-between">
                  <p className="text-slate-400">Born</p>
                  <p className="text-slate-600">24.09.1998</p>
                </li>
                <li className="flex justify-between">
                  <p className="text-slate-400">Country</p>
                  <p className="text-slate-600">Sweden</p>
                </li>
                <li className="flex justify-between">
                  <p className="text-slate-400">City</p>
                  <p className="text-slate-600">Gothenburg</p>
                </li>
                <li className="flex justify-between">
                  <p className="text-slate-400">Degree</p>
                  <p className="text-slate-600">MSc</p>
                </li>
                <li className="flex justify-between">
                  <p className="text-slate-400">Uni</p>
                  <p className="text-slate-600">Chalmers</p>
                </li>
                <li className="flex flex-col items-center mt-2 text-xs tracking-widest">
                  <p className="text-slate-600">oscar.oravakilberg@gmail.com</p>
                </li>
              </ul>
            </aside>
            <div className="text-xl tracking-wide p-7 border-r border-t border-r-gray-400 border-t-gray-400">
              <h3 className="font-semibold">Hey, I am Oscar</h3>
              <p>I was born in Borås and then moved to Gothenburg lorem ipsum... Etiam non feugiat risus. Quisque risus mi, dapibus condimentum nulla sagittis, tincidunt consectetur massa. Vivamus rutrum.<br/><br/>
              Duis pulvinar diam nec scelerisque faucibus. Praesent commodo dui commodo tristique lobortis. Phasellus at lectus imperdiet tellus convallis ullamcorper. Vestibulum vitae tincidunt lectus, sit amet lobortis quam.<br/><br/> 
              Nulla libero mauris, posuere vel commodo ut, sagittis ac mauris. Nam vestibulum eros sed condimentum blandit.</p>
            </div>
          </div>
        </article>
      </section>
      <section className="h-[790px] w-full bg-slate-700">
        Projects Section
      </section>
      <section className="h-[790px] w-full bg-slate-500">
        Experience Section
      </section>
    </main>
  );
}
