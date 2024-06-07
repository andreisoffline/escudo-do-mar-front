import React, { ChangeEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Usuario from '../../models/Usuario';
import { cadastrarUsuario } from '../../services/Service';
import './Cadastro.css';
import { toastAlerta } from '../../util/toastAlerta';

function Cadastro() {
  let navigate = useNavigate();

  const [confirmaSenha, setConfirmaSenha] = useState<string>("");
  const [usuario, setUsuario] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  });
  const [usuarioResposta, setUsuarioResposta] = useState<Usuario>({
    id: 0,
    nome: '',
    usuario: '',
    senha: '',
    foto: ''
  });

  useEffect(() => {
    if (usuarioResposta.id !== 0) {
      back();
    }
  }, [usuarioResposta]);

  function back() {
    navigate('/login');
  }

  function handleConfirmarSenha(e: ChangeEvent<HTMLInputElement>) {
    setConfirmaSenha(e.target.value);
  }

  function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value
    });
  }

  async function cadastrarNovoUsuario(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    if (confirmaSenha === usuario.senha && usuario.senha.length >= 8) {
      try {
        await cadastrarUsuario(`/usuarios/cadastrar`, usuario, setUsuarioResposta);
        toastAlerta('Usuário cadastrado com sucesso', 'sucesso');
      } catch (error) {
        toastAlerta('Preenchimento Incorreto', 'erro');
      }
    } else {
      toastAlerta('Dados inconsistentes. Verifique as informações de cadastro.', 'erro');
      setUsuario({ ...usuario, senha: "" }); // Reinicia o campo de Senha
      setConfirmaSenha(""); // Reinicia o campo de Confirmar Senha
    }
  }

  return (
    <>
      <div className="relative isolate overflow-hidden bg-white h-screen">
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
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
        <div className="grid grid-cols-1 lg:grid-cols-2 h-full place-items-center font-bold px-4">
          <div className="fundoCadastro hidden lg:block"></div>
          <form className='flex justify-center items-center flex-col w-2/3 gap-3' onSubmit={cadastrarNovoUsuario}>
            <h2 className='text-slate-900 text-5xl'>Cadastrar</h2>
            <div className="flex flex-col w-full">
              <label htmlFor="nome">Nome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                placeholder="Nome"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.nome}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="usuario">Usuario</label>
              <input
                type="text"
                id="usuario"
                name="usuario"
                placeholder="Digite um e-mail válido"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.usuario}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="foto">Foto</label>
              <input
                type="text"
                id="foto"
                name="foto"
                placeholder="Não obrigatório"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.foto}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="senha">Senha</label>
              <input
                type="password"
                id="senha"
                name="senha"
                placeholder="Minímo 8 caracteres"
                className="border-2 border-slate-700 rounded p-2"
                value={usuario.senha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
              />
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="confirmarSenha">Confirmar Senha</label>
              <input
                type="password"
                id="confirmarSenha"
                name="confirmarSenha"
                placeholder="Confirmar senha"
                className="border-2 border-slate-700 rounded p-2"
                value={confirmaSenha}
                onChange={(e: ChangeEvent<HTMLInputElement>) => handleConfirmarSenha(e)}
              />
            </div>
            <div className="flex justify-around w-full gap-8">
              <button className='rounded text-white bg-red-400 hover:bg-red-700 w-1/2 py-2' onClick={back}>
                Cancelar
              </button>
              <button className='rounded text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-700 hover:to-blue-500 shadow-lg w-1/2 py-2' type='submit'>
                Cadastrar
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;