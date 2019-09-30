import React, {useEffect, useState} from 'react';
import './App.css';

import { getStoryIDs } from './services/HackerNews'

export const App =  () => {

  // const [value, setValue] = useState(return) 
  const [storyIDs, setStoryIDs] = useState([])

  useEffect(()=>{
    getStoryIDs().then(data =>{
      setStoryIDs(data)
    })

  }, []);

  return <p>{storyIDs}</p>
}


