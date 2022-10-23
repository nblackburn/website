type Type = {
    id: string;
};

type Item = {
    type: string;
};

type Group = Type & {
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
