import { vars } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const body = style({
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

export const container = style({
    margin: 'auto',
    maxWidth: vars.containers.xtraLarge
});
