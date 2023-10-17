import { style } from '@vanilla-extract/css';
import { vars, sizes, primaryAccent, secondaryAccent } from '@styles/theme.css';

export const hero = style({
    display: 'flex',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: sizes.small,
    paddingTop: sizes.xtraLarge,
    paddingBottom: sizes.xtraLarge,
    borderBottom: `1px rgb(${vars.colors.silverChalice}) solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: `rgb(${vars.colors.eerieBlack})`
        }
    }
});

export const strapLine = style({
    margin: 0,
    fontSize: '3rem',
    textShadow: '1px 1px 5px rgb(0 0 0 / 50%)'
});

export const highlight = style({
    position: 'relative',
    textUnderlineOffset: '8px',
    textDecoration: 'underline',
    textDecorationStyle: 'wavy',
    textDecorationThickness: 'from-font'
});

export const primary = style({
    color: `rgb(${primaryAccent})`
});

export const secondary = style({
    color: `rgb(${secondaryAccent})`
});
