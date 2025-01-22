import { style } from '@vanilla-extract/css';
import { sizes, breakpoints, vars, secondaryAccent } from '@styles/theme.css';

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
    background: `rgba(${vars.colors.silverChalice} / 80%)`,
    selectors: {
        '&:not(:last-child)': {
            marginRight: '0.5rem'
        },
        '&:hover': {
            color: `rgb(${vars.colors.white})`,
            background: `rgba(${secondaryAccent} / 80%)`
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: `rgb(${vars.colors.white})`,
            background: `rgba(${vars.colors.eerieBlack} / 80%)`
        }
    }
});

export const activeTag = style({
    color: `rgb(${vars.colors.white})`,
    background: `rgba(${secondaryAccent} / 80%)`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: `rgba(${secondaryAccent} / 80%)`
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
