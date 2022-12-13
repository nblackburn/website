import { style } from '@vanilla-extract/css';
import { emerge } from '@styles/animations.css';
import { vars, sizes, secondaryAccent } from '@styles/theme.css';

export const pageHeader = style({
    fontSize: '1.2rem',
    textAlign: 'center',
    paddingTop: sizes.large,
    marginBottom: sizes.large,
    paddingBottom: sizes.large,
    borderBottom: `1px ${vars.colors.silverChalice} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            borderColor: vars.colors.eerieBlack
        }
    }
});

export const title = style({
    margin: '0 0 0.75rem 0',
    fontSize: sizes.medium
});

export const highlight = style({
    position: 'relative',
    color: secondaryAccent,
    textShadow: '1px 1px 5px rgb(0 0 0 / 50%)',
    selectors: {
        '&:before': {
            top: '50%',
            left: '50%',
            opacity: 0.1,
            width: '500%',
            height: '900%',
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

export const subTitle = style({
    margin: 0,
    fontSize: '1.2rem',
    fontWeight: 'normal',
    color: vars.colors.sonicSilver,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.davyGrey
        }
    }
});
