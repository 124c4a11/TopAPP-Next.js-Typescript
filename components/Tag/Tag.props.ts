import { AnchorHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface ITagDivProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: ReactNode;
  size?: 'sm' | 'md';
  href?: string;
  color?: 'ghost' | 'green' | 'gray' | 'primary' | 'red';
}

export interface ITagAnchorProps extends DetailedHTMLProps<AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
  children: ReactNode;
  size?: 'sm' | 'md';
  href?: string;
  color?: 'ghost' | 'green' | 'gray' | 'primary' | 'red';
}
