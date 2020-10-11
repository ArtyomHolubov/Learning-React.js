import React from 'react';
import { useParams } from 'react-router-dom';
import { Feed, Loader } from 'semantic-ui-react';
import useData from './../hooks/useData';

function Comments() {
  const { postId } = useParams();
  const [comments, isCommentsFetching] = useData(`posts/${postId}/comments`, []);

  if (isCommentsFetching) {
    return (<Loader inline='centered' active={isCommentsFetching} />)
  } else {
    return (
      <Feed>
        {comments.map(c => {
          return (
            <Feed.Event key={c.id}>
              <Feed.Label icon='pencil' />
              <Feed.Content>
                <Feed.Date content={c.email} />
                <Feed.Summary content={c.name} />
                <Feed.Extra text content={c.body} />
              </Feed.Content>
            </Feed.Event>
          )
        })}
      </Feed>
    );
  }
}

export default Comments;