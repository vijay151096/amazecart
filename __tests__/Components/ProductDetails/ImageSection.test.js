import {render} from '@testing-library/react-native';
import ImageSection from '../../../Components/ProductDetails/ImageSection';
import {getSampleItem} from '../../Utility/Util';

const {image} = getSampleItem();

describe('ImageSection layout', () => {
  it('should have the container to place the promotion label', () => {
    const {getByTestId} = render(<ImageSection image={image} />);
    expect(getByTestId('ImageSection-promotionContainer')).toBeTruthy();
    expect(getByTestId('ImageSection-promotionContainer').children.length).toBe(
      1,
    );
  });

  it('should have the container to place the image', () => {
    const {getByTestId} = render(<ImageSection image={image} />);
    expect(getByTestId('ImageSection-imageContainer')).toBeTruthy();
    expect(getByTestId('ImageSection-imageContainer').children.length).toBe(1);
  });
});
