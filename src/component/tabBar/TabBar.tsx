import './tabBar.css';
import { TabBarProps, TabBarItemsProps } from '../../types/types';
import Tab from '../tab/tab';

function TabBar({ items }: TabBarProps): JSX.Element {
	return (
		<nav className="tabBarContainer">
			<ul className="tabBarListItems">
				{items.map((item: TabBarItemsProps) => <Tab item={item} />)}
			</ul>
		</nav>
	)
};

export default TabBar;