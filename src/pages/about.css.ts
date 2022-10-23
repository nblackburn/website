import { style } from '@vanilla-extract/css';
import { vars, sizes } from '@styles/theme.css';

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

export const story = style({
    fontSize: '1.2rem',
    textAlign: 'justify'
});

export const paragraph = style({
    color: vars.colors.davyGrey,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.silverChalice
        }
    }
});
