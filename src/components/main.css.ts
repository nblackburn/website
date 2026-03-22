import { style } from '@vanilla-extract/css';
import {
    sizes,
    containers,
    primaryAccent,
    secondaryAccent
} from '@styles/theme.css.ts';

export const main = style({
    flex: 1,
    width: '100%',
    margin: 'auto',
    display: 'flex',
    overflow: 'hidden',
    flexDirection: 'column',
    marginBottom: sizes.large,
    padding: `0 ${sizes.small}`,
    maxWidth: containers.xtraLarge,
    selectors: {
        '&:before': {
            zIndex: -1,
            top: '0',
            left: '0',
            width: '100%',
            height: '100vh',
            content: '\\0020',
            position: 'absolute',
            background: `linear-gradient(180deg, color-mix(in oklab, ${primaryAccent} 10%, transparent) 0%, color-mix(in oklab, ${secondaryAccent} 10%, transparent) 75%, transparent 100%)`
        }
    }
});
