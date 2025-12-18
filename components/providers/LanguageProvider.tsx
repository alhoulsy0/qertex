"use client";

import React, { createContext, useContext } from 'react';
import { translations } from '@/lib/i18n';

type Language = 'en';
type Direction = 'ltr';

interface LanguageContextType {
    language: Language;
    direction: Direction;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    // Hardcoded to English
    const language: Language = 'en';
    const direction: Direction = 'ltr';

    // No-op setter
    const setLanguage = (lang: Language) => {
        console.log("Language switching is disabled. English only.");
    };

    const t = (key: string) => {
        return translations[language][key as keyof typeof translations['en']] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
            <div dir="ltr" className="font-sans">
                {children}
            </div>
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
}
