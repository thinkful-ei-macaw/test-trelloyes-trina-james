import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';

describe('My component', () => {
  it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
  
    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<Card key='4' title='title' contnet='content'/>, div);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });
  
  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card key='4' title='title' content='content'/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
    });

    it('renders the UI as expected', () => {
      const tree = renderer
        .create(<Card key='2' title='Bigger Title' content='Better Content'/>)
        .toJSON();
      expect(tree).toMatchSnapshot();  
      });
})