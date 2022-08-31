/**
 * Created Date: Tuesday, 8th February 2022, 1:42:02 pm
 * Author: Ananda Satriyo
 * -----
 * -----
 */
import * as actionType from './dataActionType';
export const setData = (data) => ({
  type: actionType.SET_DATA,
  payload: data,
});

export const setSelectedData = (data) => ({
  type: actionType.SET_SELECTED_DATA,
  payload: data,
});

export const resetData = () => ({
  type: actionType.RESET_DATA,
});

export const filterDataByAsc = (data) => ({
  type: actionType.FILTER_DATA_ASC,
  payload: data,
});

export const filterDataByDsc = (data) => ({
  type: actionType.FILTER_DATA_DSC,
  payload: data,
});

export const filterDataDateByAsc = (data) => ({
  type: actionType.FILTER_DATA_DATE_ASC,
  payload: data,
});

export const filterDataDateByDsc = (data) => ({
  type: actionType.FILTER_DATA_DATE_DSC,
  payload: data,
});

export const filterData = (data) => ({
  type: actionType.FILTER_DATA,
  payload: data,
});
