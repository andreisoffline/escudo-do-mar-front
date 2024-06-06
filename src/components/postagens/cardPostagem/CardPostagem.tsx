import React from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem'
import usuarioFoto from '../../assets/img/Foto-perfil.jpg'

interface CardPostagemProps {
  post: Postagem
}

function CardPostagem({post}: CardPostagemProps) {
  return (
    <div className='border-transparent border flex flex-col rounded-3xl overflow-hidden justify-between'>
      <div>
        <div className="flex w-full rounded-3xl border bg-gradient-to-r from-blue-500 to-blue-700  shadow-lg py-2 px-4 items-center gap-4">
          <img src={post.usuario?.foto} className='h-12 rounded-full' alt="" />
          <h3 className='text-lg font-bold text-center uppercase text-white'>{post.usuario?.nome}</h3>
        </div>
        <div className='p-4 '>
          <h4 className='text-lg font-semibold uppercase text-blue-700'>{post.titulo}</h4>
          <p>{post.texto}</p>
          <p>Cidade: {post.tema?.descricao}</p>
          <p>Data: {new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'full',
                    timeStyle: 'medium',
                  }).format(new Date(post.data))}</p>
        </div>
      </div>
      <div className="flex">
      <Link to={`/editarPostagem/${post.id}`} className='w-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 shadow-lg  flex items-center justify-center py-2'>
          <button>Editar</button>
        </Link>
        <Link to={`/deletarPostagem/${post.id}`} className='text-white bg-red-500 hover:bg-red-400 w-full flex items-center justify-center'>
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  )
}

export default CardPostagem