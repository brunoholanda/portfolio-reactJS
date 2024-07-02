import React from "react";
import styles from './TwoColorsText.module.scss';

const TextoDuasCores = ({ texto, palavra1, palavra2 }) => {
  const dividirTexto = texto.split(" ");

  return (
    <h1>
      {dividirTexto.map((palavraAtual, index) => (
        <span
          key={index}
          className={
            palavraAtual === palavra1 || palavraAtual === palavra2
              ? styles.gradiente
              : ""
          }
        >
          {palavraAtual}{" "}
        </span>
      ))}
    </h1>
  );
};

export default TextoDuasCores;
