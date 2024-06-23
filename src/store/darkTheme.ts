import {create} from 'zustand';

interface ThemeState {
    darkMode: boolean;
    toggleDarkMode: () => void;
}

export const useThemeStore = create<ThemeState>((set) => {
    let darkMode = false;

    const toggleDarkMode = () => {
        darkMode = !darkMode;
        // Estado darkMode foi alterado
        set({ darkMode });
    };

    return {
        darkMode,
        toggleDarkMode
    };
});