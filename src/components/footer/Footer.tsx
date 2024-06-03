import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'
import React, { useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import './Footer.css'


function Footer() {

  const { usuario, handleLogout } = useContext(AuthContext)

  let footerComponent

  let data = new Date().getFullYear()

  if(usuario.token !== '') {
    footerComponent = (
      <>
        <div className="flex justify-center bg-[#85a0b0] text-custom-color-footer">
          <div className="container flex flex-col items-center py-1">
            <p className='text-xl font-bold'>Rede Ancora Event Hub | Copyright: {data}</p>
            <p className='text-lg '>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={45} weight='bold' />
              <InstagramLogo size={45} weight='bold' />
              <FacebookLogo size={45} weight='bold' />
            </div>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      {footerComponent}
    </>
  )
}

export default Footer