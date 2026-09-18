import type { IconType } from 'react-icons'
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiCplusplus,
  SiKotlin,
  SiFlutter,
  SiDart,
  SiAndroid,
  SiAndroidstudio,
  SiJetpackcompose,
  SiMaterialdesign,
  SiGit,
  SiApple,
  SiReact,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFastapi,
  SiPostgresql,
  SiMysql,
  SiSqlite,
  SiGithub,
  SiVercel,
  SiLinux,
  SiJsonwebtokens,
  SiScikitlearn,
  SiSpacy,
} from 'react-icons/si'
import { FaJava, FaDatabase, FaCode, FaNetworkWired, FaLayerGroup, FaMobileScreenButton, FaArrowsRotate } from 'react-icons/fa6'
import { TbApi, TbBrandCpp } from 'react-icons/tb'

/** Maps a skill `icon` slug (from constants) to a brand/concept glyph.
 *  Concepts without an official brand mark use a representative generic icon. */
const ICONS: Record<string, IconType> = {
  // Mobile & Cross-Platform
  flutter: SiFlutter,
  dart: SiDart,
  getx: FaArrowsRotate,
  materialdesign: SiMaterialdesign,
  ios: SiApple,
  mobile: FaMobileScreenButton,

  // Android Native
  kotlin: SiKotlin,
  android: SiAndroid,
  compose: SiJetpackcompose,
  androidstudio: SiAndroidstudio,
  room: FaDatabase,
  mvvm: FaLayerGroup,
  retrofit: TbApi,

  // Languages
  java: FaJava,
  python: SiPython,
  cpp: SiCplusplus || TbBrandCpp,
  javascript: SiJavascript,
  typescript: SiTypescript,
  sql: FaDatabase,

  // Web, MERN & Backend
  react: SiReact,
  nextjs: SiNextdotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  fastapi: SiFastapi,
  jwt: SiJsonwebtokens,
  rest: TbApi,

  // Databases
  sqlite: SiSqlite,
  mysql: SiMysql,
  postgresql: SiPostgresql,

  // Tools & Practices
  git: SiGit,
  github: SiGithub,
  vercel: SiVercel,
  linux: SiLinux,
  agile: FaArrowsRotate,

  // Core CS & ML
  dsa: FaCode,
  oop: FaLayerGroup,
  networks: FaNetworkWired,
  scikitlearn: SiScikitlearn,
  spacy: SiSpacy || FaCode,
}

/** Resolve a slug to its icon component, falling back to a generic code glyph. */
export function getSkillIcon(slug: string | undefined): IconType {
  return (slug && ICONS[slug]) || FaCode
}

