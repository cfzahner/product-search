export const getAllProducts = async () => {
  const resp = await fetch("http://localhost:80/api/products/products");
  return resp.json();
};
