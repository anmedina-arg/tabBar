import React from 'react';
import NavBar from '../navBar/NavBar'; // Importa directamente los componentes que quieres incluir
import TabBar from '../tabBar/TabBar';
import './layout.css';

interface LayoutProps {
	children: React.ReactNode; // Solo necesita aceptar los hijos dinámicos (contenido)
}

function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<div className="layoutContainer">
			<header className="navBar">
				<NavBar />
			</header>
			<main className="mainContent">{children}</main>
			<footer className="tabBar">
				<TabBar />
			</footer>
		</div>
	);
}

export default Layout;
