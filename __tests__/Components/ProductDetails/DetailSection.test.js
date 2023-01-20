import {render} from '@testing-library/react-native';
import DetailSection from '../../../Components/ProductDetails/DetailSection';
import {getSampleItem} from '../../Utility/Util';

const item = getSampleItem();

describe('Layout of detail section', () => {
  it('main container should have 3 children', () => {
    const wrapper = render(<DetailSection item={item} />);
    expect(
      wrapper.getByTestId('DetailSection-mainContainer').children.length,
    ).toBe(3);
  });
});
