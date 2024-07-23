
import styles from './produkt.module.css'

interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ProductCardProps {
  product: IProduct;
}

function ProductCard({ product }: ProductCardProps) {
  return (
    <div className={styles.card} key={product.id}>
      <div className={styles.namecard}>
        <h4>{product.title}</h4>
      </div>
      <img src={product.image} alt={product.title} />
      <div className={styles.price}>{product.price} tugriks</div>
    </div>
  );
}

export default ProductCard;
