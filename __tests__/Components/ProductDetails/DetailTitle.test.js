import {render} from '@testing-library/react-native';
import DetailTitle from '../../../Components/ProductDetails/DetailTitle';
import {getSampleItem} from '../../Utility/Util';

const item = getSampleItem();

describe('detail title layout', () => {
  it('main container should have 2 children', () => {
    const {getByTestId} = render(<DetailTitle props={{...item}} />);
    expect(getByTestId('DetailTitle-mainContainer').children.length).toBe(2);
  });

  it('inner container should have 2 children', () => {
    const {getByTestId} = render(<DetailTitle props={{...item}} />);
    expect(getByTestId('DetailTitle-innerContainer').children.length).toBe(2);
  });

  it('should have title when rendered', () => {
    const {getByTestId} = render(<DetailTitle props={{...item}} />);
    expect(getByTestId('DetailTitle-title')).toBeTruthy();
  });

  it('should have rating text when rendered', () => {
    const {getByTestId} = render(<DetailTitle props={{...item}} />);
    expect(getByTestId('DetailTitle-rating')).toBeTruthy();
  });

  it('should have description text when rendered', () => {
    const {getByTestId} = render(<DetailTitle props={{...item}} />);
    expect(getByTestId('DetailTitle-description')).toBeTruthy();
  });
});
