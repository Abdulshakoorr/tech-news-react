import { createContext, useContext,useReducer, useEffect } from "react";
import reducer from "./reducer";

// API_URL 
let API_URL = "http://hn.algolia.com/api/v1/search?"
// intial state of the reducer hook 

const intialState = {
    isLoading: true,
    query:'react',
    page: 0,
    nbPages:0,
    hits:[]
}
// created app context 
const AppContext = createContext()

// context provider
const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, intialState);

// feting data 

const fatchData = async (APIData) =>{
    try{
        dispatch({type: "SET_LOADING"})
        const response = await fetch(APIData);
        const result = await response.json();
        console.log(result.hits)
        dispatch({
            type:"GET_STORIES",
            payload:{
                hits: result.hits,
                nbPages: result.nbPages
            }
        })
    }catch(err){
        console.error(err)
    }
}

// removing post 

const removePost = (id)=>{
    dispatch({ type:"REMOVE_POST", payload: id})
}
 
// search post 
const searchPost =(searchQuery)=>{
    console.log(searchQuery)
    dispatch({ type:"SEARCH_POST", payload: searchQuery})
}

// pagination 

const getPrePage =() =>{
    dispatch({ type:"GET_PRE_PAGE"})
}
const getNextPage =() =>{
    dispatch({ type:"GET_NEXT_PAGE"})
}
// pagination 

useEffect(()=>{
    fatchData(`${API_URL}query=${state.query}&page=${state.page}`)
},[state.query,state.page])



    return <AppContext.Provider value={{...state , removePost, searchPost,getPrePage,getNextPage}}>
        { children}
    </AppContext.Provider>
}


// costume hook 
const useGlobalContext = ()=>{
    return useContext(AppContext)
}
export { AppProvider, AppContext, useGlobalContext}