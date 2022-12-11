import { keyframes } from '@vanilla-extract/css';

export const emerge = keyframes({
    '0%': {
        opacity: 0,
        visibility: 'hidden',
        transformOrigin: 'center',
        transform: 'scale(0), translate(-50%, -50%)'
    },

    '100%': {
        opacity: 0.1,
        visibility: 'visible',
        transformOrigin: 'center',
        transform: 'scale(1), translate(-50%, -50%)'
    }
});
