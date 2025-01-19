import { sizes, vars } from '@styles/theme.css';
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
    background: `rgb(${vars.colors.silverChalice})`,
    border: `1px rgb(${vars.colors.silverChalice}) solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: `rgb(${vars.colors.eerieBlack})`,
            borderColor: `rgb(${vars.colors.eerieBlack})`
        }
    }
});

export const story = style({});

globalStyle(`${story} p`, {
    lineHeight: 1.3,
    fontSize: '1.1rem',
    color: `rgb(${vars.colors.sonicSilver})`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: `rgb(${vars.colors.battleshipGray})`
        }
    }
});

globalStyle(`${story} a`, {
    color: `rgb(${vars.colors.eerieBlack})`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: `rgb(${vars.colors.white})`
        }
    }
});
