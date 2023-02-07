import React from 'react';

import { AiFillHome, AiOutlineFlag } from 'react-icons/ai';
import { MdLocalFireDepartment, MdLiveTv } from 'react-icons/md';
import { CgMusicNote } from 'react-icons/cg';
import { FiFilm } from 'react-icons/fi';
import { IoGameControllerSharp } from 'react-icons/io5';
import { ImNewspaper } from 'react-icons/im';
import { GiDiamondTrophy, GiEclipse } from 'react-icons/gi';
import { RiLightbulbLine, RiFeedbackLine } from 'react-icons/ri';
import { FiSettings, FiHelpCircle } from 'react-icons/fi';

export const categories = [
  { name: 'Новое', icon: <AiFillHome />, type: 'home' },
  { name: 'В тренде', icon: <MdLocalFireDepartment />, type: 'category' },
  { name: 'Музыка', icon: <CgMusicNote />, type: 'category' },
  { name: 'Фильмы', icon: <FiFilm />, type: 'category' },
  { name: 'Трансляции', icon: <MdLiveTv />, type: 'category' },
  { name: 'Видеоигры', icon: <IoGameControllerSharp />, type: 'category' },
  { name: 'Новости', icon: <ImNewspaper />, type: 'category' },
  { name: 'Спорт', icon: <GiDiamondTrophy />, type: 'category' },
  { name: 'Обучение', icon: <RiLightbulbLine />, type: 'category' },
  {
    name: 'Мода и красота',
    icon: <GiEclipse />,
    type: 'category',
    divider: true,
  },
  { name: 'Настройки', icon: <FiSettings />, type: 'menu' },
  { name: 'История', icon: <AiOutlineFlag />, type: 'menu' },
  { name: 'Справка', icon: <FiHelpCircle />, type: 'menu' },
  { name: 'Отправить отзыв', icon: <RiFeedbackLine />, type: 'menu' },
];