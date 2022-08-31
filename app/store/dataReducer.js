/**
 * Created Date: Tuesday, 8th February 2022, 1:42:20 pm
 * Author: Ananda Satriyo
 * -----
 * -----
 */

import * as actionType from './dataActionType';
const initState = {
  rawData: [],
  filterData: [],
  appliedFilters: [],
  selectedData: {},
};

export default (state = initState, action) => {
  const {type, payload} = action;
  switch (type) {
    case actionType.SET_DATA:
      return {...state, rawData: payload, filterData: payload};
    case actionType.SET_SELECTED_DATA:
      return {...state, selectedData: payload};
    case actionType.RESET_DATA:
      return {...initState};
    case actionType.FILTER_DATA_ASC:
      const asc = sortAsc(payload, 'beneficiary_name');
      return {...state, filterData: asc};
    case actionType.FILTER_DATA_DSC:
      const dsc = sortDesc(payload, 'beneficiary_name');
      return {...state, filterData: dsc};
    case actionType.FILTER_DATA_DATE_ASC:
      const dateAsc = sortAsc(payload, 'created_at');
      return {...state, filterData: dateAsc};
    case actionType.FILTER_DATA_DATE_DSC:
      const dateDsc = sortDesc(payload, 'created_at');
      return {...state, filterData: dateDsc};
    case actionType.FILTER_DATA:
      let newState = Object.assign({}, state);
      let value = payload;

      let filteredValues = state.rawData.filter((data) => {
        return (
          data.beneficiary_name.toLowerCase().includes(value) ||
          data.beneficiary_bank.toLowerCase().includes(value) ||
          data.amount == value
        );
      });

      let appliedFilters = state.appliedFilters;

      if (value) {
        appliedFilters = addFilterIfNotExists(
          actionType.FILTER_DATA,
          appliedFilters,
        );
        newState.filterData = filteredValues;
      } else {
        appliedFilters = removeFilter(actionType.FILTER_DATA, appliedFilters);
        if (appliedFilters.length === 0) {
          newState.filterData = newState.rawData;
        }
      }

      return newState;
    default:
      return state;
  }
};

function sortAsc(arr, name) {
  return arr.sort(function (a, b) {
    let x = a[name].toLowerCase();
    let y = b[name].toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
}

function sortDesc(arr, name) {
  return arr.sort(function (a, b) {
    let x = a[name].toLowerCase();
    let y = b[name].toLowerCase();
    if (x < y) {
      return 1;
    }

    if (x > y) {
      return -1;
    }
    return 0;
  });
}

function addFilterIfNotExists(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  if (index === -1) appliedFilters.push(filter);
  return appliedFilters;
}

function removeFilter(filter, appliedFilters) {
  let index = appliedFilters.indexOf(filter);
  appliedFilters.splice(index, 1);
  return appliedFilters;
}
