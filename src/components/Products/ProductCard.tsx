import type { Product } from "./types/Product";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <>
      <article>
        <h2>{product.title}</h2>
        <p>Price: ${product.price}</p>
        <p>{product.inStock ? "Available" : "Out of stoke"}</p>
      </article>
    </>
  );
};
