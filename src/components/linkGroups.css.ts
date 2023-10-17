import { style } from '@vanilla-extract/css';
import { sizes, vars } from '@styles/theme.css';

export const linkGroups = style({});

export const linkGroup = style({
    fontSize: '1.2rem',
    marginBottom: sizes.medium,
    borderRadius: sizes.small
});

export const heading = style({
    fontWeight: 'bold',
    marginBottom: sizes.small
});

export const items = style({
    margin: 0,
    padding: 0,
    listStyle: 'none',
    listStylePosition: 'inside'
});

export const item = style({
    borderRadius: '0.25rem',
    selectors: {
        '&:nth-child(even)': {
            background: `rgb(${vars.colors.silverChalice})`
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            selectors: {
                '&:nth-child(even)': {
                    background: `rgb(${vars.colors.eerieBlack})`
                }
            }
        }
    }
});

export const icon = style({
    marginRight: sizes.small
});

export const link = style({
    display: 'flex',
    color: 'inherit',
    alignItems: 'center',
    textDecoration: 'none',
    padding: '0.5rem 0.75rem'
});
