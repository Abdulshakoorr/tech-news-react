import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
        isLoading: false,
      };
    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits?.filter(item => item.objectID !== action.payload),
        
      };
    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
        
      };
    case "GET_NEXT_PAGE":
      let pageNumberNext = state.page;
      if(pageNumberNext >= 50){
        pageNumberNext = 1;
      }else{
        pageNumberNext = pageNumberNext + 1;
      }
        return {
          ...state,
          page: pageNumberNext,
          
        };
    case "GET_PRE_PAGE":
      let pageNumber = state.page;
      if(pageNumber <= 0){
        pageNumber = 0;
      }else{
        pageNumber = pageNumber - 1;
      }
      return {
        ...state,
        page: pageNumber,
        
      };
 
  }
  return state;
};

export default reducer;
