import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer
        .create(<button
            className="btn btn-primary custom-btn ml-3 my-sm-0"
            type="button"
            onClick={() => this.handleOnClick()}
        > Search</button>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});
