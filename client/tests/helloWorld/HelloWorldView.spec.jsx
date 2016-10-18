import React from 'react';
import { shallow } from  'enzyme';

import HelloWorldView from '../../src/helloWorld/HelloWorldView.jsx';

describe('Hello World View', () => {
  it('render div with hello world', () => {
    const wrapper = shallow(<HelloWorldView/>);

    expect(wrapper.contains(<div className="helloWorld">Hello World</div>
    )).to.equal(true);
  });
});
