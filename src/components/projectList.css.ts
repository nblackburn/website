import { sizes } from '@styles/theme.css';
import { style } from '@vanilla-extract/css';

export const projectList = style({
    flex: 1,
    display: 'grid',
    rowGap: sizes.small,
    columnGap: sizes.small,
    alignItems: 'flex-start',
    marginBottom: sizes.medium,
    gridTemplateColumns: '1fr'
});
