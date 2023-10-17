import { style } from '@vanilla-extract/css';
import {
    sizes,
    containers,
    primaryAccent,
    secondaryAccent
} from '@styles/theme.css';

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
            background: `linear-gradient(180deg, rgba(${primaryAccent} / 0.1) 0%, rgba(${secondaryAccent} / 0.1) 75%, transparent 100%)`
        }
    }
});
