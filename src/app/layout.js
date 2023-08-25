
import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Toaster } from "react-hot-toast";
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'YourBook',
  description: 'Created By Piyush Chaudhary',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
      <div className='original'>
      <Toaster position="top-center" reverseOrder={false} />
         <Navbar/>
       <div className='main'>{children}</div>
        <Footer/>
        </div>
        </body>
     
    </html>
  )
}
