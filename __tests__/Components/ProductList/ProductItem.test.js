import {fireEvent, render, waitFor} from '@testing-library/react-native';
import ProductItem from '../../../Components/ProductList/ProductItem';
import {NavigationContainer} from '@react-navigation/native';

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
const sampleItem = {
  id: 1,
  title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
  price: 109.95,
  description:
    'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
  category: "men's clothing",
  image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
  rating: {
    rate: 3.9,
    count: 120,
  },
};
