import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import loginLogo from '../../assets/img/logoPerfil.png';
import { toastAlerta } from '../../util/toastAlerta';
import banner from '../../assets/img/pexels-magda-ehlers-pexels-2832772.jpg';
import banner2 from '../../assets/img/pexels-andreas-l-2004808-3626111.jpg';

function Perfil() {
  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === '') {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro');
      navigate('/login');
    }
  }, [usuario.token]);

  return (
    <div className='container mx-auto mt-5 rounded-2xl overflow-hidden'>
      <img className='w-full h-72 object-cover border-b-8 border-white' src={banner} alt="Capa do Perfil" />
      <img src={loginLogo} alt={`Foto de perfil de ${usuario.nome}`} className='rounded-full w-56 mx-auto mt-[-8rem] border-8 border-white relative z-10' />
      <div className="relative mt-[-6rem] h-72 flex flex-col shadow-lg text-white text-2xl items-center justify-center">
        <img className='absolute inset-0 w-full h-full object-cover' src={banner2} alt="Banner Inferior" />
        <div className="relative z-10">
          <p>Nome: {usuario.nome} </p>
          <p>Email: {usuario.usuario}</p>
        </div>
      </div>
    </div>
  );
}

export default Perfil;
