import { style } from '@vanilla-extract/css';
import { vars, primaryAccent, secondaryAccent } from './theme.css';

export const defaultPalette = style({
    vars: {
        [primaryAccent]: vars.colors.ceruleanBlue,
        [secondaryAccent]: vars.colors.hanPurple
    }
});
