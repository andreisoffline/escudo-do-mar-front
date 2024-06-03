// paginas/sobre/Sobre.tsx
import React from 'react';
import sobreImg from '../../assets/img/pexels-ron-lach-9034666.jpg'

const Sobre: React.FC = () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-4'>
      <div className='flex flex-col md:flex-row items-center'>
        <div className='md:w-1/2 p-4'>
          <p className='text-xl text-custom-color-p md:text-left'>
          Os oceanos, fundamentais para a sustentação da vida no planeta, enfrentam uma ameaça silenciosa e em expansão: a poluição marinha. Recentemente, pesquisadores do Instituto Oceanográfico da Universidade de São Paulo (USP) descobriram resíduos humanos, incluindo embalagens plásticas, calçados e brinquedos, em profundidades que variam de 200 a 1.500 metros ao longo da costa brasileira. Esse problema compromete não apenas os ecossistemas marinhos, mas também a economia global, especialmente em setores como pesca, turismo e comércio marítimo.
          </p>
          <br />
          <p className='text-xl text-custom-color-p md:text-left'>
          Pensando nisso, apresentamos a Escudo do Mar, uma plataforma centralizada para denunciar e monitorar a presença de lixo em nosso litoral. O projeto é alinhado com o Objetivo de Desenvolvimento Sustentável (ODS) 14 das Nações Unidas: conservação e uso sustentável dos oceanos, dos mares e dos recursos marinhos para o desenvolvimento sustentável. Oferecemos uma solução que permite que pescadores, turistas e mergulhadores denunciem a presença de poluição, lixo marinho ou atividades ilegais como pesca predatória. 
          </p>
        </div>
        <div className='md:w-1/2 p-4 flex flex-wrap justify-center'>
        <img src={sobreImg} alt="" className='w-3/4' />
        </div>
      </div>
    </div>
  );
}

export default Sobre;
