import { create } from "zustand";

interface ThemeStore{
    primaryColor:string,
    secondaryColor:string,
    tertialColor:string,
}

export const useThemeStore= create<ThemeStore>((set)=>({
    primaryColor:"#AF4319",
    secondaryColor:"#F0EBE7",
    tertialColor:"#1E1E1E",
}))