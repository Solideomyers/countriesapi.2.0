export const HandleSorting = (data, order) => {
    let sortedData = [...data]; // Create a copy of the original data

    // if (order === 'asc') {
    //   sortedData.sort((a, b) => a.name.localeCompare(b.name));
    // } else if (order === 'desc') {
    //   sortedData.sort((a, b) => b.name.localeCompare(a.name));
    // }

    switch(order){
        case 'asc':
            sortedData.sort((a, b) => a.name.localeCompare(b.name));
            return sortedData;
        case 'desc':
            sortedData.sort((a, b) => b.name.localeCompare(a.name));
            return sortedData;
        case 'North America':
            sortedData.filter(country => country.continent === 'North America');
            return sortedData;
        default:
            return sortedData;
    }

    // return sortedData;
}