import React from 'react';
import homeLogo from '../../assets/img/logotipo.png';
import './Home.css';
import ListaPostagens from '../../components/postagens/listaPostagens/ListaPostagens';
import ModalPostagem from '../../components/postagens/modalPostagem/ModalPostagem';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>  
            <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-5 lg:overflow-visible lg:px-0">
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <svg
                        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-100 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                        aria-hidden="true"
                    >
                        <defs>
                            <pattern
                                id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                                width={200}
                                height={200}
                                x="50%"
                                y={-1}
                                patternUnits="userSpaceOnUse"
                            >
                                <path d="M100 200V.5M.5 .5H200" fill="none" />
                            </pattern>
                        </defs>
                        <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                            <path
                                d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                                strokeWidth={0}
                            />
                        </svg>
                        <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                    </svg>
                </div>
                <div className="flex justify-center px-4">
                    <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4 items-center py-8'>
                        <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
                            <h2 className='text-3xl md:text-5xl text-blue-500 font-bold'>Seja bem-vindo!</h2>
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
            </div>
        </>
    );
}

export default Home;
