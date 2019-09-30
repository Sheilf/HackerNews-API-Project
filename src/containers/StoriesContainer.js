
import React, {useEffect, useState} from 'react';
import { getStoryIDs } from '../services/HackerNews'


export const StoriesContainer =  () => {

        // const [value, setValue] = useState(return) 
    const [storyIDs, setStoryIDs] = useState([])

    useEffect(()=>{
        getStoryIDs().then(data =>{
        setStoryIDs(data)
        })

    }, []);

    return <p>{storyIDs}</p>
}