export const getAllProducts = async () => {
  const resp = await fetch("http://localhost:3001/api/products");
  return resp.json();
};
