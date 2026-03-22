import { sizes, vars } from '@styles/theme.css.ts';
import { globalStyle, style } from '@vanilla-extract/css';

export const post = style({
    margin: 'auto',
    '@media': {
        '(min-width: 1024px)': {
            maxWidth: '75%'
        }
    }
});

export const meta = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: sizes.mini
});

export const metaProperty = style({
    selectors: {
        '&:not(:last-child):after': {
            content: '•',
            marginLeft: sizes.mini,
            marginRight: sizes.mini
        }
    }
});

export const image = style({
    width: '100%',
    height: '400px',
    overflow: 'hidden',
    position: 'relative',
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

globalStyle(`${image} img`, {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
});
