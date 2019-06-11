"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

//COMPONENTS
//component to display the page numbers at the bottom of the list
var PageNumbers = function PageNumbers(props) {
  //get props
  var entireDataSet = props.dataset; //this is the entire dataset array

  var rows = props.rows; // the number of rows to display per page

  var offset = props.offset; // where to initially begin from, this should be 0 in a normal case

  var getPageData = props.getPageData; //function to handle filtering the dataset for each page

  var currentPageNumber = props.currentPage; //get the number of pages by dividing the length of the entire dataset array by the number of rows to display per page

  var pages = entireDataSet.length / rows; //generating page numbers from the number of pages gotten above

  var pageNumbers = [];

  for (var i = 0; i < pages; i++) {
    pageNumbers.push(i);
  } //creating the list of page numbers that will be rendered.


  var pageOffset = 0; //this is done here and not inside the loop because i dont want it to keep getting redefined on every loop

  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("ul", null, pageNumbers.map(function (pageNumber, index) {
    index === 0 ? pageOffset = offset : pageOffset += rows;
    var payload = {
      offset: pageOffset,
      rows: rows,
      currentPage: pageNumber + 1
    };
    return _react["default"].createElement("li", {
      style: {
        display: "inline",
        padding: "5px"
      },
      key: pageOffset
    }, _react["default"].createElement("button", {
      onClick: function onClick() {
        getPageData(payload);
      },
      className: props.buttonCssClass
    }, pageNumber + 1));
  }), _react["default"].createElement("li", {
    style: {
      display: "inline",
      padding: "5px"
    }
  }, "Page: ", currentPageNumber, " of ", pages)));
};

var Data = function Data(props) {
  //get props
  var datasetProp = props.dataset; //entire dataset

  var offsetProp = props.offset; //where to start from, usually 0

  var rowsProp = props.rows; //number of rows per page

  var DataBody = props.dataBody;
  var DataList = props.dataList;
  var Wrapper = props.wrapper; //this is the wrapping html tag for the entire dataset. usually table tag
  //initial state

  var _useState = (0, _react.useState)(datasetProp.slice(offsetProp, rowsProp)),
      _useState2 = _slicedToArray(_useState, 2),
      pageDataset = _useState2[0],
      updatePageDataset = _useState2[1];

  var _useState3 = (0, _react.useState)(offsetProp + 1),
      _useState4 = _slicedToArray(_useState3, 2),
      currentPageNumber = _useState4[0],
      updateCurrentPageNumber = _useState4[1]; //function to generate the page numbers


  var getPageData = function getPageData(payload) {
    //return array  with starting position at the offset and length should be the number of rows given, of dataset
    var newArr = _toConsumableArray(datasetProp);

    updatePageDataset(newArr.splice(payload.offset, payload.rows));
    updateCurrentPageNumber(payload.currentPage);
  };

  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement(Wrapper, {
    className: props.wrapperCssClass
  }, _react["default"].createElement(DataBody, null), _react["default"].createElement(DataList, {
    dataset: pageDataset
  })), _react["default"].createElement(PageNumbers, {
    getPageData: getPageData,
    rows: rowsProp,
    dataset: datasetProp,
    offset: offsetProp,
    currentPage: currentPageNumber,
    buttonCssClass: props.buttonCssClass
  }));
};

var _default = Data;
exports["default"] = _default;
