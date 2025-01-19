import { globalStyle, style } from '@vanilla-extract/css';
import { sizes, vars, secondaryAccent } from '@styles/theme.css';

export const article = style({});

globalStyle(`${article} h1, h2, h3, h4, h5, h6`, {
    margin: `${sizes.medium} 0 ${sizes.small} 0`
});

globalStyle(`${article} p`, {
    lineHeight: '1.75rem',
    margin: `0 0 ${sizes.small} 0`,
    color: `rgb(${vars.colors.sonicSilver})`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: `rgb(${vars.colors.battleshipGray})`
        }
    }
});

globalStyle(`${article} blockquote`, {
    padding: sizes.nano,
    borderRadius: sizes.mini,
    margin: `0 0 ${sizes.small} 0`,
    background: `rgb(${vars.colors.silverChalice})`,
    borderLeft: `5px rgba(${secondaryAccent}) solid`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            background: `rgb(${vars.colors.eerieBlack})`
        }
    }
});

globalStyle(`${article} blockquote p`, {
    margin: sizes.tiny,
    color: `rgb(${vars.colors.eerieBlack})`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: `rgb(${vars.colors.silverChalice})`
        }
    }
});

globalStyle(`${article} ul, ${article} ol`, {
    padding: 0,
    lineHeight: '1.75rem',
    listStylePosition: 'inside',
    color: `rgb(${vars.colors.sonicSilver})`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: `rgb(${vars.colors.battleshipGray})`
        }
    }
});

globalStyle(`${article} code:not(pre code)`, {
    borderRadius: sizes.tiny,
    padding: `${sizes.nano} ${sizes.tiny}`,
    color: `rgb(${vars.colors.eerieBlack})`,
    background: `rgb(${vars.colors.silverChalice})`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: `rgb(${vars.colors.silverChalice})`,
            background: `rgb(${vars.colors.eerieBlack})`
        }
    }
});

globalStyle(`${article} hr`, {
    marginTop: sizes.medium,
    marginBottom: sizes.medium,
    color: `rgb(${vars.colors.silverChalice})`,
    '@media': {
        '(prefers-color-scheme: dark)': {
            color: `rgb(${vars.colors.eerieBlack})`
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
