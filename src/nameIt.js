const data = [{
    "id": 28,
    "Title": "Sweden"
}, {
    "id": 56,
    "Title": "USA"
}, {
    "id": 89,
    "Title": "England"
},
    {
        "id": 67,
        "Title": "India"
    },
    {
        "id": 91,
        "Title": "Germany"
    }];
const filteredData = data.filter(i => i.id >= 50 && i.id <= 70);
console.log(filteredData);
export const FilterdDataList = ({filteredData}) => {
    return (<>{filteredData.map(dataItem => <li key={dataItem.id}>{dataItem.Title}</li>)}</>)
}