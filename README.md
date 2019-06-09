# react-data-pagination
A customisable pagination component for ReactJS

## Installation
`npm install --save react-data-pagination`

## Basic Usage
``` 
import Data from 'react-data-pagination';


const DataContainer = () => {
    return(
        <thead>
            <tr>
                <th>Name</th>
                <th>Address</th>
            </tr>
        </thead>
    );
};

//this component renders the list of data... the table body
//use something unique for your map keys.
const DataList = (props) => {
    const dataset = props.dataset;
    return(
        <Fragment>
            <tbody>
                {dataset.map((value)=>{
                    return(
                        <tr key={value.name}> 
                            <td>{value.name}</td>
                            <td>{value.address}</td>
                        </tr>
                    );
                })}
            </tbody>
        </Fragment>
    );

};

//the dataset
const dataset = [
        {"name": "Curran Barrett", "address": "Ap #177-391 Velit. Ave"},
        {"name": "Vernon Hardy", "address": "480-9044 Aliquam St."},
        {"name": "Baxter Payne", "address": "P.O. Box 795, 139 Nec, Rd."},
        {"name": "Jack Blankenship", "address": "451 Vivamus Av."},
        {"name": "Jordan Christensen", "address": "507-7644 Gravida Rd."},
        {"name": "Luke Kirkland", "address": "Ap #930-4518 Enim. Av."},
        {"name": "Gray Phillips", "address": "5936 Nec, Road"},
        {"name": "Nolan Kramer", "address": "P.O. Box 649, 9887 Donec Ave"},
        {"name": "Marsden Mcmahon", "address": "P.O. Box 603, 8397 Et Av."},
        {"name": "Hashim Riddle", "address": "P.O. Box 341, 1922 Interdum. St."},
        {"name": "Reece Irwin", "address": "595-9942 Est, St."},
        {"name": "Demetrius Sparks", "address": "899-6946 Sed, St."},
        {"name": "Hilel Finch", "address": "1430 Eleifend Av."},
        {"name": "Brenden Owens", "address": "Ap #298-9226 Augue Rd."},
        {"name": "Alec Long", "address": "564-4129 Purus. Av."}
];

<Data dataset={dataset} offset={0} rows={10} dataBody={DataContainer} dataList={DataList} wrapper="table" wrapperCssClass="table" buttonCssClass="button" />
```

## Props Explained
**dataset:** An array of objects that form your dataset.

**offset:** The position in the array you want the first page to start from. Usually left as 0 (zero)

**rows:** The number of rows per page

**dataBody:** User created component that will render table headings, if the dataset will be display in a table. This can be set to null if a table is not being used to display the data. Ensure you specify your own table headings. In the case of a table, this component will render your <thead></thead> section. See the DataContainer component in the basic example above.

**dataList:** User created component that will render the data list per page. The dataset is passed as a prop to this component and can be accessed through props.dataset. You can then map() through the dataset to render them. In the case of a table this component will render your <tbody></tbody> section. See the DataList component in the basic example above.

**wrapper:** The wrapping HTML tag for your data. In the case of a table, this is going to be "table"

**wrapperCssClass:** css class to assign to the wrapper, for styling.

**buttonCssClass:** css class to assign to the buttons that will hold the page numbers.

