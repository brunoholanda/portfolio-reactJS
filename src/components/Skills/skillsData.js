import html from '../../public/assets/icons/html.svg';
import css from '../../public/assets/icons/css.svg';
import js from '../../public/assets/icons/js.svg';
import react from '../../public/assets/icons/react.svg';
import sass from '../../public/assets/icons/sass.svg';
import git from '../../public/assets/icons/git-icon.svg';
import vscode from '../../public/assets/icons/vscode.svg';
import github from '../../public/assets/icons/github-fill.svg';
import wordpress from '../../public/assets/icons/wordpress.png';
import node from '../../public/assets/icons/node.png';
import styledc from '../../public/assets/icons/styled.png';
import pg from '../../public/assets/icons/pg.svg';
import aws from '../../public/assets/img/aws-badge.webp';
import next from '../../public/assets/icons/next-js.svg';
import nest from '../../public/assets/icons/nest.webp';
import ts from '../../public/assets/icons/ts.webp';
import {
  SiMongodb,
  SiFastify,
  SiSpringboot,
  SiXcode,
  SiAndroidstudio,
  SiReact,
} from 'react-icons/si';
import { FaMobileAlt, FaCloud, FaLayerGroup } from 'react-icons/fa';

/** Shared stack list for Home Skills and /habilidades */
export const skillsList = [
  { titulo: 'AWS', imagem: aws, categoria: 'cloud' },
  { titulo: 'Cloud Avançado', Icon: FaCloud, cor: '#38B6FF', categoria: 'cloud' },
  { titulo: 'React', imagem: react, categoria: 'frontend' },
  { titulo: 'React Native', Icon: SiReact, cor: '#61DAFB', categoria: 'mobile' },
  { titulo: 'Next.js', imagem: next, categoria: 'frontend' },
  { titulo: 'TypeScript', imagem: ts, categoria: 'frontend' },
  { titulo: 'JavaScript', imagem: js, categoria: 'frontend' },
  { titulo: 'Node.js', imagem: node, categoria: 'backend' },
  { titulo: 'NestJS', imagem: nest, categoria: 'backend' },
  { titulo: 'Fastify', Icon: SiFastify, cor: '#000000', categoria: 'backend' },
  { titulo: 'Spring Boot', Icon: SiSpringboot, cor: '#6DB33F', categoria: 'backend' },
  { titulo: 'PostgreSQL', imagem: pg, categoria: 'backend' },
  { titulo: 'MongoDB', Icon: SiMongodb, cor: '#47A248', categoria: 'backend' },
  { titulo: 'SDUI', Icon: FaLayerGroup, cor: '#A100FF', categoria: 'frontend' },
  { titulo: 'Desenvolvimento Mobile', Icon: FaMobileAlt, cor: '#00A1FF', categoria: 'mobile' },
  { titulo: 'Android Studio', Icon: SiAndroidstudio, cor: '#3DDC84', categoria: 'mobile' },
  { titulo: 'Xcode', Icon: SiXcode, cor: '#147EFB', categoria: 'mobile' },
  { titulo: 'HTML', imagem: html, categoria: 'frontend' },
  { titulo: 'CSS', imagem: css, categoria: 'frontend' },
  { titulo: 'Sass', imagem: sass, categoria: 'frontend' },
  { titulo: 'Styled Components', imagem: styledc, categoria: 'frontend' },
  { titulo: 'Git', imagem: git, categoria: 'tools' },
  { titulo: 'GitHub', imagem: github, categoria: 'tools' },
  { titulo: 'VS Code', imagem: vscode, categoria: 'tools' },
  { titulo: 'WordPress', imagem: wordpress, categoria: 'tools' },
];

export const skillCategories = [
  {
    id: 'cloud',
    tituloPt: 'Cloud & infra',
    tituloEn: 'Cloud & infra',
    descricaoPt: 'Certificações AWS e operação em nuvem.',
    descricaoEn: 'AWS certifications and cloud operations.',
  },
  {
    id: 'frontend',
    tituloPt: 'Frontend',
    tituloEn: 'Frontend',
    descricaoPt: 'Interfaces web modernas, SDUI e UI performática.',
    descricaoEn: 'Modern web UIs, SDUI and performant interfaces.',
  },
  {
    id: 'backend',
    tituloPt: 'Backend & dados',
    tituloEn: 'Backend & data',
    descricaoPt: 'APIs, serviços e bancos em produção.',
    descricaoEn: 'APIs, services and databases in production.',
  },
  {
    id: 'mobile',
    tituloPt: 'Mobile',
    tituloEn: 'Mobile',
    descricaoPt: 'Apps nativos e multiplataforma.',
    descricaoEn: 'Native and cross-platform apps.',
  },
  {
    id: 'tools',
    tituloPt: 'Ferramentas',
    tituloEn: 'Tools',
    descricaoPt: 'Fluxo de trabalho do dia a dia.',
    descricaoEn: 'Day-to-day workflow tools.',
  },
];
