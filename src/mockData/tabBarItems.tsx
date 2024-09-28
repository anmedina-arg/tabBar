import CarbonApplication from '../component/icons/classic/CarbonApplication';
import CarbonCenterSquare from '../component/icons/classic/CarbonCenterSquare';
import CarbonFavorite from '../component/icons/classic/CarbonFavorite';
import { CarbonHome } from '../component/icons/classic/CarbonHome';
import CarbonUser from '../component/icons/classic/CarbonUser';
import { TabBarItemsProps } from '../types/types';

export const tabBarItems: TabBarItemsProps[] = [
  {
    name: 'home',
    href: '',
    icon: <CarbonHome />
  },
  {
    name: 'favorites',
    href: '',
    icon: <CarbonFavorite />
  },
  {
    name: 'collections',
    href: '',
    icon: <CarbonCenterSquare />
  },
  {
    name: 'profile',
    href: '',
    icon: <CarbonUser />
  },
  {
    name: 'more',
    href: '',
    icon: <CarbonApplication />
  },
];
