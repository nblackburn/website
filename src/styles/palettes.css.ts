import { style } from '@vanilla-extract/css';
import { vars, primaryAccent, secondaryAccent } from './theme.css.ts';

export const defaultPalette = style({
    vars: {
        [primaryAccent]: vars.colors.steelBlue,
        [secondaryAccent]: vars.colors.mediumSlateBlue
    }
});

export const halloweenPalette = style({
    vars: {
        [primaryAccent]: vars.colors.ochre,
        [secondaryAccent]: vars.colors.shamrock
    }
});

export const christmasPalette = style({
    vars: {
        [primaryAccent]: vars.colors.redOchre,
        [secondaryAccent]: vars.colors.shamrock
    }
});

export const paletteClasses = [
    defaultPalette,
    halloweenPalette,
    christmasPalette
];
