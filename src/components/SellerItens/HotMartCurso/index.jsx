import React, { useEffect } from 'react';
import './HotMartCurso.css'; 

const HotmartCursoButton = () => {
  useEffect(() => {
    const importHotmart = () => {
      // Verifica se o script já foi adicionado para evitar duplicação
      if (!document.querySelector('script[src="https://static.hotmart.com/checkout/widget.min.js"]')) {
        const script = document.createElement('script');
        script.src = 'https://static.hotmart.com/checkout/widget.min.js';
        script.async = true;
        script.onload = () => console.log('Hotmart script loaded successfully');
        script.onerror = () => console.error('Error loading Hotmart script');
        document.head.appendChild(script);
      }

      // Verifica se o link de estilo já foi adicionado para evitar duplicação
      if (!document.querySelector('link[href="https://static.hotmart.com/css/hotmart-fb.min.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = 'https://static.hotmart.com/css/hotmart-fb.min.css';
        link.onload = () => console.log('Hotmart CSS loaded successfully');
        link.onerror = () => console.error('Error loading Hotmart CSS');
        document.head.appendChild(link);
      }
    };

    // Chama a função para importar os scripts e estilos
    importHotmart();
  }, []); // O array vazio garante que o useEffect só seja executado uma vez

  return (
    <a href="https://pay.hotmart.com/X92541881K?checkoutMode=2" className="hotmart-fb ">
      <img src="https://static.hotmart.com/img/btn-buy-green.png" alt="Buy Now" />
    </a>
  );
};
export default HotmartCursoButton;

