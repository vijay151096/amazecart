import {render} from '@testing-library/react-native';
import ProductImage from '../../../Components/ProductList/ProductImage';

describe('Product Image Layout', function () {
  it('should display Image', function () {
    const wrapper = render(
      <ProductImage
        image={'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'}
      />,
    );
    const image = wrapper.getByTestId('ProductImage-Image');
    expect(image).toBeTruthy();
  });
});
