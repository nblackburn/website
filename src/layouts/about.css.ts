import { sizes, vars } from '@styles/theme.css.ts';
import { style, globalStyle } from '@vanilla-extract/css';

export const image = style({
    width: '100%',
    height: '400px',
    objectFit: 'cover',
    overflow: 'hidden',
    position: 'relative',
    objectPosition: 'top',
    justifySelf: 'flex-end',
    borderRadius: sizes.small,
    marginBottom: sizes.medium,
    background: vars.colors.silverChalice,
    border: `1px ${vars.colors.silverChalice} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: vars.colors.eerieBlack,
            borderColor: vars.colors.eerieBlack
        }
    }
});

export const story = style({});

globalStyle(`${story} p`, {
    lineHeight: 1.3,
    fontSize: '1.1rem',
    color: vars.colors.sonicSilver,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.battleshipGray
        }
    }
});

globalStyle(`${story} a`, {
    color: vars.colors.eerieBlack,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.white
        }
    }
});
