import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import './Footer.css';

function Footer() {
  const { usuario } = useContext(AuthContext);
  let footerComponent;
  let data = new Date().getFullYear();

  if (usuario.token !== '') {
    footerComponent = (
      <div className="footer w-full bg-gradient-to-r from-blue-500 to-blue-700 text-white py-2">
        <div className="container mx-auto flex flex-col items-center">
          <p className='text-xl font-bold uppercase'>Escudo do Mar</p>
          <div className='flex gap-3 mt-1'>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#B7DAEA] transition duration-300'>
              <LinkedinLogo size={30} weight='bold' />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#B7DAEA] transition duration-300'>
              <InstagramLogo size={30} weight='bold' />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='hover:text-[#B7DAEA] transition duration-300'>
              <FacebookLogo size={30} weight='bold' />
            </a>
          </div>
          <p className='text-sm mt-1'>© {data} Escudo do Mar. Todos os direitos reservados.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {footerComponent}
    </>
  );
}

export default Footer;
