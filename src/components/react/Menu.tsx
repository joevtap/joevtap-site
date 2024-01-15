import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Button } from "@/components/ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

interface Props {
  links: {
    label: string;
    href: string;
  }[];
}

export function Menu({ links }: Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button size="icon" variant="outline" className="md:hidden visible">
          <HamburgerMenuIcon />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="flex flex-col w-full gap-4 items-center justify-center p-4 py-8">
          {links.map(({ href, label }) => (
            <a href={href} className="w-full">
              <DrawerClose className="w-full">
                <Button variant="ghost" className="w-full">
                  {label}
                </Button>
              </DrawerClose>
            </a>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
