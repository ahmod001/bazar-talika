import colors from '@/theme/colors';
import React from 'react';
import {
    MD3LightTheme as DefaultTheme,
    PaperProvider,
} from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: colors.primary.main,
        secondary: colors.secondary.main,
    },
};

export default function PaperKit({ children }: { children: React.ReactNode }) {
    return (
        <PaperProvider theme={theme}>
            {children}
        </PaperProvider>
    );
}