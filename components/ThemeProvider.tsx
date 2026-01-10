"use client";

import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
    useEffect(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("portfolio-theme");
            if (!stored) {
                // Default to dark mode on first visit
                localStorage.setItem("portfolio-theme", "dark");
            }
        }
    }, []);

    return (
        <NextThemesProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="portfolio-theme"
            disableTransitionOnChange
            {...props}
        >
            {children}
        </NextThemesProvider>
    );
}
