import { vars } from '@styles/theme.css.ts';
import { style } from '@vanilla-extract/css';

export const body = style({
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'var(--font-nunito-sans)',
    color: vars.colors.carbonBlack,
    background: vars.colors.white,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.white,
            background: vars.colors.pitchBlack
        }
    }
});
