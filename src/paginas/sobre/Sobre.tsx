import React from 'react';
import sobreImg from '../../assets/img/pexels-ron-lach-9034666.jpg';
import sobreImg2 from '../../assets/img/pexels-n-voitkevich-4813970.jpg'

const Sobre: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 p-4'>
          <p className='text-xl text-custom-color-p text-justify'>
            Os oceanos, fundamentais para a sustentação da vida no planeta, enfrentam uma ameaça silenciosa e em expansão: a poluição marinha. Recentemente, pesquisadores do Instituto Oceanográfico da Universidade de São Paulo (USP) descobriram resíduos humanos, incluindo embalagens plásticas, calçados e brinquedos, em profundidades que variam de 200 a 1.500 metros ao longo da costa brasileira. Esse problema compromete não apenas os ecossistemas marinhos, mas também a economia global, especialmente em setores como pesca, turismo e comércio marítimo.
          </p>
          <br />
          <p className='text-xl text-custom-color-p text-justify'>
            Pensando nisso, apresentamos a Escudo do Mar, uma plataforma centralizada para denunciar e monitorar a presença de lixo em nosso litoral. O projeto é alinhado com o Objetivo de Desenvolvimento Sustentável (ODS) 14 das Nações Unidas: conservação e uso sustentável dos oceanos, dos mares e dos recursos marinhos para o desenvolvimento sustentável. Oferecemos uma solução que permite que pescadores, turistas e mergulhadores denunciem a presença de poluição, lixo marinho ou atividades ilegais como pesca predatória.
          </p>
          <div className='w-full mt-6'>
          <iframe
              width="100%"
              height="320"
              src="https://www.youtube.com/embed/iYSbJ3_82hA?si=Iwzz8LS4BI-oA5aL"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              className='rounded-lg'
            ></iframe>
            </div>
        </div>
        <div className='md:w-1/2 p-5 flex flex-wrap justify-center items-center'>
          <img src={sobreImg} alt="" className='w-3/4 md:w-full max-w-sm rounded-lg mr-4' />
          <img src={sobreImg2} alt="" className='w-3/4 md:w-full max-w-sm rounded-lg ml-4' />
          <div className='w-full mt-6'>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
