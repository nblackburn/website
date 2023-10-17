import { style } from '@vanilla-extract/css';
import { vars, primaryAccent, secondaryAccent } from './theme.css';

export const defaultPalette = style({
    vars: {
        [primaryAccent]: `rgb(${vars.colors.ceruleanBlue})`,
        [secondaryAccent]: `rgb(${vars.colors.hanPurple})`
    }
});

export const halloweenPalette = style({
    vars: {
        [primaryAccent]: `rgb(${vars.colors.flame})`,
        [secondaryAccent]: `rgb(${vars.colors.seaGreen})`
    }
});

export const christmasPalette = style({
    vars: {
        [primaryAccent]: `rgb(${vars.colors.venetianRed})`,
        [secondaryAccent]: `rgb(${vars.colors.seaGreen})`
    }
});

export const paletteClasses = [
    defaultPalette,
    halloweenPalette,
    christmasPalette
];
