import React from "react";
import Me from "../imgs/EU.png";
import * as S from "../Styles/about.jsx";

export default function About() {
  return (
    <S.DivAbout>
      <p>
        Natural de Barra Mansa — RJ, me chamo Ricardo Borges, tenho atualmente
        27 anos. Comecei minha carreira profissional na área da indústria, na
        qual trabalhei por 6 anos; sempre fui um entusiasta da tecnologia e a
        chamada indústria 4.0 me despertou interesse. Ao conhecer o mundo da
        programação e suas ramificações, decidi migrar de área, e começar uma
        nova jornada profissional, buscando cursos e oportunidades na área.
        Considero-me pronto para esse mundo de possibilidades, e desafios que
        ser programador me garante. Tenho paixão pelo que faço, busco fazer da
        melhor forma possível, e acredito que uma oportunidade pode mudar uma
        história, espero otimista pela minha!
      </p>
      <S.Figure>
        <img src={Me} alt="Eu" />
      </S.Figure>
    </S.DivAbout>
  );
}
