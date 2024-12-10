import { style } from '@vanilla-extract/css';
import { secondaryAccent, sizes, vars } from '@styles/theme.css';

export const filterBar = style({
    margin: 'auto',
    overflow: 'hidden',
    padding: sizes.nano,
    borderRadius: '9999px',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    background: 'rgba(255 255 255 / 30%)',
    border: `1px rgb(${vars.colors.silverChalice}) solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: 'rgba(0 0 0 / 30%)',
            borderColor: `rgb(${vars.colors.eerieBlack})`
        }
    }
});

export const items = style({
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: sizes.nano,
    listStyle: 'none',
    listStylePosition: 'inside'
});

export const activeItem = style({
    color: `rgb(${vars.colors.white})`,
    background: `rgba(${secondaryAccent} / 80%)`
});

export const item = style({
    display: 'flex',
    alignItems: 'center',
    transition: 'background 0.2s ease-in-out',
    selectors: {
        [`&:not(${activeItem}):hover`]: {
            background: `rgba(${vars.colors.silverChalice} / 80%)`,
            '@media': {
                '(prefers-color-scheme: dark)': {
                    background: `rgba(${vars.colors.eerieBlack} / 80%)`
                }
            }
        },
        [`&:first-child`]: {
            borderRadius: '9999px 0 0 9999px'
        },
        [`&:last-child`]: {
            borderRadius: '0 9999px 9999px 0'
        }
    }
});

export const link = style({
    color: 'inherit',
    fontSize: '1.1rem',
    textDecoration: 'none',
    padding: `${sizes.tiny} ${sizes.mini}`
});

export const hash = style({
    opacity: 0.5
});
