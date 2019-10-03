
import React, {useEffect, useState, memo } from 'react';
import { getStoryIDs } from '../services/HackerNews'
import { Story } from '../components/Story'
import {
    GlobalStyle, 
    StoriesContainerWrapper
} from '../styles/StoriesContainerStyles'

import { useInfiniteScroll } from '../hooks/useInfiniteScroll';
export const StoriesContainer =  () => {
    const { count } = useInfiniteScroll();
    const [storyIDs, setStoryIDs] = useState([])
    useEffect(()=>{
        console.log(count)
        getStoryIDs().then(data =>{
            setStoryIDs(data)
        })

    }, [count]);

    return( 
        <>
            <GlobalStyle />
            <StoriesContainerWrapper data-test-id="stories-container">
                <h1>Hacker News Stories</h1>
                {storyIDs.slice(0,count).map(storyID => (<Story key={storyID} storyID={storyID} />))}    
            </StoriesContainerWrapper>  
        </>
    )   
}