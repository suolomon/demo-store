import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
        name: 'John',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: true,
    },
    {
        name: 'Jane',
        email: 'user@example.com',
        password: bcrypt.hashSync('123456'),
        isAdmin: false,
    }
],
    products: [
        {
            name: 'Chocolate',
            slug: 'chocolate',
            category: 'snacks',
            image: '/images/cadbury.jpg',
            price: 8000,
            brand: 'Cadbury',
            rating: 5,
            numReviews: 3,
            countInStock: 20,
            description: 'Milky and creamy chocolate with delicious taste'
        },
        {
            name: 'bread',
            slug: 'bread',
            category: 'confectionaries',
            image: '/images/bread.png',
            price: 5000,
            brand: 'Bakery',
            rating: 5,
            numReviews: 3,
            countInStock: 20,
            description: 'Fresh and moist with delicious taste'
        },
        {
            name: 'Four Cousins white',
            slug: 'four-cousins-white',
            category: 'Wines',
            image: '/images/4cousins.png',
            price: 12000,
            brand: 'Four Cousins',
            rating: 5,
            numReviews: 3,
            countInStock: 20,
            description: 'smooth and light with delicious taste'
        },
        {
            name: 'Green apples',
            slug: 'green-apples',
            category: 'fruits',
            image: '/images/greenapple.png',
            price: 1000,
            brand: 'Apple stores',
            rating: 5,
            numReviews: 3,
            countInStock: 20,
            description: 'Crunchy and juicy with delicious taste'
        },
        {
            name: 'Minute Maid Orange',
            slug: 'minute-maid-organe',
            category: 'soft drinks',
            image: '/images/minute_maid-org.png',
            price: 1500,
            brand: 'Coca Cola',
            rating: 5,
            numReviews: 3,
            countInStock: 20,
            description: 'Thick and statisfying with delicious taste'
        }
    ]
}

export default data