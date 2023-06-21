export default defineEventHandler(async event => {
    const sanity = useSanity();

    const query = getQuery(event);
    const schema = query.schema;
    const pure = query.pure;
    const uniqueId = query.prId;

    if (uniqueId) {
        const postQuery = groq`*[_type == "products"][_id == "${uniqueId}"][0]`;
        const data: any = await sanity.fetch(postQuery);
        return data;
    }

    const postQuery = pure ? groq`*[_type == "${schema}"]` : groq`*[_type == "${schema}"][0]`;
    const data: any = await sanity.fetch(postQuery);
    return data;
});
