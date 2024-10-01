import './tab.css';
import { TabProps } from "../../types/types";

function Tab({ item }: TabProps): JSX.Element {
	const { href, icon, name } = item
	return (
		<a className='tabContainer' href={href}>
			<span className='tabIcon'>{icon}</span>
			<span className='tabName'>{name}</span>
		</a>
	)
};

export default Tab;