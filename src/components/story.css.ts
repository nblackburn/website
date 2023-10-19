import { style } from '@vanilla-extract/css';
import { vars, sizes } from '@styles/theme.css';

export const story = style({
    fontSize: '1.2rem',
    textAlign: 'justify'
});

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

export const paragraph = style({
    lineHeight: 1.3,
    color: `rgb(${vars.colors.sonicSilver})`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: `rgb(${vars.colors.davyGrey})`
        }
    }
});
