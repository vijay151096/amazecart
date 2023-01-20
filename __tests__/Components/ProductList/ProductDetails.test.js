import {render} from '@testing-library/react-native';
import ProductDetails from '../../../Components/ProductList/ProductDetails';
import {getSampleItem} from '../../Utility/Util';

const sampleItem = getSampleItem();
describe('Product Details Layout Test Suite', function () {
  it('should show Star Rating ', function () {
    const wrapper = render(<ProductDetails item={sampleItem} />);
    const starRatings = wrapper.getByTestId('ProductDetails-ratingContainer');
    expect(starRatings).toBeTruthy();
    expect(starRatings.children.length).toBe(2);
  });
  it('should show Rating numbers', function () {
    const wrapper = render(<ProductDetails item={sampleItem} />);
    const priceContainer = wrapper.getByText(`(${sampleItem.rating.rate})`);
    expect(priceContainer).toBeTruthy();
  });
});
