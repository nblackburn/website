import { style } from '@vanilla-extract/css';
import { secondaryAccent, sizes, vars } from '@styles/theme.css';

export const filterBar = style({
    margin: 'auto',
    overflow: 'hidden',
    padding: sizes.nano,
    borderRadius: '10000px',
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
    background: `rgb(${secondaryAccent})`
});

export const item = style({
    display: 'flex',
    alignItems: 'center',
    transition: 'background 0.2s ease-in-out',
    selectors: {
        [`&:not(${activeItem}):hover`]: {
            background: `rgb(${vars.colors.silverChalice})`,
            '@media': {
                '(prefers-color-scheme: dark)': {
                    background: `rgb(${vars.colors.eerieBlack})`
                }
            }
        },
        [`&:first-child`]: {
            borderRadius: '1000px 0 0 1000px'
        },
        [`&:last-child`]: {
            borderRadius: '0 1000px 1000px 0'
        }
    }
});

export const link = style({
    color: 'inherit',
    fontSize: '1.1rem',
    textDecoration: 'none',
    padding: `${sizes.tiny} ${sizes.mini}`
});
