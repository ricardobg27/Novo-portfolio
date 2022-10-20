import React from "react";
import * as S from "../Styles/works.jsx";
import Harry from "../imgs/harry.png";
import Pets from "../imgs/pets.png";
import List from "../imgs/list.png";
import Calculadora from "../imgs/calculadora.png";
import Todecachos from "../imgs/todecachos.png";

export default function Works() {
  return (
    <S.Work>
      <figure>
        <a href="https://lwzsni.csb.app/" target="_blank">
          <img src={Harry} alt="Site Harry Poter" />
        </a>
      </figure>
      <figure>
        <a href="https://430xyj.csb.app/" target="_blank">
          <img src={Pets} alt="Site Pets" />
        </a>
      </figure>
      <figure>
        <a
          href="https://ricardobg27.github.io/Projeto-final-/#top"
          target="_blank"
        >
          <img src={Todecachos} alt="Site To de cachos" />
        </a>
      </figure>
    </S.Work>
  );
}
