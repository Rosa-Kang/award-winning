import React from 'react'
import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa'

const links = [
  {href: 'https://discord.com', icon:<FaDiscord />},
  {href: 'https://instagram.com', icon:<FaInstagram />},
  {href: 'https://githum.com', icon:<FaGithub />},
]

const Footer = () => {
  return (
    <footer className='w-screen bg-violet-30 py-4 text-blck'>
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
           <p className='text-center text-sm md:text-left'>
            &copy; Therosessom 2025, All rights reserved.
           </p>

           <div className="flex justify-center gap-4 md:jestify-start">
                {links.map((link)=> (
                  <a
                   key={link}
                   href={link.href}
                   target="_blank"
                   rel="noopener noreferrer"
                   className='text-black transition-color duration-500 ease-in-out hover:text-violet-500'
                  >
                    {link.icon}
                  </a>
                ))}
           </div>
          
          <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right transition-color duration-500 ease-in-out hover:text-violet-500">
            Privacy Policy
          </a>

        </div>
    </footer>
  )
}

export default Footer