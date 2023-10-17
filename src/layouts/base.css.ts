import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const body = style({
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Nunito Sans',
    color: `rgb(${vars.colors.eerieBlack})`,
    background: `rgb(${vars.colors.white})`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: '#ffffff',
            background: `rgb(${vars.colors.richBlack})`
        }
    }
});
