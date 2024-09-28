import React from 'react';

export interface TabProps {
  item: TabBarItemsProps;
}

export interface TabBarItemsProps {
  name: string;
  href: string;
  icon: JSX.Element;
}

export interface TabBarProps {
  items: TabBarItemsProps[];
}

export interface LayoutProps {
  children: React.ReactNode; // Solo necesita aceptar los hijos dinámicos (contenido)
}
