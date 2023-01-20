import {fireEvent, render, waitFor} from '@testing-library/react-native';
import Filter from '../../../Components/ProductList/Filter';
import {ProductContext} from '../../../Store/ProductContextProvider';

describe('Filter Layout Test Suite', function () {
  it('should Display the Filter Outer Container', function () {
    const wrapper = render(<Filter items={sampleCategory} />);
    const filterOuterContainer = wrapper.getByTestId('Filter-mainContainer');
    expect(filterOuterContainer).toBeTruthy();
  });

  it('should Display the Filter with categories', function () {
    const wrapper = render(<Filter items={sampleCategory} />);
    const filterContainer = wrapper.getAllByTestId('Filter-category');
    expect(filterContainer).toBeTruthy();
    expect(filterContainer.length).toBe(2);
  });
});

describe('Filter Functionality Test Suite', function () {
  it('should Display the Products on same Category when a category is pressed', function () {
    const mockValues = {
      products: [],
      initializeProducts: jest.fn(),
      getProduct: jest.fn(),
      getFilteredProducts: jest.fn(),
    };
    const wrapper = render(
      <ProductContext.Provider value={mockValues}>
        <Filter items={sampleCategory} />
      </ProductContext.Provider>,
    );
    const filterContainer = wrapper.getAllByTestId('Filter-category')[0];
    expect(filterContainer).toBeTruthy();

    fireEvent.press(filterContainer);
    waitFor(() => expect(mockValues.getFilteredProducts).toBeCalled());
  });

  it('should Display the All The Products when the page is loaded.', function () {
    const mockValues = {
      products: [],
      initializeProducts: jest.fn(),
      getProduct: jest.fn(),
      getFilteredProducts: jest.fn(),
    };
    const wrapper = render(
      <ProductContext.Provider value={mockValues}>
        <Filter items={sampleCategory} />
      </ProductContext.Provider>,
    );
    const filterContainer = wrapper.getAllByTestId('Filter-category')[0];
    expect(filterContainer).toBeTruthy();

    waitFor(() => expect(mockValues.initializeProducts).toBeCalled());
  });

  it('should Display the Products on same Category when a category is pressed', function () {
    const mockValues = {
      products: [],
      initializeProducts: jest.fn(),
      getProduct: jest.fn(),
      getFilteredProducts: jest.fn(),
    };
    const wrapper = render(
      <ProductContext.Provider value={mockValues}>
        <Filter items={sampleCategory} />
      </ProductContext.Provider>,
    );
    const filterContainer = wrapper.getAllByTestId('Filter-category')[0];
    expect(filterContainer).toBeTruthy();

    fireEvent.press(filterContainer);
    fireEvent.press(filterContainer);
    waitFor(() => expect(mockValues.initializeProducts).toBeCalledTimes(2));
  });
});

const sampleCategory = ["Men's Clothing", "Women's Clothing"];
