import { ProductList } from "./ProductList";

export const ProductsContainer = () => {
  const products = [
    {
      id: "1",
      title: "laptop",
      price: 1000,
      inStock: true,
    },
    {
      id: "2",
      title: "mobile",
      price: 500,
      inStock: true,
    },
    {
      id: "3",
      title: "Android Phone",
      price: 290,
      inStock: false,
    },
  ];

  return (
    <>
      <div>Products Container</div>
      <ProductList products={products} />
    </>
  );
};
