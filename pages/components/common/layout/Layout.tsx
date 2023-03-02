import { ReactNode } from 'react'
import  Footer  from './Footer'
import  Header  from './Header'
interface LayoutProps {
    children:ReactNode
}
function Layout  ({children}:LayoutProps)  {
  return (
    <div className=' overflow-x-hidden mx-10 mt-8'>
    <Header/>
    {children}
    <Footer/>
    </div>
  )
}


export default Layout
