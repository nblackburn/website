import { createGlobalTheme, createVar } from '@vanilla-extract/css';

const BASE_UNIT = 'rem';
const BASE_VALUE = 0.25;

const calcUnitStyle = (value: number) => {
    const multValue = BASE_VALUE * value;

    return `${multValue}${BASE_UNIT}`;
};

export const primaryAccent = createVar();
export const secondaryAccent = createVar();

export const containers = {
    small: '640px',
    medium: '768px',
    large: '1024px',
    xtraLarge: '1280px'
};

export const breakpoints = {
    small: '(max-width: 640px)',
    medium: '(max-width: 768px)',
    large: '(max-width: 1024px)',
    xtraLarge: '(max-width: 1280px)'
};

export const sizes = {
    nano: calcUnitStyle(1),
    tiny: calcUnitStyle(2),
    small: calcUnitStyle(4),
    medium: calcUnitStyle(8),
    large: calcUnitStyle(16),
    xtraLarge: calcUnitStyle(32)
};

export const vars = createGlobalTheme(':root', {
    colors: {
        white: '#ffffff',
        flame: '#d96226',
        seaGreen: '#2e8a5b',
        hanPurple: '#8758e2',
        steelPink: '#c431c4',
        davyGrey: '#7a7a7a',
        richBlack: '#0d0d0d',
        eerieBlack: '#1a1a1a',
        venetianRed: '#d54141',
        sonicSilver: '#767575',
        ceruleanBlue: '#2d78c8',
        naplesYellow: '#857528',
        silverChalice: '#e5e5e5'
    }
});
