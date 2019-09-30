import { selectFields } from '../utilities/selectFields';

export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesURL = `${baseURL}newstories.json`;
export const storyURL = `${baseURL}item/`;


export const getStory = async (storyID) => {
    const result = await fetch(`${storyURL + storyID}.json`).then(data =>{
       return data.json()
    }).then(response =>{
        return selectFields(response);
    }).catch(error=>{console.log(error)})

    return result;
} 
export const getStoryIDs = async () => {
    const result = await fetch(newStoriesURL).then(data =>{
        return data.json()
    }).catch(error => {
        console.log(error);
    })

    return result;
}