import { style, globalStyle } from '@vanilla-extract/css';
import {
    sizes,
    vars,
    breakpoints,
    primaryAccent,
    secondaryAccent
} from '@styles/theme.css';

export const projectCard = style({
    display: 'grid',
    overflow: 'hidden',
    rowGap: sizes.small,
    columnGap: sizes.small,
    borderRadius: sizes.small,
    backdropFilter: 'blur(10px)',
    gridTemplateColumns: '1fr 3fr',
    background: 'rgba(255 255 255 / 30%)',
    transition: 'border 0.2s ease-in-out',
    border: `2px ${vars.colors.silverChalice} solid`,
    selectors: {
        '&:hover': {
            borderColor: secondaryAccent,
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: 'rgba(0 0 0 / 30%)',
            borderColor: vars.colors.eerieBlack
        },
        [breakpoints.small]: {
            gridTemplateColumns: '1fr'
        }
    }
});

export const thumbnail = style({
    width: '100%',
    height: '200px',
    objectFit: 'fill',
    overflow: 'hidden',
    position: 'relative',
    objectPosition: 'top',
    justifySelf: 'flex-end',
    background: vars.colors.silverChalice,
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: vars.colors.eerieBlack
        }
    }
});

globalStyle(`${thumbnail} img`, {
    width: '100%',
    transition: 'all 0.2s ease-in-out'
});

export const details = style({
    padding: sizes.medium
});

export const header = style({
    display: 'flex',
    alignItems: 'center',
    marginBottom: sizes.medium,
    justifyContent: 'space-between',
    '@media': {
        [breakpoints.small]: {
            flexDirection: 'column'
        }
    }
});

export const publishedDate = style({
    color: vars.colors.davyGrey,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.silverChalice
        }
    }
});

export const title = style({
    fontWeight: 'bold',
    margin: `0 0 ${sizes.small}`
});

export const link = style({
    color: 'inherit',
    textDecoration: 'none'
});

export const description = style({
    margin: 0,
    color: vars.colors.sonicSilver,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.davyGrey
        }
    }
});

export const tags = style({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    listStylePosition: 'inside',
    '@media': {
        [breakpoints.small]: {
            marginBottom: sizes.small
        }
    }
});

export const tag = style({
    borderRadius: '9999px',
    display: 'inline-block',
    padding: `0.2rem 0.75rem`,
    transition: 'all 0.2s ease-in-out',
    background: vars.colors.silverChalice,
    selectors: {
        '&:not(:last-child)': {
            marginRight: '0.5rem'
        },
        '&:hover': {
            background: secondaryAccent
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: vars.colors.eerieBlack
        }
    }
});

export const activeTag = style({
    background: secondaryAccent,
    selectors: {
        '&:hover': {
            background: secondaryAccent
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: secondaryAccent
        }
    }
});
