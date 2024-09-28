import './layout.css';
import { LayoutProps } from '../../types/types';

import NavBar from '../navBar/NavBar'; // Importa directamente los componentes que quieres incluir
import TabBar from '../tabBar/TabBar';
import { tabBarItems } from "../../mockData/tabBarItems";

function Layout({ children }: LayoutProps): JSX.Element {
	return (
		<div className="layoutContainer">
			<header className="navBar">
				<NavBar />
			</header>
			<main className="mainContent">{children}</main>
			<footer className="tabBar">
				<TabBar items={tabBarItems} />
			</footer>
		</div>
	);
}

export default Layout;
