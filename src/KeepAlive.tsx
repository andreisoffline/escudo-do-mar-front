import React, { useEffect } from 'react';

const KeepAlive: React.FC = () => {
  const swaggerUrl = 'https://escudo-do-mar.onrender.com';

  const keepAlive = async () => {
    try {
      const response = await fetch(swaggerUrl);
      console.log(`Status Code: ${response.status}`);
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  };

  useEffect(() => {
    // Enviar uma requisição imediatamente ao carregar o componente
    keepAlive();

    // Configurar intervalo para enviar requisições a cada 5 minutos (300000 ms)
    const intervalId = setInterval(keepAlive, 300000);

    // Limpar o intervalo quando o componente é desmontado
    return () => clearInterval(intervalId);
  }, []);

  return null; // Este componente não renderiza nada na interface
};

export default KeepAlive;
