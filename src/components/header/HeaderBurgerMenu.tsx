import { Link } from "react-router-dom";
import { BurgerMenuIcon } from "../ui/svg";

import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";

interface HeaderBurgerMenuProps {
  menuMap: {
    icon: JSX.Element;
    title: string;
    link: string;
  }[];
}

export const HeaderBurgerMenu: React.FC<HeaderBurgerMenuProps> = ({
  menuMap,
}) => {
  return (
    <NavigationMenu className="text-white lg:hidden">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <BurgerMenuIcon className="w-6 h-6" />
          </NavigationMenuTrigger>
          <NavigationMenuContent className="bg-white flex flex-col border shadow-md text-left">
            {menuMap.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="px-10 py-3 text-gray-800 hover:bg-gray-100 hover:text-gray-900"
              >
                {item.title}
              </Link>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
