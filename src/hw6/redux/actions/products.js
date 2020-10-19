
export const INIT = 'INIT';

export const init = products => ({
  type: INIT,
  payload: {
    products
  }
});