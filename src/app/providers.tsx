"use client"

import { ThemeProvider } from "next-themes"
import React, { createContext, useState, useContext } from "react"

interface Theme {
    colorTheme: 'light' | 'dark';
}

export function Providers({children}: { children: React.ReactNode}) {
  return <ThemeProvider attribute="class" defaultTheme='system' enableSystem>{children}</ThemeProvider>
}