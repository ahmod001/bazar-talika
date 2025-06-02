/**
 * Applications color controlled from here.
 */

interface ColorPalette {
    main: string;
    light?: string;
    dark?: string;
}
type Colors = Record<string, ColorPalette>;

const colors: Colors = {
    primary: {
        main: '#1F6B38',
        light: '#D6EFD8',
        dark: '#144B26',
    },
    secondary: {
        main: '#6B7280',
        light: '#f9fafb',
        dark: '#1F2937',
    },
    danger: {
        main: '#e53e3e'
    }
}

export default colors;