export const _useSanity = async (schema: string, pure?: boolean) => {
    const sanity = useSanity();
    const query = pure ? groq`*[_type == "${schema}"]` : groq`*[_type == "${schema}"][0]`;
    const data: any = await useAsyncData(`${schema}`, () => sanity.fetch(query));
    return data;
};
