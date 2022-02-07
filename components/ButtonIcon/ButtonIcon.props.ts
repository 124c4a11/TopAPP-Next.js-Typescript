import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import up from './icons/up.svg';
import close from './icons/close.svg';
import burger from './icons/burger.svg';

export const icons = {
  up,
  close,
  burger
};

export type IconName = keyof typeof icons;

export interface IButtonIconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  appearance?: 'primary' | 'white';
  icon: IconName;
}
