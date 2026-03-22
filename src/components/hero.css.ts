import { keyframes, style } from '@vanilla-extract/css';
import {
    vars,
    sizes,
    primaryAccent,
    secondaryAccent
} from '@styles/theme.css.ts';

export const hero = style({
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: sizes.small,
    paddingTop: sizes.xtraLarge,
    height: 'calc(100vh - 90px)',
    paddingBottom: sizes.xtraLarge
});

export const strapLine = style({
    margin: 0,
    fontSize: '4rem',
    fontWeight: 'normal'
});

const animatedAccent = keyframes({
    '0%': { backgroundPositionX: '0%' },
    '25%': { backgroundPositionX: '100%' },
    '50%': { backgroundPositionX: '100%' },
    '100%': { backgroundPositionX: '0%' }
});

export const accent = style({
    backgroundSize: '200%',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: `color-mix(in srgb, ${vars.colors.white} 5%, transparent)`,
    animation: `${animatedAccent} 5s ease-in-out infinite`,
    backgroundImage: `radial-gradient(circle, ${primaryAccent} 0%, ${secondaryAccent} 100%)`,
    '@media': {
        '(prefers-reduced-motion)': {
            animation: 'none'
        }
    }
});

export const reset = style({
    color: vars.colors.eerieBlack,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.white
        }
    }
});
