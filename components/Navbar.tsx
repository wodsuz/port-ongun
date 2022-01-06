import { useState,useEffect, FunctionComponent } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const NavItem: FunctionComponent<{
    active: string
    setActive: Function
    name: string
    route: string
    }> = ({ active, setActive, name, route }) => {
        return active !== name ? (
        <Link href={route}>
            <a>
                <span
                    className='mx-2 cursor-pointer hover:border-b-4 hover:text-primary hover:border-secondary'
                    onClick={() => setActive(name)}>
                    {name}
                </span>
            </a>
        </Link>
        ) : null
 }

const Navbar = () => {
    const [active, setActive] = useState('')
    const {pathname} = useRouter()    

    useEffect(() => {
        if (pathname === '/') setActive('About')
        else if (pathname === '/projects') setActive('Projects')
        else if (pathname === '/resume') setActive('Resume')
    }, [])
    return (
<div className='flex items-center justify-between px-5 py-3 my-3'>
         <span className='text-xl font-bold border-b-4 md:text-2xl border-primary'>
            {active}
         </span>

         <div className='text-base font-normal md:text-xl'>
            <NavItem
               active={active}
               setActive={setActive}
               name='About'
               route='/'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Resume'
               route='/resume'
            />
            <NavItem
               active={active}
               setActive={setActive}
               name='Projects'
               route='/projects'
            />
         </div>
      </div>
    )
}

export default Navbar