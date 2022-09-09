/**
* @format
*/
import 'react-native';
import React from 'react';
import AddPlayer from '../../app/screens/AddPlayerScreen';
import * as Constants from '../../app/constants';
import Colors from '../../app/colors'
import { fireEvent, render, screen } from '@testing-library/react-native';
import { renderWithProviders } from '../../app/utils/test-utils';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const createTestProps = (props: Object) => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
  });

describe("Testing Add Player Screen", () => {
    let props: any; 
    beforeEach(() => {
      props = createTestProps({});
    });

    it('Renders Add Player Screen title', () => {
        const {store} = renderWithProviders(<AddPlayer {...props}/>);
        expect(screen.queryByText(Constants.CUSTOMIZE_PLAYER_DETAILS_TITLE)).toBeTruthy();
    });

    it('Test Add Player functionality', () => {
        const {store} = renderWithProviders(<AddPlayer {...props}/>);
        fireEvent.changeText(screen.getByPlaceholderText(Constants.PLAYER_NAME_PLACEHOLDER), Constants.playerDetails[0].name)
        fireEvent.changeText(screen.getByPlaceholderText(Constants.PLAYER_NATIONALITY_PLACEHOLDER), Constants.playerDetails[0].nationality)
        fireEvent.changeText(screen.getByPlaceholderText(Constants.PLAYER_AGE_PLACEHOLDER), Constants.playerDetails[0].age)
        fireEvent.press(screen.getByText(Constants.FORWARD), Constants.FORWARD)
        fireEvent.changeText(screen.getByPlaceholderText(Constants.PLAYER_ATTACK_RATING), Constants.playerDetails[0].attack)
        fireEvent.changeText(screen.getByPlaceholderText(Constants.PLAYER_MIDFIELD_RATING), Constants.playerDetails[0].midfield)
        fireEvent.changeText(screen.getByPlaceholderText(Constants.PLAYER_DEFENCE_RATING), Constants.playerDetails[0].defence)
        fireEvent.changeText(screen.getByPlaceholderText(Constants.PLAYER_IMAGE_URL_PLACEHOLDER), Constants.playerDetails[0].imageUrl)
        fireEvent.press(screen.getByText(Constants.SUBMIT_PLAYER_BUTTON_TITLE))
        expect(store.getState().playerDetails.length).toEqual(1)
        expect(store.getState().playerDetails[0]).toEqual(Constants.playerDetails[0])
    });
})