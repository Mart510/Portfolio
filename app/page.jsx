// google font import
import { Quicksand } from 'next/font/google'
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand', });

// component imports
import Titler from './_components/title';
import Navbar from './_components/navbar';
import GetInTouch from './_components/GetInTouch';
import ProjectBox from './_components/projectBox';
import Toolbox from './_components/toolbox';
import AboutMe from './_components/aboutMe';
import Footer from './_components/footer';

// data import
import { projectsData } from "./projectData/projectCardData.js";    // array of project objects
import { toolBoxData } from './projectData/toolBoxData' // array of tools
import { imageOptimizer } from 'next/dist/server/image-optimizer';

// home function is called 
export default function Home() {
  return (
    <>
    <main className={`${quicksand.variable} font-sans flex flex-col pl-40 pr-40 w-full 2xl:w-2/5 2xl:m-auto 2xl:items-center`}>
    < Navbar />
    < Titler />
    < ProjectBox projectsArray={projectsData} />
    < Toolbox />
    < AboutMe />
    < GetInTouch />
    < Footer />
    </main>
    </>
  )
}