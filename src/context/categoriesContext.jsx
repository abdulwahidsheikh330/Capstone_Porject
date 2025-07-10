import {  createContext, useState , useEffect } from "react";
import { addCollectionAndDocumnets , getCategoriesAndDocuments} from "../utils/firebase/firebase.utils.jsx";
import SHOP_DATA from '../shop-data.jsx'
export const CategoryContext=createContext({
    categoriesMap:{}
})
export const CategoriesProvider=({children})=>{
    const [categoriesMap,setCategoriesMap]=useState({})
    // useEffect(()=>{
    //     addCollectionAndDocumnets('categories',SHOP_DATA)
    // },[])
    useEffect(()=>{
        const getCategoriesMap=async ()=>{
           const categoryMap=await  getCategoriesAndDocuments()
           setCategoriesMap(categoryMap)
        }
        getCategoriesMap()
    },[])
    const value={categoriesMap}
    return(
        <CategoryContext.Provider value={value}>{children}</CategoryContext.Provider>
    )
}