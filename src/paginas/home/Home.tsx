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
              <p className='text-xl text-custom-color-p'>Clique e veja os próximos eventos da Rede Ancora</p>
  
              <div className="flex justify-around gap-4">
              <ModalPostagem />
              <Link to="/postagens" className='rounded bg-[#c91d34] hover:bg-[#d77c84] text-white py-2 px-4 '>Ver eventos</Link>
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