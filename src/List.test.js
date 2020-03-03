import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';

it('renders without crashing', () => {
  // first create a DOM element to render the component into
  const div = document.createElement('div');

  // render the component, this is the actual test, if something is wrong it will fail here
  ReactDOM.render(<List 
                    key={'2'}
                    header={'Second-card'}
                    cards={[{'id':'1', 'title':'boom','content':'hello'}]} />, div);

  // clean up code
  ReactDOM.unmountComponentAtNode(div);
});

it('renders the UI as expected', () => {
  const tree = renderer
    .create(<List key="2" header='Big Header' cards={[{'id':'1', 'title':'boom','content':'hello'}]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();  
  });