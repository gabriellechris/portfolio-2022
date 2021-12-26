import Link from 'next/link';
import React from 'react';
import { AiFillDribbbleCircle, AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, Span, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems: "center", color:"white", marginBottom:20}}>
          <DiCssdeck size="3rem"/>
            <Span> Portfolio </Span>
        </a>
      </Link>
    </Div1>

    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>
            Projects
          </NavLink>
        </Link>
      </li>

      <li>
        <Link href="#tech">
          <NavLink>
            Technologies
          </NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about">
          <NavLink>
            About
          </NavLink>
        </Link>
      </li>
    </Div2>

    <Div3>
      <SocialIcons href="https://www.linkedin.com/in/gabriellachristinak/" target="_blank">
        <AiFillLinkedin size="3rem"/>      
      </SocialIcons>

      <SocialIcons href="https://dribbble.com/gabriellechris_" target="_blank">
        <AiFillDribbbleCircle size="3rem"/>      
      </SocialIcons>

      <SocialIcons href="https://github.com/gabriellechris" target="_blank">
        <AiFillGithub size="3rem"/>      
      </SocialIcons>

      <SocialIcons href="https://instagram.com/gabriellechris_" target="_blank">
        <AiFillInstagram size="3rem"/>      
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
