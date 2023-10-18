import { style } from '@vanilla-extract/css';
import { vars, sizes, primaryAccent } from '@styles/theme.css';

export const navLink = style({
    display: 'flex',
    color: 'inherit',
    fontWeight: 'bold',
    alignItems: 'center',
    textDecoration: 'none',
    borderRadius: '9999px',
    justifyContent: 'center',
    border: `1px transparent solid`,
    padding: `0.75rem ${sizes.small}`,
    transition: 'border 0.2s ease-in-out'
});

export const primary = style({
    borderColor: `rgb(${vars.colors.silverChalice})`,
    selectors: {
        '&:hover': {
            borderColor: `rgb(${primaryAccent})`
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: `rgb(${vars.colors.eerieBlack})`
        }
    }
});

export const secondary = style({
    border: `1px transparent solid`,
    selectors: {
        '&:hover': {
            borderColor: `rgb(${vars.colors.silverChalice})`
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            selectors: {
                '&:hover': {
                    borderColor: `rgb(${vars.colors.eerieBlack})`
                }
            }
        }
    }
});

export const active = style({
    borderColor: `rgb(${primaryAccent})`,
    selectors: {
        '&:hover': {
            borderColor: `rgb(${primaryAccent})`
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            selectors: {
                '&:hover': {
                    borderColor: `rgb(${primaryAccent})`
                }
            }
        }
    }
});

export const icon = style({
    padding: '0.75rem'
});

export const disabled = style({
    cursor: 'not-allowed',
    borderColor: 'transparent',
    color: `rgb(${vars.colors.sonicSilver})`,
    selectors: {
        '&:hover': {
            borderColor: 'transparent'
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: 'transparent',
            color: `rgb(${vars.colors.davyGrey})`,
            selectors: {
                '&:hover': {
                    borderColor: 'transparent'
                }
            }
        }
    }
});
