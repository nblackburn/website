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
        white: 'rgb(255 255 255)',
        flame: 'rgb(217 98 38)',
        seaGreen: 'rgb(46 138 91)',
        hanPurple: 'rgb(142 99 227)',
        steelPink: 'rgb(196 49 196)',
        battleshipGray: 'rgb(156 156 156)',
        richBlack: 'rgb(13 13 13)',
        eerieBlack: 'rgb(33 33 33)',
        venetianRed: 'rgb(215 71 71)',
        sonicSilver: 'rgb(118 117 117)',
        ceruleanBlue: 'rgb(45 120 200)',
        naplesYellow: 'rgb(141 125 42)',
        silverChalice: 'rgb(229 229 229)'
    }
});
