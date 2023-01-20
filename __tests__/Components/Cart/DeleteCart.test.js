import {fireEvent, render} from '@testing-library/react-native';
import EmptyCartContent from '../../../Components/Cart/EmptyCartContent';
import DeleteCart from '../../../Components/Cart/DeleteCart';
import {CartContext} from '../../../Store/CartContextProvider';

describe('Delete Cart Layout Test Suite', function () {
  it('should Have Delete Icon ', function () {
    const wrapper = render(<DeleteCart />);
    const outerCont = wrapper.getByTestId(`DeleteCart-deleteIcon`);
    expect(outerCont).toBeTruthy();
  });
  it('should Have Delete Icon and call clear Cart when it is presssed', function () {
    const mockValues = {
      cartProducts: [],
      addProductToCart: jest.fn(),
      removeProductFromCart: jest.fn(),
      updateProductInCart: jest.fn(),
      clearCart: jest.fn(),
    };
    const wrapper = render(
      <CartContext.Provider value={mockValues}>
        <DeleteCart />
      </CartContext.Provider>,
    );
    const outerCont = wrapper.getByTestId(`DeleteCart-deleteIcon`);
    fireEvent.press(outerCont);

    expect(mockValues.clearCart).toBeCalled();
  });
});
