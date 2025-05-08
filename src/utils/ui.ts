export type LanguageCode = 'es' | 'en' | 'fr' | 'ca';

export const languages: Record<LanguageCode, string> = {
    es: "Español",
    en: "English",
    fr: "Français",
    ca: "Català",
};

export const flagPaths: Record<LanguageCode, string> = {
    es: "/flags/es.svg",
    en: "/flags/en.svg",
    fr: "/flags/fr.svg",
    ca: "/flags/ca.svg",
};