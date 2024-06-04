import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { toastAlerta } from '../../util/toastAlerta';
import './Navbar.css';

function Navbar() {
  let navigate = useNavigate();
  const { usuario, handleLogout } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function logout() {
    handleLogout();
    toastAlerta('Usuário deslogado com sucesso', 'sucesso');
    navigate('/login');
  }

  let navbarComponent;

  if (usuario.token !== "") {
    navbarComponent = (
      <div className='w-full text-white flex justify-center py-4 bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg'>
        <div className="container flex justify-between items-center text-lg px-6">
          <Link to='/home' className='text-3xl font-bold uppercase hover:text-[#B7DAEA] transition duration-300'>Escudo do Mar</Link>
          <div className="md:hidden" onClick={toggleMenu}>
            <button className="text-3xl focus:outline-none">
              &#9776;
            </button>
          </div>
          <div className={`flex-col md:flex md:flex-row gap-6 ${isOpen ? 'flex' : 'hidden'} md:flex`}>
            <input
              type="text"
              placeholder="Pesquisar..."
              className="px-3 py-1 rounded-full border border-gray-100 focus:outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Link to='/postagens' className='hover:text-[#B7DAEA] transition duration-300'>Locais</Link>
            <Link to='/temas' className='hover:text-[#B7DAEA] transition duration-300'>Cidades</Link>
            <Link to='/cadastroTema' className='hover:text-[#B7DAEA] transition duration-300'>Cadastrar Cidade</Link>
            <Link to='/perfil' className='hover:text-[#B7DAEA] transition duration-300'>Perfil</Link>
            <Link to='/sobre' className='hover:text-[#B7DAEA] transition duration-300'>Sobre</Link>
            <Link to='' onClick={logout} className='hover:text-[#B7DAEA] transition duration-300'>Sair</Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;
