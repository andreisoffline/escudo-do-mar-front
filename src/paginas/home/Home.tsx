import React from 'react';
import homeLogo from '../../assets/img/logotipo.png';
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <div className="flex justify-center px-4">
                <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center py-8'>
                    <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                        <h2 className='text-3xl md:text-5xl text-blue-600 font-bold'>Seja bem-vindo!</h2>
                        <p className='text-lg md:text-xl text-custom-color-p'>
                            Escudo do Mar é a plataforma onde pescadores, mergulhadores e turistas podem relatar avistamentos de poluição, lixo marinho ou atividades ilegais como pesca predatória. Juntos, podemos monitorar e preservar nossos oceanos!
                        </p>
                        <div className="flex flex-col md:flex-row justify-around gap-4">
                            <ModalPostagem />
                            <Link to="/postagens" className='rounded bg-red-500 hover:bg-red-400 text-white py-2 px-4'>Ver Locais</Link>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <img src={homeLogo} alt="Escudo do Mar Logo" className='w-full md:w-3/4' />
                    </div>
                </div>
            </div>
            <div className="flex justify-center px-4">
                <h2 className='text-3xl md:text-3xl text-blue-600 font-bold text-left gap-20'>Locais recentes</h2>
            </div>
            <ListaPostagens />
        </>
    );
}

export default Home;
