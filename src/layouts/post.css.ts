import { globalStyle, style } from '@vanilla-extract/css';
import { sizes, vars } from '@styles/theme.css';

export const post = style({
    margin: 'auto',
    maxWidth: '75%'
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
    height: '400px',
    overflow: 'hidden',
    position: 'relative',
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

globalStyle(`${image} img`, {
    width: '100%',
    objectFit: 'cover',
    objectPosition: 'center'
});
