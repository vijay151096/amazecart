import {render} from '@testing-library/react-native';
import ProductImage from '../../../Components/ProductList/ProductImage';
import {FAKE_STORE_URL} from '@env';

describe('Product Image Layout', function () {
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
