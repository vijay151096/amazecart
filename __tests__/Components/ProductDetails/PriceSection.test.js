import {fireEvent, render} from '@testing-library/react-native';
import PriceSection from '../../../Components/ProductDetails/PriceSection';
import {CartContext} from '../../../Store/CartContextProvider';
import {getSampleItem} from '../../Utility/Util';
import {Alert} from 'react-native';

const item = getSampleItem();

describe('Price Section layout', () => {
  it('should display dollar sign', () => {
    const {getByText} = render(<PriceSection item={item} />);
    const dollarTextElement = getByText('$');
    expect(dollarTextElement).toBeTruthy();
  });

  it('should display price', () => {
    const {getByText} = render(<PriceSection item={item} />);
    const priceTextElement = getByText(item.price.toString());
    expect(priceTextElement).toBeTruthy();
  });

  it('should display the button to add to cart', () => {
    const {getByTestId} = render(<PriceSection item={item} />);
    expect(getByTestId('PriceSection-btn')).toBeTruthy();
  });

  it('button should have the text', () => {
    const {getByText} = render(<PriceSection item={item} />);
    expect(getByText('Add To Cart')).toBeTruthy();
  });
});

describe('Price Section functionality', () => {
  it('should add the item to cart when clicked', () => {
    jest.spyOn(Alert, 'alert');
    //    const hadleAddToCart=jest.fn();
    const mockValues = {
      cartProducts: [],
      addProductToCart: jest.fn(),
      removeProductFromCart: id => {},
      updateProductInCart: (id, quantity) => {},
      clearCart: () => {},
    };

    const {getByText} = render(
      <CartContext.Provider value={mockValues}>
        <PriceSection item={item} />
      </CartContext.Provider>,
    );
    const buttonElement = getByText('Add To Cart');
    fireEvent.press(buttonElement);
    expect(mockValues.addProductToCart).toBeCalled();
    expect(Alert.alert).toBeCalled();
  });
});
