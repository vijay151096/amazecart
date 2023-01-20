import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import LoginIntro from '../../../Components/Login/LoginIntro';

describe('Login Intro Layout', () => {
  it('main container should have 3 children', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <LoginIntro />
      </NavigationContainer>,
    );
    expect(getByTestId('LoginIntro-mainContainer').children.length).toBe(3);
  });

  it('should have the button to sign up', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <LoginIntro />
      </NavigationContainer>,
    );
    expect(getByTestId('LoginIntro-signupBtn')).toBeTruthy();
  });

  it('signup button should have the required text', () => {
    const {getByText} = render(
      <NavigationContainer>
        <LoginIntro />
      </NavigationContainer>,
    );
    expect(getByText('Create New')).toBeTruthy();
  });

  it('container containing login text should have 2 children', () => {
    const {getByTestId} = render(
      <NavigationContainer>
        <LoginIntro />
      </NavigationContainer>,
    );
    expect(getByTestId('LoginIntro-loginText').children.length).toBe(2);
  });
});

const mockUseNavigation = () => {
  const mockedReplace = jest.fn(path => console.log(path));
  jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
      ...actualNav,
      useNavigation: () => ({
        replace: mockedReplace,
      }),
    };
  });
  return mockedReplace;
};

describe('LoginIntro component functionality', () => {
  it.skip('should call the navigate function when the button is clicked', () => {
    const mockReplace = mockUseNavigation();
    const {getByText} = render(
      <NavigationContainer>
        <LoginIntro />
      </NavigationContainer>,
    );

    const signupButton = getByText('Create New');
    fireEvent.press(signupButton);
    waitFor(() => expect(mockReplace).toBeCalledWith('signup'));
  });
});
