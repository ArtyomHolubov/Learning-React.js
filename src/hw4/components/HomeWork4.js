import React from 'react';
import { Input, Label, Grid, Segment } from 'semantic-ui-react';
import useLocalStorage from '../hooks/useLocalStorage';
import useIsOnline from '../hooks/useIsOnline';
import useDocumentTitle from '../hooks/useDocumentTitle';

function HomeWork4() {
  const [localStorageValue, setLocalStorageValue] = useLocalStorage('local-storage-value', '');
  const onChangeLocalStorageValue = (e) => {
    setLocalStorageValue(e.target.value);
  };

  const isOnline = useIsOnline();

  const [documentTitle, setDocumentTitle] = useDocumentTitle();
  const onChangeTitle = (e) => {
    setDocumentTitle(e.target.value);
  }

  return (
    <div id="hw4">
      <h1>Home Work 4</h1>

      <Grid columns={2}>
        <Grid.Column>
          <Segment raised>
            <Label color={isOnline ? 'green' : 'red'} ribbon>
              {isOnline ? 'online' : 'offline'}
            </Label>
            <br></br>
            <br></br>
            <Input label='local storage value'
              placeholder='enter value'
              onChange={onChangeLocalStorageValue}
              value={localStorageValue} />
              <br></br>
              <br></br>
            <Input label='Document Title'
              placeholder='enter value'
              onChange={onChangeTitle}
              value={documentTitle} />
          </Segment>
        </Grid.Column>
      </Grid>
    </div>
  );
}

export default HomeWork4;