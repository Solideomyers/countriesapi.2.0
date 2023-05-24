export const HandleContinents = (data, input) => {
    const orderContentinents = data.filter( country => country.continent === input)
    return orderContentinents
}