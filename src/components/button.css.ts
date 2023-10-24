import { style } from '@vanilla-extract/css';
import { vars, sizes, primaryAccent } from '@styles/theme.css';

export const button = style({
    display: 'flex',
    color: 'inherit',
    fontWeight: 'bold',
    alignItems: 'center',
    textDecoration: 'none',
    borderRadius: sizes.tiny,
    justifyContent: 'center',
    padding: `0.75rem ${sizes.small}`,
    transition: 'all 0.2s ease-in-out',
    boxShadow: `0px 0px 0px 0px transparent`,
    border: `1px rgb(${vars.colors.silverChalice}) solid`,
    selectors: {
        '&:hover': {
            cursor: 'pointer',
            borderColor: `rgb(${primaryAccent})`,
            boxShadow: `0px 0px 0px 4px rgba(${primaryAccent} / 0.1)`
        },
        '&:focus': {
            borderColor: `rgb(${primaryAccent})`,
            boxShadow: `0px 0px 0px 4px rgba(${primaryAccent} / 0.1)`
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: `rgba(0 0 0 / 0.3)`,
            color: `rgb(${vars.colors.white})`,
            borderColor: `rgb(${vars.colors.eerieBlack})`
        }
    }
});

export const disabled = style({
    border: 'none',
    color: `rgb(${vars.colors.sonicSilver})`,
    selectors: {
        '&:hover': {
            border: 'none',
            cursor: 'not-allowed'
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            border: 'none',
            color: `rgb(${vars.colors.davyGrey})`
        }
    }
});
