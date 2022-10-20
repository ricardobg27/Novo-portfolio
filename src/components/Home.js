import React from "react";
import * as S from "../Styles/home";
import Whatsapp from "../logos/whatsapp.png";
import Linkedin from "../logos/linkedin.png";
import Instagram from "../logos/instagram.png";

export default function Home() {
  return (
    <S.Section>
      <S.DivTwo>
        <h1>Bem vindo ao meu portfólio</h1>
        <S.DivInfo>
          <h2>Dev Front End</h2>
        </S.DivInfo>
        <S.DivLogo>
          <a href="https://wa.me/5524981635961/" target="_blank">
            <S.Logo src={Whatsapp} alt="whatsapp" />
          </a>
          <a
            href="https://www.linkedin.com/in/ricardo-borges-182390254/"
            target="_blank"
          >
            <S.Logo src={Linkedin} alt="" />
          </a>
          <a href="https://www.instagram.com/ricardobm_borges/" target="_blank">
            <S.Logo src={Instagram} alt="" />
          </a>
        </S.DivLogo>
      </S.DivTwo>
    </S.Section>
  );
}
