import {render} from '@testing-library/react-native';
import Favorites from '../Screens/Favorites';

describe('favorite Block', function () {
  it('should Return True', function () {
    const wrapper = render(<Favorites />);
    const favNode = wrapper.queryByText('Hello from Text');
    expect(favNode).toBeDefined();
  });
});
