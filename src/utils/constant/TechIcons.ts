import {
  BiLogoTypescript,
  BiLogoJavascript,
  BiLogoGoLang,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoPostgresql,
} from 'react-icons/bi'
import {
  SiPhp,
  SiNextdotjs,
  SiLaravel,
  SiExpress,
  SiAdonisjs,
  SiTailwindcss,
  SiBootstrap,
  SiGit,
  SiPostman,
  SiJest,
  SiMongodb,
  SiMysql,
  SiKotlin,
  SiJetpackcompose,
} from 'react-icons/si'

import { TbBrandKotlin } from 'react-icons/tb'

export const techIcons = {
  language: [
    {
      name: 'JavaScript',
      icons: BiLogoJavascript,
    },
    {
      name: 'TypeScript',
      icons: BiLogoTypescript,
    },
    {
      name: 'Php',
      icons: SiPhp,
    },
    {
      name: 'Golang',
      icons: BiLogoGoLang,
    },
    {
      name: 'Kotlin',
      icons: TbBrandKotlin,
    },
  ],
  framework: [
    {
      name: 'React',
      icons: BiLogoReact,
    },
    {
      name: 'NextJS',
      icons: SiNextdotjs,
    },
    {
      name: 'Laravel',
      icons: SiLaravel,
    },
    {
      name: 'Express',
      icons: SiExpress,
    },
    {
      name: 'AdonisJs',
      icons: SiAdonisjs,
    },
    {
      name: 'NodeJS',
      icons: BiLogoNodejs,
    },
    {
      name: 'Tailwinds',
      icons: SiTailwindcss,
    },
    {
      name: 'Compose',
      icons: SiJetpackcompose,
    },
  ],
  tools: [
    {
      name: 'Git',
      icons: SiGit,
    },
    {
      name: 'Postman',
      icons: SiPostman,
    },
    {
      name: 'Jest',
      icons: SiJest,
    },
    {
      name: 'MongoDB',
      icons: SiMongodb,
    },
    {
      name: 'MySQL',
      icons: SiMysql,
    },
    {
      name: 'PostgreSQL',
      icons: BiLogoPostgresql,
    },
  ],
}
