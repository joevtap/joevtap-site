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
            <a href={href} className="w-full" key={label}>
              <DrawerClose className="w-full">
                <div className="w-full hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                  {label}
                </div>
              </DrawerClose>
            </a>
          ))}
        </div>
      </DrawerContent>
    </Drawer>
  );
}
