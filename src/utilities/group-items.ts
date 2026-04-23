type Type = {
    id: string;
    name: string;
};

type Item = {
    type: string;
};

export type Group = {
    id: string;
    name: string;
    items: Item[];
};

export default (types: Type[], items: Item[]): Group[] => {
    return types
        .map((type) => {
            return {
                ...type,
                items: items.filter((item) => {
                    return type.id === item.type;
                })
            };
        })
        .filter((group) => {
            return group.items.length > 0;
        });
};
