import { style } from '@vanilla-extract/css';
import { vars, primaryAccent, secondaryAccent } from './theme.css';

export const defaultPalette = style({
    vars: {
        [primaryAccent]: vars.colors.ceruleanBlue,
        [secondaryAccent]: vars.colors.hanPurple
    }
});

export const halloweenPalette = style({
    vars: {
        [primaryAccent]: vars.colors.flame,
        [secondaryAccent]: vars.colors.seaGreen
    }
});

export const christmasPalette = style({
    vars: {
        [primaryAccent]: vars.colors.venetianRed,
        [secondaryAccent]: vars.colors.seaGreen
    }
});

export const paletteClasses = [
    defaultPalette,
    halloweenPalette,
    christmasPalette
];
