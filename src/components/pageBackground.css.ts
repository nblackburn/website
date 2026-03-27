import { style } from '@vanilla-extract/css';

export const pageBackground = style({
    top: 0,
    left: 0,
    zIndex: '-1',
    width: '100%',
    opacity: 0.05,
    height: '100vh',
    position: 'absolute',
    filter: 'grayscale(1)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    maskImage: 'linear-gradient(to bottom, white, transparent)'
});
