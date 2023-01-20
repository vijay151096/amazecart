import {render} from '@testing-library/react-native';
import SizeBox from '../../../Components/ProductDetails/SizeBox';

describe('Size Box Layout', () => {
  it('should have the text that is passed', () => {
    const {getByText} = render(<SizeBox>Hello</SizeBox>);
    expect(getByText('Hello')).toBeTruthy();
  });
});
