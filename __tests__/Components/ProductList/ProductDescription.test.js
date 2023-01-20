import {render} from '@testing-library/react-native';
import ProductDescription from '../../../Components/ProductList/ProductDescription';
import {getSampleItem} from '../../Utility/Util';

const sampleItem = getSampleItem();
describe('Product Description Layout Test Suite', function () {
  it('should show Item Price ', function () {
    const wrapper = render(<ProductDescription item={sampleItem} />);
    const priceContainer = wrapper.getByText(`$ ${sampleItem.price}`);
    expect(priceContainer).toBeTruthy();
  });
  it('should show Item Title ', function () {
    const wrapper = render(<ProductDescription item={sampleItem} />);
    const titleContainer = wrapper.getByText(`${sampleItem.title}`);
    expect(titleContainer).toBeTruthy();
  });
});
