"use client"

import React, { createContext, useContext } from 'react';

export interface Theme {
    accentColor: string
}

const defaultTheme: Theme = {
    accentColor: "#feb628"
}

const ThemeContext = createContext<Theme>(defaultTheme);

export function RashingUiProvider(props: {children: React.ReactNode, theme: Theme}) {
    return <ThemeContext.Provider value={props.theme}>
        {props.children}
    </ThemeContext.Provider>
}

export const useTheme = (): Theme => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("Hook useTheme must be used inside of <RashingUiProvider>");
    }
    return context;
};