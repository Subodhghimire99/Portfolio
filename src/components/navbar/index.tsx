import React from 'react';
import MainNav from './mainNav';
import NameAndLogo from './nameAndLogo';



const Navbar = ()=>{
    return(
        <div className='flex gap-[2rem] bg-card py-[1rem]'>
            <NameAndLogo/>
            <MainNav/>
        </div>
    )
}

export default Navbar;