import { style } from '@vanilla-extract/css';
import { sizes, primaryAccent, secondaryAccent } from '@styles/theme.css';

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
    fontWeight: 'normal',
    textShadow: '1px 1px 5px rgb(0 0 0 / 50%)'
});

export const highlight = style({
    fontWeight: 'bold'
});

export const primary = style({
    color: `rgb(${primaryAccent})`
});

export const secondary = style({
    color: `rgb(${secondaryAccent})`
});
