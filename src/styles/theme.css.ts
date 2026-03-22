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
    mini: calcUnitStyle(3),
    small: calcUnitStyle(4),
    medium: calcUnitStyle(8),
    large: calcUnitStyle(16),
    xtraLarge: calcUnitStyle(32)
};

export const vars = createGlobalTheme(':root', {
    colors: {
        black: 'oklab(0 0 0)',
        white: 'oklab(1 0 0)',
        flame: 'oklab(0.6346 0.119 0.1145)',
        seaGreen: 'oklab(0.5667 -0.1045 0.0441)',
        hanPurple: 'oklab(0.6058 0.0814 -0.1682)',
        steelPink: 'oklab(0.5953 0.2022 -0.126)',
        battleshipGray: 'oklab(0.6927 0 0)',
        richBlack: 'oklab(0.1591 0 0)',
        eerieBlack: 'oklab(0.2478 0 0)',
        venetianRed: 'oklab(0.6007 0.1645 0.0745)',
        sonicSilver: 'oklab(0.5633 0.0012 0.0004)',
        ceruleanBlue: 'oklab(0.5671 -0.042 -0.1374)',
        naplesYellow: 'oklab(0.5883 -0.0147 0.1022)',
        silverChalice: 'oklab(0.9219 0 0)'
    }
});
