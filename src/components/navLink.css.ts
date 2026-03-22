import { style } from '@vanilla-extract/css';
import { vars, sizes, primaryAccent } from '@styles/theme.css.ts';

export const navLink = style({
    display: 'flex',
    color: 'inherit',
    fontWeight: 'bold',
    padding: sizes.mini,
    alignItems: 'center',
    textDecoration: 'none',
    borderRadius: '9999px',
    justifyContent: 'center',
    paddingLeft: sizes.small,
    paddingRight: sizes.small,
    border: '1px transparent solid',
    transition: 'border 0.2s ease-in-out'
});

export const primary = style({
    borderColor: vars.colors.alabasterGrey,
    selectors: {
        '&:hover': {
            borderColor: primaryAccent
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: vars.colors.carbonBlack
        }
    }
});

export const secondary = style({
    border: '1px transparent solid',
    selectors: {
        '&:hover': {
            borderColor: vars.colors.alabasterGrey
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            selectors: {
                '&:hover': {
                    borderColor: vars.colors.carbonBlack
                }
            }
        }
    }
});

export const active = style({
    borderColor: primaryAccent,
    selectors: {
        '&:hover': {
            borderColor: primaryAccent
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            selectors: {
                '&:hover': {
                    borderColor: primaryAccent
                }
            }
        }
    }
});

export const icon = style({
    padding: sizes.tiny
});

export const disabled = style({
    cursor: 'not-allowed',
    borderColor: 'transparent',
    color: vars.colors.dimGrey,
    selectors: {
        '&:hover': {
            borderColor: 'transparent'
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: 'transparent',
            color: vars.colors.coolSteel,
            selectors: {
                '&:hover': {
                    borderColor: 'transparent'
                }
            }
        }
    }
});
