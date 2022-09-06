import React from "react";
import NewsList from "../NewsList/NewsList";

const News = (props)=>{
    
        const news = props.news.map((item,i)=>(
            <NewsList key ={item.id} item = {item}/>
        ))
        return(
            <>
                {news}
            </>
        )    
}


    
export default News;