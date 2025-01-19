import { style } from '@vanilla-extract/css';
import { sizes, vars, primaryAccent, containers } from '@styles/theme.css';

export const notFound = style({
    flex: 1,
    display: 'flex',
    fontSize: '1.2rem',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center'
});

export const container = style({
    textAlign: 'center',
    maxWidth: containers.small
});

export const title = style({
    margin: 0,
    fontWeight: 'bold',
    color: `rgb(${primaryAccent})`,
    fontSize: sizes.xtraLarge,
    marginBottom: sizes.small
});

export const subTitle = style({
    margin: 0,
    fontSize: sizes.medium,
    color: `rgb(${vars.colors.battleshipGray})`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: `rgb(${vars.colors.silverChalice})`
        }
    }
});

export const description = style({
    lineHeight: 1.5
});
