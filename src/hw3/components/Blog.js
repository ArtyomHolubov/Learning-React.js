import React, { Component, createRef } from 'react';
import { Grid, Sticky, Rail, Segment, Ref } from 'semantic-ui-react'
import Posts from "./Posts";
import AuthorInfo from "./AuthorInfo";

class Blog extends Component {
  contextRef = createRef()

  state = {
    selectedAuthorInfo: null
  };

  handlePostSelection = post => {
    this.setState({ selectedAuthorInfo: post.userId })
  };

  render() {
    const { selectedAuthorInfo } = this.state;
    return (
      <Grid columns={2}>
        <Grid.Column>
          <Ref innerRef={this.contextRef}>
            <Segment>
              <Posts onPostSelect={this.handlePostSelection} />

              <Rail position='right'>
                <Sticky context={this.contextRef}>
                  <AuthorInfo authorId={selectedAuthorInfo} />
                </Sticky>
              </Rail>
            </Segment>
          </Ref>
        </Grid.Column>
      </Grid>
    );
  }
}

export default Blog;