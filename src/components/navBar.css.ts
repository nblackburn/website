import { breakpoints, sizes } from '@styles/theme.css';
import { style, globalStyle } from '@vanilla-extract/css';

export const items = style({
    margin: 0,
    padding: 0,
    display: 'flex',
    listStyle: 'none',
    alignItems: 'center',
    listStylePosition: 'inside',
    '@media': {
        [breakpoints.small]: {
            flexDirection: 'column'
        }
    }
});

export const item = style({
    display: 'inline-block',
    selectors: {
        '&:not(&:last-child)': {
            marginRight: sizes.tiny
        }
    },
    '@media': {
        [breakpoints.small]: {
            fontSize: '1.5rem',
            selectors: {
                '&:not(&:last-child)': {
                    marginRight: 0,
                    marginBottom: sizes.small
                }
            }
        }
    }
});

export const showSmall = style({
    display: 'none',
    '@media': {
        [breakpoints.small]: {
            display: 'block'
        }
    }
});

export const toggle = style({
    display: 'none'
});

export const toggleLabel = style({
    position: 'relative'
});

export const tray = style({
    '@media': {
        [breakpoints.small]: {
            left: 0,
            opacity: 0,
            top: '100%',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            visibility: 'hidden',
            justifyContent: 'center',
            backdropFilter: 'blur(10px)',
            height: 'calc(100vh - 90px)',
            background: 'rgba(0, 0, 0, 0.8)',
            transition: 'opacity 0.2s ease-in-out'
        }
    }
});

globalStyle(`${toggle}:checked + ${tray}`, {
    opacity: 1,
    visibility: 'visible'
});
