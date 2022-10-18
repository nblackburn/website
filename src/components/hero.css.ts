import { style } from '@vanilla-extract/css';
import { vars, sizes, primaryAccent } from '@styles/theme.css';

export const hero = style({
    height: '30rem',
    display: 'flex',
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: sizes.small,
    borderBottom: `1px ${vars.colors.silverChalice} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: vars.colors.eerieBlack
        }
    }
});

export const strapLine = style({
    margin: 0,
    fontSize: '3rem'
});

export const highlight = style({
    color: primaryAccent,
    textUnderlineOffset: '8px',
    textDecoration: 'underline',
    textDecorationStyle: 'wavy',
    textDecorationThickness: 'from-font'
});
