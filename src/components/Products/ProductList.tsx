import type { Product } from "./types/Product";
import { ProductCard } from "./ProductCard";
interface ProductListProps {
  products: Product[];
}

export const ProductList = ({ products }: ProductListProps) => {
  return (
    <>
      <ul>
        {products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </ul>
    </>
  );
};
