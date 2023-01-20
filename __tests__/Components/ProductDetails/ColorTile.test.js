import {render} from '@testing-library/react-native';
import ColorTile from '../../../Components/ProductDetails/ColorTile';

describe('layout of colortile component', () => {
  it('should have the outer ring', () => {
    const wrapper = render(<ColorTile />);
    expect(wrapper.getByTestId('ColorTile-outerRing')).toBeTruthy();
  });
  it('should have the inner ring', () => {
    const wrapper = render(<ColorTile />);
    expect(wrapper.getByTestId('ColorTile-innerRing')).toBeTruthy();
  });
});
