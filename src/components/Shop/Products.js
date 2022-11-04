import ProductItem from './ProductItem';
import classes from './Products.module.css';

const DUMMY_PRODUTS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: " This is my first book I`ve ever wrote!",
  },
  {
    id: 'p2',
    price: 5,
    title: 'My Second Book',
    description: " This is my second book I`ve ever wrote!",
  },
  {
    id: 'p3',
    price: 19,
    title: 'My Third Book',
    description: " This is my third book I`ve ever wrote!",
  },
  {
    id: 'p4',
    price: 7,
    title: 'My Fourth Book',
    description: " This is my fourth book I`ve ever wrote!",
  },
];


const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {DUMMY_PRODUTS.map(product => <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
        />)}
      </ul>
    </section>
  );
};

export default Products;
