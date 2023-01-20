import {render} from '@testing-library/react-native';
import CartItem from '../../../Components/Cart/CartItem';
import {getSampleItem} from '../../Utility/Util';
import CartList from '../../../Components/Cart/CartList';

const sampleItem = getSampleItem();
describe('Cart List Layout Test Suite', function () {
  it('should Check if we have one Element in the List', function () {
    const wrapper = render(<CartList cartProducts={[sampleItem]} />);
    const outerCont = wrapper.getAllByTestId(`CartItem-outer`);
    expect(outerCont).toBeTruthy();
    expect(outerCont.length).toBe(1);
  });
  it('should Check if we have 2 Element in the List', function () {
    const wrapper = render(
      <CartList cartProducts={[sampleItem, {...sampleItem, id: 2}]} />,
    );
    const outerCont = wrapper.getAllByTestId(`CartItem-outer`);
    expect(outerCont).toBeTruthy();
    expect(outerCont.length).toBe(2);
  });
});
