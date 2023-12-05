const getUsers  = async () => {
    const url = 'https://twitter.com/';
    const resolve = await axios.get(url);
    console.log(resolve);
    return await resolve;
}