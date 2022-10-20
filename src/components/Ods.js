import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Card from "./Card.js";
import Pobreza from "../imgs/odspobreza.png";
import Fomezero from "../imgs/odsfomezero.png";
import Educaçao from "../imgs/odseducaçao.png";
import Reduçao from "../imgs/odsreduçao.png";

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
  }
`;

const Box = styled.main`
  width: 100%;
  height: 60vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 25%;

  @media only screen and (max-width: 700px) {
    width: 100%;
    border-top: solid 0.5px;
    flex-direction: column;
    height: 110vh;
    position: absolute;
    top: 22%;
    border-top: solid 0.5px;
  }
`;

export default function Ods({ modal }) {
  return (
    <Box>
      <GlobalStyle />
      <Card
        imagem={Pobreza}
        titulo="Objetivo 1. Acabar com a pobreza em todas as suas formas, em todos os lugares"
        text="1.1 Rede de cooperação e de comercialização solidária."
        textTwo="1.2 Catador cidadão: Plano de ajuda financeira, e capacitação do catador de material reciclável."
        textTree="1.3 Cursos profissionalizantes gratuitos, em parceria com empresas e instituições de ensino."
      />
      <Card
        imagem={Fomezero}
        titulo="Objetivo 2. Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável."
        text="1.1 Implantar e incentivar hortas comunitárias. "
        textTwo="1.2 Programa Restaurante Popular: Ampliar a oferta de refeições nutricionalmente adequadas, a preços acessíveis à população de baixa renda."
        textTree="1.3 Alimentação Escolar: Garantir a todos matriculados nas unidades municipais o acesso a uma alimentação saudável e adequada, que compreende o uso de alimentos variados, seguros, que respeitem a cultura e que promovam a formação de hábitos alimentares saudáveis. "
      />
      <Card
        imagem={Educaçao}
        titulo="Objetivo 4. Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todas e todos."
        text="1.1 Alfabetização, ampliação do letramento e melhoria do desempenho em língua portuguesa e matemática das crianças e dos adolescentes, por meio de acompanhamento pedagógico específico."
        textTwo="1.2 Ampliação do período de permanência dos alunos na escola."
        textTree="1.3 Redução do abandono, da reprovação, da distorção idade/ano, mediante a implementação de ações pedagógicas para melhoria do rendimento e desempenho escolar."
      />
      <Card
        imagem={Reduçao}
        titulo="Objetivo 10. Reduzir a desigualdade dentro dos países e entre eles."
        text="1.1 Criar ambiente de direitos iguais e reduzir o abismo social em território de favelas e demais áreas populares."
        textTwo="1.2 Programa de Inclusão Social do Banco da Providência, que realiza, através de parcerias com a Firjan SENAI SESI, entre outras instituições, a capacitação de famílias em situação de extrema pobreza."
        textTree="1.3 Supera Rio: Programa voltado para o combate à pobreza em todo estado, para famílias de baixa renda e para pessoas que perderam emprego."
      />
    </Box>
  );
}
