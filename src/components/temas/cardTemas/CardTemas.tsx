import React from 'react'
import { Link } from 'react-router-dom'
import Tema from '../../../models/Tema'

interface CardTemaProps {
  tema: Tema
}

function CardTemas({tema}: CardTemaProps) {
  return (
    <div className='border-transparent border flex flex-col rounded-3xl overflow-hidden justify-between'>
      <header className='py-2 px-6 rounded-3xl bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg text-white font-bold text-2xl'>Cidade</header>
      <p className='p-8 text-3xl bg-transparent h-full'>{tema.descricao}</p>
      <div className="flex">
        <Link to={`/editarTema/${tema.id}`} className='w-full text-slate-100 bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarTema/${tema.id}`} className='text-slate-100 bg-red-500 hover:bg-red-400 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardTemas