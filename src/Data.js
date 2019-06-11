import React, { useState, Fragment } from 'react';



//COMPONENTS
//component to display the page numbers at the bottom of the list
const PageNumbers = (props) => {
    //get props
    const entireDataSet = props.dataset; //this is the entire dataset array
    const rows = props.rows; // the number of rows to display per page
    const offset = props.offset; // where to initially begin from, this should be 0 in a normal case
    const getPageData = props.getPageData; //function to handle filtering the dataset for each page
    const currentPageNumber = props.currentPage;

    //get the number of pages by dividing the length of the entire dataset array by the number of rows to display per page
    const pages = entireDataSet.length / rows;


    //generating page numbers from the number of pages gotten above
    const pageNumbers = [];
    for(let i=0; i < pages; i++){
        pageNumbers.push(i);
    }

    //creating the list of page numbers that will be rendered.
    let pageOffset = 0; //this is done here and not inside the loop because i dont want it to keep getting redefined on every loop
    return(
        <Fragment>
            <ul>
                {pageNumbers.map((pageNumber, index)=>{
                    index === 0 ? pageOffset = offset : pageOffset += rows;
                    let payload = {offset: pageOffset, rows: rows, currentPage: pageNumber + 1};
                    return (
                        <li style={{display: "inline", padding: "5px"}} key={pageOffset}><button onClick={()=>{getPageData(payload)}} className={props.buttonCssClass}>{pageNumber + 1}</button></li>
                    )
                })}
                <li style={{display: "inline", padding: "5px"}}>Page: {currentPageNumber} of {pages}</li>
            </ul>
        </Fragment>
    );
};




const Data = (props) => {
    //get props
    const datasetProp = props.dataset; //entire dataset
    const offsetProp = props.offset; //where to start from, usually 0
    const rowsProp = props.rows; //number of rows per page

    const DataBody = props.dataBody;
    const DataList = props.dataList;
    const Wrapper = props.wrapper; //this is the wrapping html tag for the entire dataset. usually table tag

    //initial state
    const [pageDataset, updatePageDataset] = useState(datasetProp.slice(offsetProp, rowsProp));
    const [currentPageNumber, updateCurrentPageNumber] = useState(offsetProp + 1);



    //function to generate the page numbers
    const getPageData = (payload) => {
        //return array  with starting position at the offset and length should be the number of rows given, of dataset
        let newArr = [...datasetProp];
        updatePageDataset(newArr.splice(payload.offset, payload.rows));
        updateCurrentPageNumber(payload.currentPage);
    };



    return(
        <Fragment>
            <Wrapper className={props.wrapperCssClass}>
                <DataBody />
                <DataList dataset = {pageDataset} />
            </Wrapper>
            <PageNumbers getPageData={getPageData} rows={rowsProp} dataset={datasetProp} offset={offsetProp} currentPage = {currentPageNumber} buttonCssClass={props.buttonCssClass} />
        </Fragment>
    );




};

export default Data;