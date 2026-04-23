import { style } from '@vanilla-extract/css';
import {
    sizes,
    breakpoints,
    vars,
    secondaryAccent
} from '@styles/theme.css.ts';

export const tagList = style({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    listStylePosition: 'inside',
    '@media': {
        [breakpoints.medium]: {
            marginBottom: sizes.small
        }
    }
});

export const tag = style({
    borderRadius: '9999px',
    padding: '0.4em 0.8em',
    display: 'inline-block',
    transition: 'all 0.2s ease-in-out',
    background: `color-mix(in oklab, ${vars.colors.alabasterGrey} 80%, transparent)`,
    selectors: {
        '&:not(:last-child)': {
            marginRight: '0.5rem'
        },
        '&:hover': {
            color: vars.colors.white,
            background: `color-mix(in oklab, ${secondaryAccent} 80%, transparent)`
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.white,
            background: `color-mix(in oklab, ${vars.colors.carbonBlack} 80%, transparent)`
        }
    }
});

export const activeTag = style({
    color: vars.colors.white,
    background: `color-mix(in oklab, ${secondaryAccent} 80%, transparent)`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: `color-mix(in oklab, ${secondaryAccent} 80%, transparent)`
        }
    }
});

export const hash = style({
    opacity: 0.5
});

export const link = style({
    color: 'inherit',
    textDecoration: 'none'
});
