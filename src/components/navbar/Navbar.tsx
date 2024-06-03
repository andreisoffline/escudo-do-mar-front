import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import { toastAlerta } from '../../util/toastAlerta'
import './Navbar.css'


function Navbar() {
  let navigate = useNavigate()

    const { usuario, handleLogout } = useContext(AuthContext)

    function logout() {
        handleLogout()
        toastAlerta('Usuário deslogado com sucesso', 'sucesso')
        navigate('/login')
    }

    let navbarComponent

    if(usuario.token !== "") {
      navbarComponent = (
        <div className='w-full  text-custom-color flex justify-center py-4 bg-gradient-to-r from-white to-[#1c4d6b]'>
          <div className="container flex justify-between text-lg">
            <Link to='/home' className='text-2xl font-bold uppercase '>Rede Ancora Event Hub</Link>

            <div className='flex gap-4'>
              <Link to='/postagens' className='hover:underline text-custom-color-1'>Eventos</Link>
              <Link to='/temas' className='hover:underline text-custom-color-1'>Temas</Link>
              <Link to='/cadastroTema' className='hover:underline text-custom-color-1'>Cadastrar tema</Link>
              <Link to='/perfil' className='hover:underline text-custom-color-1'>Perfil</Link>
              <Link to='' onClick={logout} className='hover:underline text-custom-color-1'>Sair</Link>
            </div>
          </div>
        </div>
      )
    }

  return (
    <>
      {navbarComponent}
    </>
  )
}

export default Navbar