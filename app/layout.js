//css import
import './globals.css'

// font imports and set up
import { Quicksand } from 'next/font/google'
const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand', });



// component imports
import Navbar from './_components/navbar'
import Footer from './_components/footer'

export const metadata = {
  title: 'Mart Software Engineer Portfolio',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <>
    <body className='dark:bg-zinc-900'>
    <main className={`${quicksand.variable} font-sans flex flex-col pl-4 pr-4 md:pl-40 md:pr-40 w-full max-w-screen-2xl 2xl:m-auto dark:text-white`}>
      {/* commented out until it's ready */}
      < Navbar />
      {children}
      < Footer />
    </main>
    </body>
    </>
  )
}
