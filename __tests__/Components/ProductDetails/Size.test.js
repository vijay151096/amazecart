import {render} from '@testing-library/react-native';
import Size from '../../../Components/ProductDetails/Size';

describe('Size Component Layout', () => {
  it('main container should have 5 children', () => {
    const {getByTestId} = render(<Size />);
    expect(getByTestId('Size-mainContainer').children.length).toBe(5);
  });
  it('should have the text for sizes', () => {
    const {getByText} = render(<Size />);
    expect(getByText('Size :')).toBeTruthy();
  });
});
