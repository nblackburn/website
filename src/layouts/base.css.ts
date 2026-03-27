import { vars } from '@styles/theme.css.ts';
import { style } from '@vanilla-extract/css';

export const body = style({
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'var(--font-nunito-sans)',
    color: vars.colors.carbonBlack,
    backgroundColor: vars.colors.white,
    backgroundRepeat: 'repeat',
    backgroundImage: "url('/textures/grain.png')",
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.white,
            backgroundColor: vars.colors.pitchBlack
        }
    }
});
