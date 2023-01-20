import FavoriteBar from '../../../Components/ProductList/FavoriteBar';
import {fireEvent, render, waitFor} from '@testing-library/react-native';
import FavoriteContextProvider, {
  FavoriteContext,
} from '../../../Store/FavoriteContextProvider';
import Util from '../../Utility/Util';

const sampleItem = Util.getSampleItem();
describe('Favourite Bar Layout Test Suite', function () {
  it('should show heart Icon', function () {
    const wrapper = render(<FavoriteBar item={sampleItem} />);
    const heartIconView = wrapper.getByTestId('FavoriteBar-heartIcon');
    expect(heartIconView).toBeTruthy();
  });

  it('should show heart filled Icon when the item is favorite', function () {
    const wrapper = render(
      <FavoriteContext.Provider
        value={{
          favoriteProducts: [1],
          addProductToFavorite: jest.fn(),
          removeProductFromFavorite: jest.fn(),
        }}>
        <FavoriteBar item={sampleItem} />
      </FavoriteContext.Provider>,
    );
    const heartIconView = wrapper.getByTestId('FavoriteBar-heartIcon-pressed');
    expect(heartIconView).toBeTruthy();
  });
  it('should show heart filled Icon when the item is favorite', function () {
    const wrapper = render(
      <FavoriteContextProvider>
        <FavoriteBar item={sampleItem} />
      </FavoriteContextProvider>,
    );
    const heartIconView = wrapper.getByTestId(
      'FavoriteBar-heartIcon-unpressed',
    );
    expect(heartIconView).toBeTruthy();
  });
});
describe('Favourite Bar Functionality ', function () {
  it('should show filled heart Icon when empty heart icon is pressed', function () {
    const wrapper = render(
      <FavoriteContextProvider>
        <FavoriteBar item={sampleItem} />
      </FavoriteContextProvider>,
    );
    const unPressedHeartIcon = wrapper.getByTestId(
      'FavoriteBar-heartIcon-unpressed',
    );
    expect(unPressedHeartIcon).toBeTruthy();
    fireEvent.press(unPressedHeartIcon);
    const pressedHeartIcon = wrapper.getByTestId(
      'FavoriteBar-heartIcon-pressed',
    );
    waitFor(() => expect(pressedHeartIcon).toBeTruthy());
  });

  it('should show empty heart Icon when filled heart icon is pressed', function () {
    const wrapper = render(
      <FavoriteContext.Provider
        value={{
          favoriteProducts: [1],
          addProductToFavorite: jest.fn(),
          removeProductFromFavorite: jest.fn(),
        }}>
        <FavoriteBar item={sampleItem} />
      </FavoriteContext.Provider>,
    );

    const pressedHeartIcon = wrapper.getByTestId(
      'FavoriteBar-heartIcon-pressed',
    );
    expect(pressedHeartIcon).toBeTruthy();
    fireEvent.press(pressedHeartIcon);
    const unPressedHeartIcon = wrapper.getByTestId(
      'FavoriteBar-heartIcon-unpressed',
    );
    waitFor(() => expect(unPressedHeartIcon).toBeTruthy());
  });
});
