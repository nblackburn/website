export const sortAsc = <T>(a: T, b: T): number => (a > b ? 1 : -1);
export const sortDesc = <T>(a: T, b: T): number => (a < b ? 1 : -1);

export const sortBy = <T>(
    items: T[],
    callback: (item: T) => unknown,
    sortOrder = sortDesc
) => {
    return items.sort((a, b) => {
        const aComparator = callback(a);
        const bComparator = callback(b);

        if (aComparator === bComparator) {
            return 0;
        }

        return sortOrder(aComparator, bComparator);
    });
};
