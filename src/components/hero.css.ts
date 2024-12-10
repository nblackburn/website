import { keyframes, style } from '@vanilla-extract/css';
import { vars, sizes, primaryAccent, secondaryAccent } from '@styles/theme.css';

export const hero = style({
    display: 'flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: sizes.small,
    paddingTop: sizes.xtraLarge,
    height: 'calc(100vh - 90px)',
    paddingBottom: sizes.xtraLarge
});

export const strapLine = style({
    margin: 0,
    fontSize: '4rem',
    fontWeight: 'normal'
});

const animatedAccent = keyframes({
    '0%': { backgroundPositionX: '0%' },
    '25%': { backgroundPositionX: '100%' },
    '50%': { backgroundPositionX: '100%' },
    '100%': { backgroundPositionX: '0%' }
});

export const accent = style({
    backgroundSize: '200%',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    color: 'rgba(255 255 255 / 5%)',
    animation: `${animatedAccent} 5s ease-in-out infinite`,
    backgroundImage: `radial-gradient(circle, rgba(${primaryAccent} / 95%) 0%, rgba(${secondaryAccent} / 95%) 100%)`,
    '@media': {
        '(prefers-reduced-motion)': {
            animation: 'none'
        }
    }
});

export const reset = style({
    color: `rgb(${vars.colors.eerieBlack})`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: '#ffffff'
        }
    }
});
