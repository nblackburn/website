import { style } from '@vanilla-extract/css';
import { secondaryAccent, sizes, vars } from '@styles/theme.css.ts';

export const filterBar = style({
    margin: 'auto',
    overflow: 'hidden',
    padding: sizes.nano,
    borderRadius: '9999px',
    WebkitBackdropFilter: 'blur(10px)',
    backdropFilter: 'blur(10px)',
    background: `color-mix(in srgb, ${vars.colors.white} 30%, transparent)`,
    border: `1px ${vars.colors.silverChalice} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: `color-mix(in srgb, ${vars.colors.black} 30%, transparent)`,
            borderColor: vars.colors.eerieBlack
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
    color: vars.colors.white,
    background: `color-mix(in srgb, ${secondaryAccent} 80%, transparent)`
});

export const item = style({
    display: 'flex',
    alignItems: 'center',
    transition: 'background 0.2s ease-in-out',
    selectors: {
        [`&:not(${activeItem}):hover`]: {
            background: `color-mix(in srgb, ${vars.colors.silverChalice} 80%, transparent)`,
            '@media': {
                '(prefers-color-scheme: dark)': {
                    background: `color-mix(in srgb, ${vars.colors.eerieBlack} 80%, transparent)`
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
