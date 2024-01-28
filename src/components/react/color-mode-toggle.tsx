import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ColorModeToggle() {
  const [theme, setThemeState] = React.useState<
    "theme-light" | "dark" | "system"
  >("dark");

  React.useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains("dark");
    setThemeState(isDarkMode ? "dark" : "theme-light");
  }, []);

  React.useEffect(() => {
    const isDark = theme === "dark";
    document.documentElement.classList[isDark ? "add" : "remove"]("dark");
    document.documentElement.style.setProperty(
      "color-scheme",
      isDark ? "dark" : "light"
    );
  }, [theme]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className=" rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setThemeState("theme-light")}>
          <span className="flex items-center justify-start gap-2">
            <SunIcon />
            Dia
          </span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setThemeState("dark")}>
          <span className="flex items-center justify-start gap-2">
            <MoonIcon />
            Noite
          </span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
