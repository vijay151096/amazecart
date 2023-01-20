import {render, waitFor} from '@testing-library/react-native';
import EmptyCartContent from '../../../Components/Cart/EmptyCartContent';

describe('Empty Cart Container Layout Test Suite', function () {
  it('should Have Two Component as Child', function () {
    const wrapper = render(<EmptyCartContent />);
    const outerCont = wrapper.getByTestId(`EmptyCartContainer-EmptyPage`);
    expect(outerCont).toBeTruthy();
    expect(outerCont.children.length).toBe(2);
  });
  it('should Show Carts Empty Text', function () {
    const wrapper = render(<EmptyCartContent />);
    const outerCont = wrapper.getByTestId(`EmptyCartContainer-EmptyText`);
    expect(outerCont).toBeTruthy();
    waitFor(() => expect(outerCont).toHaveTextContent('Cart is Empty'));
  });
});
