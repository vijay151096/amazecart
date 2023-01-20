import {fireEvent, render, waitFor} from '@testing-library/react-native';
import CartPrice from '../../../Components/Cart/CartPrice';
import {getSampleItem} from '../../Utility/Util';
import {Alert} from 'react-native';

const sampleItem = [getSampleItem()];

describe('Cart Price Functionality test Suite', function () {
  it('should Have Cart price as cummulative price ', function () {
    const wrapper = render(<CartPrice cartProds={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartPrice-price`);
    waitFor(() => expect(outerCont).toHaveTextContent(`$${sampleItem.price}`));
  });

  it('When Checked Out, Alert must be shown ', function () {
    jest.spyOn(Alert, 'alert');
    const wrapper = render(<CartPrice cartProds={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartPrice-checkout`);
    fireEvent.press(outerCont);
    waitFor(() => expect(Alert.alert).toBeCalled());
  });
});

describe('Cart Price layout test Suite', function () {
  it('should Have Cart price Outer Container ', function () {
    const wrapper = render(<CartPrice cartProds={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartPrice-outer`);
    expect(outerCont).toBeTruthy();
  });
  it('should Have Cart price Dollar Sign ', function () {
    const wrapper = render(<CartPrice cartProds={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartPrice-dollar`);
    expect(outerCont).toBeTruthy();
  });
  it('should Have Cart price ', function () {
    const wrapper = render(<CartPrice cartProds={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartPrice-price`);
    expect(outerCont).toBeTruthy();
  });
  it('should Have Cart price  Checkout Button', function () {
    const wrapper = render(<CartPrice cartProds={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartPrice-checkout`);
    expect(outerCont).toBeTruthy();
  });
  it('should Have Checkout Button with Text as Checkout', function () {
    const wrapper = render(<CartPrice cartProds={sampleItem} />);
    const outerCont = wrapper.getByTestId(`CartPrice-checkout-text`);
    expect(outerCont).toHaveTextContent('Checkout');
  });
});
