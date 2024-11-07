import React, { Component } from 'react';
import Layout from '../../../common/Layout';

// Sample product data
const productsData = [
  { id: 1, name: 'PSD Book Mockup', category: 'Medical Equipment', price: 53.56, oldPrice: 73.56, discount: '25% off', image: 'assets/images/pdf1.jpg' },
  { id: 2, name: 'PSD Book Cover', category: 'Web Development', price: 53.56, oldPrice: null, discount: null, image: 'assets/images/pdf1.jpg' },
  { id: 3, name: 'PSD Book Mockup', category: 'SEO Optimization', price: 53.56, oldPrice: null, discount: null, image: 'assets/images/pdf1.jpg' },
  { id: 4, name: 'UI/UX Design', category: 'UX/UI Strategy', price: 65.00, oldPrice: 80.00, discount: '18% off', image: 'assets/images/pdf1.jpg' },
  { id: 5, name: 'Business Strategies', category: 'Business Strategy', price: 45.00, oldPrice: 60.00, discount: '25% off', image: 'assets/images/pdf1.jpg' }
];

// Sample categories
const categories = [
  { name: 'All', count: 0 },
  { name: 'Medical Equipment', count: 2 },
  { name: 'Web Development', count: 1 },
  { name: 'UX/UI Strategy', count: 1 },
  { name: 'SEO Optimization', count: 1 },
  { name: 'Business Strategy', count: 1 },
];

// Sale products
const saleProducts = [
  { name: 'Historical Store Book', author: 'David Malenga', image: 'assets/images/books.jpg' },
  { name: 'Historical Store Book', author: 'David Malenga', image: 'assets/images/books.jpg'},
  { name: 'Historical Store Book', author: 'David Malenga', image: 'assets/images/books.jpg' },
];

class EcommercePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filteredProducts: productsData,
      selectedCategory: 'All',
      priceRange: 100,
      sortOption: 'latest',
      cart: [],
      currentPage: 1,
      itemsPerPage: 3,
    };
  }

  // Filter products by category
  filterByCategory = (category) => {
    this.setState({ selectedCategory: category }, () => {
      if (category === 'All') {
        this.setState({ filteredProducts: productsData });
      } else {
        this.setState({ filteredProducts: productsData.filter((product) => product.category === category) });
      }
    });
  };

  // Filter products by price range
  filterByPrice = (price) => {
    this.setState({ priceRange: price }, () => {
      const filtered = productsData.filter((product) => product.price <= price);
      this.setState({ filteredProducts: filtered });
    });
  };

  // Sort products
  sortProducts = (option) => {
    this.setState({ sortOption: option }, () => {
      let sortedProducts = [...this.state.filteredProducts];
      if (option === 'lowest-price') {
        sortedProducts.sort((a, b) => a.price - b.price);
      } else if (option === 'highest-price') {
        sortedProducts.sort((a, b) => b.price - a.price);
      }
      this.setState({ filteredProducts: sortedProducts });
    });
  };

  // Add product to cart
  addToCart = (product) => {
    this.setState((prevState) => ({ cart: [...prevState.cart, product] }));
  };

  // Pagination
  paginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  render() {
    const { filteredProducts, selectedCategory, priceRange, sortOption, currentPage, itemsPerPage } = this.state;
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

    return (
     <Layout>
       <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap -mx-4">
          {/* Left side - Filter options */}
          <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
            {/* Category Filter */}
            <div className="bg-gray-100 p-6 rounded-lg">
              <h5 className="text-lg font-bold mb-4">Category</h5>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className={`cursor-pointer flex justify-between items-center ${selectedCategory === category.name ? 'font-bold' : ''}`}
                    onClick={() => this.filterByCategory(category.name)}
                  >
                    {category.name}
                    <span className="text-sm text-gray-600">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Sale Products */}
            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h5 className="text-lg font-bold mb-4">Sale Products</h5>
              <ul className="space-y-4">
                {saleProducts.map((product, index) => (
                  <li key={index} className="flex items-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-md mr-4"
                    />
                    <div>
                      <h6 className="font-medium">{product.name}</h6>
                      <p className="text-sm text-gray-600">By {product.author}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Filter by Price */}
            <div className="bg-gray-100 p-6 rounded-lg mt-8">
              <h5 className="text-lg font-bold mb-4">Filter By Price</h5>
              <p className="text-sm mb-2">${priceRange}</p>
              <input
                type="range"
                min="5"
                max="100"
                value={priceRange}
                onChange={(e) => this.filterByPrice(e.target.value)}
                className="w-full"
              />
            </div>
          </div>

          {/* Right side - Product List */}
          <div className="w-full md:w-3/4 px-4">
            <div className="flex justify-between items-center mb-4">
              <h5 className="text-lg font-bold">
                Showing {filteredProducts.length} of {productsData.length} Books
              </h5>
              <select
                value={sortOption}
                onChange={(e) => this.sortProducts(e.target.value)}
                className="border border-gray-800 rounded px-6 py-2" 
                style={{color:'#000'}}
              >
                <option value="latest">Latest</option>
                <option value="lowest-price">Lowest Price</option>
                <option value="highest-price">Highest Price</option>
              </select>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentProducts.map((product) => (
                <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                  <div className="mt-4">
                    <h6 className="text-lg font-semibold">{product.name}</h6>
                    <p className="text-gray-600 text-sm">{product.category}</p>
                    <div className="flex justify-between items-center mt-2">
                      <p className="text-green-600 font-bold">${product.price.toFixed(2)}</p>
                      {product.oldPrice && (
                        <p className="text-gray-500 text-sm line-through">${product.oldPrice.toFixed(2)}</p>
                      )}
                    </div>
                    {product.discount && (
                      <span className="inline-block bg-blue-600 text-white text-xs px-2 py-1 rounded mt-2">
                        {product.discount}
                      </span>
                    )}
                  </div>
                  <button
                    className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                    onClick={() => this.addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-8">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
                  onClick={() => this.paginate(index + 1)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
      
    );
  }
}

export default EcommercePage;
