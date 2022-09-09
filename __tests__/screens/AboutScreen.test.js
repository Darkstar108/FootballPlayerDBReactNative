/**
* @format
*/
import 'react-native';
import React from 'react';
import About from '../../app/screens/AboutScreen';
import * as Constants from '../../app/constants';
import Colors from '../../app/colors'
import {render, screen} from '@testing-library/react-native';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("Testing About Screen", () => {
    it('Renders About Screen Title', () => {
        render(<About />);
        expect(screen.queryByText(Constants.ABOUT_SCREEN_TITLE)).toBeTruthy();
    });

    it('Renders About Screen content', () => {
        render(<About />);
        expect(screen.queryByText(Constants.ABOUT_SCREEN_CONTENT)).toBeTruthy();
    });
})