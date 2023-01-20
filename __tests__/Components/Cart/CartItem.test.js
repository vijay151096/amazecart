import {fireEvent, render, waitFor} from '@testing-library/react-native';
import CartItem from '../../../Components/Cart/CartItem';

const sampleItem = describe('Cart Item Layout Test Suite', function () {
  it('should have 3 sections in the cart Item ', function () {
    const wrapper = render(<CartItem item={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartItem-outer`);
    expect(outerCont).toBeTruthy();
    expect(outerCont.children.length).toBe(3);
  });

  it('should have image in the cart Item ', function () {
    const wrapper = render(<CartItem item={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartItem-image`);
    expect(outerCont).toBeTruthy();
  });

  it('should have details in the cart Item ', function () {
    const wrapper = render(<CartItem item={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartItem-desc`);
    expect(outerCont).toBeTruthy();
  });

  it('should have quantity modifier in the cart Item ', function () {
    const wrapper = render(<CartItem item={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartItem-quantity`);
    expect(outerCont).toBeTruthy();
    expect(outerCont.children.length).toBe(3);
  });
  it('should have quantity modifier to increase quantity in the cart Item ', function () {
    const wrapper = render(<CartItem item={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartItem-quantity-increase`);
    expect(outerCont).toBeTruthy();
  });
  it('should have quantity modifier to decrease quantity in the cart Item ', function () {
    const wrapper = render(<CartItem item={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartItem-quantity-decrease`);
    expect(outerCont).toBeTruthy();
  });
});

describe('Cart Item Functionality', function () {
  it('should have quantity modifier to increase quantity in the cart Item ', function () {
    const wrapper = render(<CartItem item={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartItem-quantity-increase`);
    const quantityCont = wrapper.getByTestId(`CartItem-quantity`);
    fireEvent.press(outerCont);
    waitFor(() => expect(quantityCont).toHaveTextContent('1'));
  });

  it('should have quantity modifier to increase quantity in the cart Item ', function () {
    const wrapper = render(<CartItem item={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartItem-quantity-decrease`);
    const quantityCont = wrapper.getByTestId(`CartItem-quantity`);
    fireEvent.press(outerCont);
    waitFor(() => expect(quantityCont).toHaveTextContent('0'));
  });
});
