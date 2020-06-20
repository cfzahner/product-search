export const getAllProducts = async () => {
  const resp = await fetch("http://localhost:3001/api/products/products");
  return resp.json();
};

/**
 * Authorizes user using credentials passed in.
 * @param {Object} authDeets
 */
export const authenticateUser = async (authDeets) => {
  // TODO: Return the responses authorization code (200, etc.)
  const resp = await fetch("", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: JSON.stringify(authDeets),
  });
};
