/**
 * @format
 */
import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("Testing App.js", () => {
  it("renders correctly", () => {
    renderer.act(() => {
        renderer.create(<App />);
    });
  });
})