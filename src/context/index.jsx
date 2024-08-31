import React from "react";
import { useContext , createContext } from "react";
import PropTypes from "prop-types";

const ControllerContex = createContext();

export function reducer(state, action) {
  switch (action.type) {
    case "OPEN_FILTERNAV": {
      return { ...state, openFilternav: action.value };
    }
    case "OPEN_SIDENAV": {
      return { ...state, openSidenav: action.value };
    }
    case "SIDENAV_TYPE": {
      return { ...state, sidenavType: action.value };
    }
    case "CHANGE_SIDENAVDIR" : {
      return {...state , sidenavDirection : action.value}
    }
    case "CHANGE_COLLAPSEDATA" : {
      return {...state , collapseChange : action.value}
    }
    case "CHANGE_SEARCHVALUE" : {
      return {...state , searchValue : action.value}
    }
    case "CHANGE_ROLLVALUE" : {
      return {...state , rollValue : action.value}
    }
    case "CHANGE_CITYVALUE" : {
      return {...state , cityValue : action.value}
    }
    case "CHANGE_USERVALUE" : {
      return {...state , swicherFilterValue : action.value}
    }
    case "OPEN-MENUNAV" : {
      return {...state , openMenuNav : action.value}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

export function ControllerProvider({ children }) {
  const initialState = {
    openFilternav : false,
    openSidenav: false,
    sidenavType: "white",
    sidenavDirection : true, // True will arrange element on right 
    collapseChange : false, 
    searchValue : "" ,
    rollValue : "",
    cityValue:"",
    swicherFilterValue:"id",
    openMenuNav : false
  };

  const [controller, dispatch] = React.useReducer(reducer, initialState);

  const value = React.useMemo(
    () => [controller, dispatch],
    [controller, dispatch]
  );

  return (
    <ControllerContex.Provider value={value}>
      {children}
    </ControllerContex.Provider>
  );
}

export function useController() {
  return useContext(ControllerContex);
}

export const setopenfilternav = (dispatch, value) =>
  dispatch({ type: "OPEN_FILTERNAV", value });
export const setOpenSidenav = (dispatch, value) =>
  dispatch({ type: "OPEN_SIDENAV", value });
export const setSidenavType = (dispatch, value) =>
  dispatch({ type: "SIDENAV_TYPE", value });
export const setsidenaveDirection = (dispatch , value)=>
  dispatch({type : "CHANGE_SIDENAVDIR" , value})
export const setcollapsechange = (dispatch , value)=>
  dispatch({type : "CHANGE_COLLAPSEDATA" , value})
export const setsearchvalue = (dispatch , value)=>
  dispatch({type : "CHANGE_SEARCHVALUE" , value})
export const setrollvalue = (dispatch , value)=>
  dispatch({type : "CHANGE_ROLLVALUE" , value})
export const setcityvalue = (dispatch , value)=>
  dispatch({type : "CHANGE_CITYVALUE" , value})
export const setswicherFilterValue = (dispatch , value)=>
  dispatch({type : "CHANGE_USERVALUE" , value})
export const setopenmenunav = (dispatch , value)=>
  dispatch({type : "OPEN-MENUNAV" , value})
export const isActive = (currentvalue , value) =>{
    return currentvalue===value
}