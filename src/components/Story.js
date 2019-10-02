import React, {useState, useEffect} from 'react';
import { getStory } from '../services/HackerNews';
import { StoryWrapper, StoryTitle, StoryMeta, StoryMetaElement } from '../styles/StoryStyles';
import { mapTime } from '../mappers/mapTime';
export const Story  = ({ storyID }) => {

    const [story, setStory] = useState({});
    useEffect(() => {
        getStory(storyID).then(data => data && data.url && setStory(data))
    }, []);

    return story && story.url ? (
        <StoryWrapper data-testid="story">
            <StoryTitle>
                <a href={story.url}>{story.title}</a>
            </StoryTitle>

            <StoryMeta>
                <span data_testid="story-by">
                    <StoryMetaElement color="#000">
                        By:
                    </StoryMetaElement>
                    {story.by}
                </span>
                &nbsp;&nbsp;

                <span data_testid="story-time">
                    <StoryMetaElement color="#000">
                        Posted:
                    </StoryMetaElement>
                    {mapTime(story.time)}
                </span>
            </StoryMeta>
            
        </StoryWrapper>
    ) : null
}