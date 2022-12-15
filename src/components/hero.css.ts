import { style } from '@vanilla-extract/css';
import { emerge } from '@styles/animations.css';
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
    borderBottom: `1px ${vars.colors.silverChalice} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: vars.colors.eerieBlack
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
    textDecorationThickness: 'from-font',
    selectors: {
        '&:before': {
            zIndex: -1,
            top: '50%',
            left: '50%',
            opacity: 0.1,
            width: '300%',
            height: '700%',
            content: '\\0020',
            filter: 'blur(30px)',
            position: 'absolute',
            borderRadius: '9999px',
            background: 'currentcolor',
            animation: `${emerge} 1s ease-in`,
            transform: 'translate(-50%, -50%)'
        }
    }
});

export const primary = style({
    color: primaryAccent
});

export const secondary = style({
    color: secondaryAccent
});
