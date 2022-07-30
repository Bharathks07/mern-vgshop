import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Bharath',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456789'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456789'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Nike Slim Shirt',
      slug: 'nike-slim-shirt',
      category: 'Shirts',
      image: '/images/p1.jpg', //679px * 829px
      price: 120,
      countInStock: 10,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 10,
      description: 'high quality shirt',
    },
    {
      // _id: '2',
      name: 'Nike Slim Pant',
      slug: 'nike-slim-pant',
      category: 'Pants',
      image: '/images/p2.jpg',
      price: 110,
      countInStock: 12,
      brand: 'Nike',
      rating: 5.0,
      numReviews: 5,
      description: 'high quality pant',
    },
    {
      // _id: '3',
      name: 'Adidas Shirt',
      slug: 'adidas-shirt',
      category: 'Shirts',
      image: '/images/p3.jpg',
      price: 100,
      countInStock: 0,
      brand: 'Adidas',
      rating: 4.8,
      numReviews: 2,
      description: 'high quality shirt',
    },
    {
      // _id: '4',
      name: 'Adidas Pant',
      slug: 'adidas-pant',
      category: 'Pants',
      image: '/images/p4.jpg',
      price: 130,
      countInStock: 5,
      brand: 'Adidas',
      rating: 4.9,
      numReviews: 10,
      description: 'high quality pant',
    },
  ],
};

export default data;
