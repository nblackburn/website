export default (slug: string) => {
    const lowerCase = slug.toLowerCase();

    return lowerCase.replace(/'/g, '').replace(/[\s_]/g, '-');
};
