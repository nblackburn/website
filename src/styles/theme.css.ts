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
        white: '255 255 255',
        flame: '217 98 38',
        seaGreen: '46 138 91',
        hanPurple: '142 99 227',
        steelPink: '196 49 196',
        battleshipGray: '156 156 156',
        richBlack: '13 13 13',
        eerieBlack: '33 33 33',
        venetianRed: '215 71 71',
        sonicSilver: '118 117 117',
        ceruleanBlue: '45 120 200',
        naplesYellow: '141 125 42',
        silverChalice: '229 229 229'
    }
});
