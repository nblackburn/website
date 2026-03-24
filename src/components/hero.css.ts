import { keyframes, style } from '@vanilla-extract/css';
import {
    vars,
    sizes,
    primaryAccent,
    secondaryAccent
} from '@styles/theme.css.ts';

export const hero = style({
    display: 'flex',
    gap: sizes.medium,
    textAlign: 'center',
    flexDirection: 'column',
    marginBottom: sizes.small,
    paddingTop: sizes.xtraLarge,
    height: 'calc(100vh - 90px)',
    paddingBottom: sizes.xtraLarge
});

export const heading = style({
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
});

export const scrollPrompt = style({});

const animatedArrow = keyframes({
    '0%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(10px)' },
    '100%': { transform: 'translateY(0px)' }
});

export const arrow = style({
    animation: `${animatedArrow} 2s ease-in-out infinite`,
    '@media': {
        '(prefers-reduced-motion)': {
            animation: 'none'
        }
    }
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
    color: `color-mix(in oklab, ${vars.colors.white} 5%, transparent)`,
    animation: `${animatedAccent} 5s ease-in-out infinite`,
    backgroundImage: `radial-gradient(circle, ${primaryAccent} 0%, ${secondaryAccent} 100%)`,
    '@media': {
        '(prefers-reduced-motion)': {
            animation: 'none'
        }
    }
});

export const reset = style({
    color: vars.colors.carbonBlack,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.white
        }
    }
});
