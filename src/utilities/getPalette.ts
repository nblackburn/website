import { getDate, getMonth } from 'date-fns';
import {
    defaultPalette,
    christmasPalette,
    halloweenPalette
} from '@styles/palettes.css';

export default () => {
    const now = new Date();
    const currentDate = getDate(now);
    const currentMonth = getMonth(now);

    if (currentDate === 31 && currentMonth === 9) {
        return halloweenPalette;
    }

    if (currentDate === 25 && currentMonth === 11) {
        return christmasPalette;
    }

    return defaultPalette;
};
