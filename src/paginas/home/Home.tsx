import React from 'react';
import homeLogo from '../../assets/img/Design sem nome (2).png'
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link } from 'react-router-dom';



function Home() {
    return (
        <>
        <div className="flex justify-center ">
          <div className='container grid grid-cols-2 blue-700'>
            <div className="flex flex-col gap-4 items-center justify-center py-4">
              <h2 className='text-5xl text-custom-color-h2 font-bold'>Seja bem vindo!</h2>
              <p className='text-xl text-custom-color-p text-center'>Escudo do Mar é a plataforma onde pescadores, mergulhadores e turistas podem relatar avistamentos de poluição, lixo marinho ou atividades ilegais como pesca predatória. Juntos, podemos monitorar e preservar nossos oceanos!</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <Link to="/postagens" className='rounded bg-red-500 hover:bg-red-400 text-white py-2 px-4 '>Ver Locais</Link>
            </div>
            </div>
  
            <div className="flex justify-center ">
              <img src={homeLogo} alt="" className='w-3/4' />
      
            </div>
          </div>
        </div>
        <ListaPostagens />
      </>
    );
}

export default Home;