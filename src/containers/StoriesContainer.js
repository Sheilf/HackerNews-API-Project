
import React, {useEffect, useState} from 'react';
import { getStoryIDs } from '../services/HackerNews'
import { Story } from '../components/Story'


export const StoriesContainer =  () => {

        // const [value, setValue] = useState(return) 
    const [storyIDs, setStoryIDs] = useState([])

    useEffect(()=>{
        getStoryIDs().then(data =>{
            setStoryIDs(data)
        })

    }, []);

    return storyIDs.map(storyID => (
        <Story storyID = {storyID} />
    ))
}