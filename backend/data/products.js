

// ithuvar frontend root la nama vachuruntha "product.js " file la irunthu datava get pannom 

// inimel backend la irukka , data folder la irukka intha "products.js " file la irunthu get panna porom.. ithu ennoda mock data..


// ippo intha data va apipath create panni fetch panna porom..

const products = [
    {
      // removed id , mongodb will generate id while seed..
      name: 'Modern Leather Sofa',
      image: '/images/sofa.jpeg',
      description:
        'Upgrade your living room with this sleek and comfortable modern leather sofa. Perfect for relaxation and entertainment.',
      brand: 'Furniture World',
      category: 'Furniture',
      price: 899.99,
      countInStock: 15,
      rating: 4.4,
      numReviews: 10,
    },
    {
      // removed id , mongodb will generate id while seed..
      name: 'Wooden Dining Table Set',
      image: '/images/wooden-dining.jpeg',
      description:
        'Gather your family and friends around this elegant wooden dining table set. Crafted with high-quality materials for durability and style.',
      brand: 'Home Harmony',
      category: 'Furniture',
      price: 549.99,
      countInStock: 8,
      rating: 3.6,
      numReviews: 6,
    },
    {
      // removed id , mongodb will generate id while seed..
      name: 'Vintage Bookshelf',
      image: '/images/vintage-bookshelf.jpeg',
      description:
        'Add a touch of nostalgia to your home with this vintage bookshelf. Ample storage space for books, decor, and more.',
      brand: 'Antique Designs',
      category: 'Furniture',
      price: 349.99,
      countInStock: 0,
      rating: 2.2,
      numReviews: 8,
    },
    {
      // removed id , mongodb will generate id while seed..
      name: 'Contemporary Coffee Table',
      image: '/images/coffee-table.jpeg',
      description:
        'Enhance your living space with this stylish contemporary coffee table. Features a minimalist design with a functional storage shelf.',
      brand: 'Modern Living',
      category: 'Furniture',
      price: 199.99,
      countInStock: 0,
      rating: 3.2,
      numReviews: 15,
    },
    {
      // removed id , mongodb will generate id while seed..
      name: 'Comfortable Recliner Chair',
      image: '/images/recliner-chair.jpeg',
      description:
        'Relax in ultimate comfort with this plush recliner chair. Perfect for lounging after a long day.',
      brand: 'Cozy Home',
      category: 'Furniture',
      price: 299.99,
      countInStock: 6,
      rating: 4.0,
      numReviews: 4,
    },
    {
      // removed id , mongodb will generate id while seed..
      name: 'Rustic Bedroom Dresser',
      image: '/images/bedroom-dresser.jpeg',
      description:
        'Complete your bedroom decor with this charming rustic dresser. Ample storage space for clothing and accessories.',
      brand: 'Country Living',
      category: 'Furniture',
      price: 449.99,
      countInStock: 10,
      rating: 1.77,
      numReviews: 2,
    },
  ];
  
  export default products;