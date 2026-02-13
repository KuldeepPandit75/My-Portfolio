import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface StoreState {
    loadingComplete: boolean;
    setLoadingComplete: (value: boolean) => void;
    animationStarted: boolean;
    setAnimationStarted: (value: boolean) => void;
    heroAnimationComplete: boolean;
    setHeroAnimationComplete: (value: boolean) => void;
    audioElement: HTMLAudioElement | null;
    setAudioElement: (value: HTMLAudioElement) => void;
}

export const useStore = create<StoreState>()(
        (set) => ({
            loadingComplete: false,
            setLoadingComplete: (value: boolean) => set({ loadingComplete: value }),
            animationStarted: false,
            setAnimationStarted: (value: boolean) => set({ animationStarted: value }),
            heroAnimationComplete: false,
            setHeroAnimationComplete: (value: boolean) => set({ heroAnimationComplete: value }),
            audioElement: null,
            setAudioElement: (value: HTMLAudioElement) => set({ audioElement: value })
        })
    
)
