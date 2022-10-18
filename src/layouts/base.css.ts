import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const body = style({
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Nunito Sans',
    color: vars.colors.eerieBlack,
    background: vars.colors.white,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: '#ffffff',
            background: vars.colors.richBlack
        }
    }
});
