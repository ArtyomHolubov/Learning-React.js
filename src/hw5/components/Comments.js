import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Feed, Loader } from 'semantic-ui-react';

function Comments() {
  const [comments, setComments] = useState([]);
  const [isCommentsFetching, setIsCommentsFetching] = useState(false);
  const { postId } = useParams();

  useEffect(() => {
    setIsCommentsFetching(true);
    setComments([]);
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
      .then(response => response.json())
      .then(comments => {
        setComments(comments);
        setIsCommentsFetching(false);
      })
  }, [postId]);

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