import { style } from '@vanilla-extract/css';
import { sizes, vars } from '@styles/theme.css.ts';

export const linkGroups = style({});

export const linkGroup = style({
    fontSize: '1.2rem',
    marginBottom: sizes.medium,
    borderRadius: sizes.small
});

export const heading = style({
    fontWeight: 'bold',
    marginBottom: sizes.nano,
    paddingBottom: sizes.nano,
    borderBottom: `1px color-mix(in srgb, ${vars.colors.white} 10%, transparent) solid`
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
            background: `color-mix(in srgb, ${vars.colors.silverChalice} 80%, transparent)`
        }
    },
    '@media': {
        '(prefers-color-scheme: dark)': {
            selectors: {
                '&:nth-child(even)': {
                    background: `color-mix(in srgb, ${vars.colors.eerieBlack} 80%, transparent)`
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
