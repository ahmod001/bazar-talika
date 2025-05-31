/**
 * Applications color controlled from here.
 */

interface ColorPalette {
    main: string;
    light: string;
    dark: string;
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
        light: '#F9FAFB',
        dark: '#1F2937',
    },
}

export default colors;