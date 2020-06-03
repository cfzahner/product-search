export const getAllProducts = async () => {
  const resp = await fetch(
    "https://my-json-server.typicode.com/Claim-Academy-JS/products/products"
  );
  return resp.json();
};
