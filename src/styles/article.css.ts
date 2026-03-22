import { globalStyle, style } from '@vanilla-extract/css';
import { sizes, vars, secondaryAccent } from '@styles/theme.css.ts';

export const article = style({});

globalStyle(`${article} h1, h2, h3, h4, h5, h6`, {
    margin: `${sizes.medium} 0 ${sizes.small} 0`
});

globalStyle(`${article} p`, {
    lineHeight: '1.75rem',
    margin: `0 0 ${sizes.small} 0`,
    color: vars.colors.dimGrey,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.coolSteel
        }
    }
});

globalStyle(`${article} blockquote`, {
    padding: sizes.nano,
    borderRadius: sizes.mini,
    margin: `0 0 ${sizes.small} 0`,
    background: vars.colors.alabasterGrey,
    borderLeft: `5px ${secondaryAccent} solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: vars.colors.carbonBlack
        }
    }
});

globalStyle(`${article} blockquote p`, {
    margin: sizes.tiny,
    color: vars.colors.carbonBlack,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.alabasterGrey
        }
    }
});

globalStyle(`${article} ul, ${article} ol`, {
    padding: 0,
    lineHeight: '1.75rem',
    listStylePosition: 'inside',
    color: vars.colors.dimGrey,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.coolSteel
        }
    }
});

globalStyle(`${article} code:not(pre code)`, {
    borderRadius: sizes.tiny,
    padding: `${sizes.nano} ${sizes.tiny}`,
    color: vars.colors.carbonBlack,
    background: vars.colors.alabasterGrey,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.alabasterGrey,
            background: vars.colors.carbonBlack
        }
    }
});

globalStyle(`${article} hr`, {
    marginTop: sizes.medium,
    marginBottom: sizes.medium,
    color: vars.colors.alabasterGrey,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: vars.colors.carbonBlack
        }
    }
});

globalStyle(`${article} .astro-code`, {
    padding: sizes.small,
    borderRadius: sizes.mini,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: 'var(--shiki-dark) !important',
            backgroundColor: 'var(--shiki-dark-bg) !important',
            fontStyle: 'var(--shiki-dark-font-style) !important',
            fontWeight: 'var(--shiki-dark-font-weight) !important',
            textDecoration: 'var(--shiki-dark-text-decoration) !important'
        }
    }
});

globalStyle(`${article} .astro-code span`, {
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: 'var(--shiki-dark) !important',
            backgroundColor: 'var(--shiki-dark-bg) !important',
            fontStyle: 'var(--shiki-dark-font-style) !important',
            fontWeight: 'var(--shiki-dark-font-weight) !important',
            textDecoration: 'var(--shiki-dark-text-decoration) !important'
        }
    }
});
