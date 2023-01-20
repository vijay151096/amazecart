import {fireEvent, render, waitFor} from '@testing-library/react-native';
import ProductItem from '../../../Components/ProductList/ProductItem';
import {NavigationContainer} from '@react-navigation/native';
import {getSampleItem} from '../../Utility/Util';

const sampleItem = getSampleItem();
describe('Product Item Layout Test Suite', function () {
  it('should show the favBar Container', function () {
    const wrapper = render(
      <NavigationContainer>
        <ProductItem item={sampleItem} />
      </NavigationContainer>,
    );
    const favBarCont = wrapper.getByTestId(`ProductItem-favBar`);
    expect(favBarCont).toBeTruthy();
  });
  it('should show the image Container', function () {
    const wrapper = render(
      <NavigationContainer>
        <ProductItem item={sampleItem} />
      </NavigationContainer>,
    );
    const imageCont = wrapper.getByTestId(`ProductItem-image`);
    expect(imageCont).toBeTruthy();
  });
  it('should show the details Container', function () {
    const wrapper = render(
      <NavigationContainer>
        <ProductItem item={sampleItem} />
      </NavigationContainer>,
    );
    const detailsCont = wrapper.getByTestId(`ProductItem-details`);
    expect(detailsCont).toBeTruthy();
  });
});

const mockUseNavigation = () => {
  const mockedNavigate = jest.fn();
  jest.mock('@react-navigation/native', () => {
    const actualNav = jest.requireActual('@react-navigation/native');
    return {
      ...actualNav,
      useNavigation: () => ({
        navigate: mockedNavigate,
      }),
    };
  });
  return mockedNavigate;
};

describe('Product Item Functionality Test Suite', function () {
  it('Should Navigate to Product Details Page', function () {
    const mockNav = mockUseNavigation();
    const wrapper = render(
      <NavigationContainer>
        <ProductItem item={sampleItem} />
      </NavigationContainer>,
    );
    const favBarCont = wrapper.getByTestId(`ProductItem-OuterContainer`);
    expect(favBarCont).toBeTruthy();
    fireEvent.press(favBarCont);
    waitFor(() => expect(mockNav).toBeCalledWith('productDetails'));
  });
});
