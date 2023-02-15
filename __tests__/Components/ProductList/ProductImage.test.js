import {render} from '@testing-library/react-native';
import ProductImage from '../../../Components/ProductList/ProductImage';
import Config from 'react-native-config';

describe('Product Image Layout', function () {
  const {FAKE_STORE_URL} = Config;
  it('should display Image', function () {
    const wrapper = render(
      <ProductImage
        image={`${FAKE_STORE_URL}/img/81fPKd-2AYL._AC_SL1500_.jpg`}
      />,
    );
    const image = wrapper.getByTestId('ProductImage-Image');
    expect(image).toBeTruthy();
  });
});
