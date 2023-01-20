import {render} from '@testing-library/react-native';
import ProductList from '../../../Components/ProductList/ProductList';
import {getSampleItem} from '../../Utility/Util';

const sampleItem = getSampleItem();
describe('Product List Layout Test Suite', function () {
  it('should show the Products list Conatiner', function () {
    const wrapper = render(<ProductList item={[sampleItem]} />);
    const listContainer = wrapper.getByTestId('ProductList-outer');
    expect(listContainer).toBeTruthy();
  });

  it('should show the Products list Items', function () {
    const wrapper = render(<ProductList item={[sampleItem]} />);
    const listContainer = wrapper.getByTestId('ProductList-outer');
    expect(listContainer).toBeTruthy();

    expect(listContainer.children.length).toBe(1);
  });
});
