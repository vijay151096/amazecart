import {render} from '@testing-library/react-native';
import Color from '../../../Components/ProductDetails/Color';

describe('Color Component Layout', () => {
  it('should render text beside the colors', () => {
    const wrapper = render(<Color />);
    const textElement = wrapper.getByText('Available Color : ');
    expect(textElement).toBeTruthy();
  });
  it('main container should have 5 children', () => {
    const wrapper = render(<Color />);
    expect(wrapper.getByTestId('Color-mainContainer').children.length).toBe(5);
  });
});
