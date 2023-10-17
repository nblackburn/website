import { style } from '@vanilla-extract/css';
import { vars, sizes, primaryAccent, secondaryAccent } from '@styles/theme.css';

export const hero = style({
    display: 'flex',
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
    fontWeight: 'normal',
    textShadow: '1px 1px 5px rgb(0 0 0 / 50%)'
});

export const highlight = style({
    fontWeight: 'bold'
});

export const primary = style({
    color: `rgb(${primaryAccent})`
});

export const secondary = style({
    color: `rgb(${secondaryAccent})`
});
