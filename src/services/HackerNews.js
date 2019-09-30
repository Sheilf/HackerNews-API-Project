export const baseURL = 'https://hacker-news.firebaseio.com/v0/';
export const newStoriesURL = `${baseURL}newstories.json`;
export const storyURL = `${baseURL}item/`;

export const getStoryIDs = async () => {
    const result = await fetch(newStoriesURL).then(data =>{
        return data.json()
    }).catch(error => {
        console.log(error);
    })

    return result;
}