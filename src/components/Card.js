import React, { useState } from "react";
import * as S from "../Styles/card";

export default function Card(props) {
  const [isModal, setIsModal] = useState(false);

  return (
    <S.BoxOds>
      <div>
        <img onClick={() => setIsModal(!isModal)} src={props.imagem} alt="a" />
        {isModal && (
          <S.DivOds onClick={() => setIsModal(!isModal)}>
            <S.BtnOds onClick={() => setIsModal(!isModal)} color="white">
              Fechar
            </S.BtnOds>
            <h1>{props.titulo}</h1>
            <p>{props.text}</p>
            <p>{props.textTwo}</p>
            <p>{props.textTree}</p>
          </S.DivOds>
        )}
      </div>
    </S.BoxOds>
  );
}
