import React from 'react';
import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid';
import sobreImg from '../../assets/img/plastic.jpg';
import { AndroidLogo, House, Trash } from 'phosphor-react';

const Sobre: React.FC = () => {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-20">
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
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-blue-700">Conheça o nosso projeto</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Uma alternativa para a poluição nos mares</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Os oceanos, fundamentais para a sustentação da vida no planeta, enfrentam uma ameaça silenciosa e em expansão: a poluição marinha. 
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto -ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img src={sobreImg} alt="" className="w-full max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[50rem] lg:w-full" />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Pensando nisso, apresentamos a Escudo do Mar, uma plataforma centralizada para denunciar e monitorar a presença de lixo em nosso litoral. O projeto é alinhado com o Objetivo de Desenvolvimento Sustentável (ODS) 14 das Nações Unidas: conservação e uso sustentável dos oceanos, dos mares e dos recursos marinhos para o desenvolvimento sustentável. Oferecemos uma solução que permite que pescadores, turistas e mergulhadores denunciem a presença de poluição, lixo marinho ou atividades ilegais como pesca predatória.
              </p>
              <ul role="list" className=" mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <Trash weight="bold" className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  <span>
                    <strong className=" text-gray-900">Encontrou Lixo no mar ou praia?</strong>Nossa plataforma se diferencia por facilitar o monitoramento em tempo real da saúde dos oceanos: será possível relatar pontos de ação, que serão encontrados com precisão por meio da geolocalização e imagens. 
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <House weight="bold" className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  <span>
                    <strong className=" text-gray-900">Auxiliamos o comércio local e as famílias:</strong> Nosso projeto gera valor para ONGs ambientais, órgãos governamentais e empresas do setor marítimo. De acordo com a Marinha do Brasil, em aproximadamente 8.500 quilômetros de faixa litorânea, concentram-se 80% da população.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <AndroidLogo weight="bold" className="mt-1 h-5 w-5 flex-none text-blue-600" aria-hidden="true" />
                  <span>
                    <strong className=" text-gray-900">Rápido e gratuito:</strong> Encontre ou denuncie uma área com lixo ou poluição de maneira
                    rápida e fácil com apenas alguns cliques.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Nossa missão é combater a poluição marinha. Através da plataforma Escudo do Mar, qualquer pessoa pode relatar a presença de lixo e resíduos, promovendo a conservação dos oceanos.
              </p>
              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Faça a diferença</h2>
              <p className="mt-6">
                Cada denúncia feita na plataforma Escudo do Mar ajuda a reduzir a poluição marinha. Faça parte da mudança com Escudo do Mar. Denuncie poluição, compartilhe informações e inspire outros a protegerem nossos preciosos recursos marinhos.
              </p>
              <div className="mt-8">
                <iframe 
                  className="w-full rounded-xl" 
                  height="315" 
                  src="https://www.youtube.com/embed/7nuEbJr3UNE?si=7xcnPSuyu3gwFhIN"
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen>
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sobre;
