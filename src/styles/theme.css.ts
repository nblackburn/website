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
        ochre: 'oklab(0.6671 0.1005 0.1352)',
        shamrock: 'oklab(0.6031 -0.1271 0.0439)',
        mediumSlateBlue: 'oklab(0.6006 0.0982 -0.2217)',
        vividOrchid: 'oklab(0.5985 0.2254 -0.1713)',
        coolSteel: 'oklab(0.709 0 0)',
        pitchBlack: 'oklab(0.1469 0.0027 0.0031)',
        carbonBlack: 'oklab(0.2686 0 0)',
        redOchre: 'oklab(0.5542 0.1565 0.1116)',
        dimGrey: 'oklab(0.5555 0 0)',
        steelBlue: 'oklab(0.5933 -0.0627 -0.1368)',
        copperwood: 'oklab(0.5548 0.0586 0.1127)',
        alabasterGrey: 'oklab(0.9219 0 0)'
    }
});
