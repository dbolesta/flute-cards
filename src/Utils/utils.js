// create random key for lists
// PROBABLY SHOULD NOT USE, CREATING DUPLICATE IDS
export const generateKey = pre => {
  return `${pre}_${new Date().getTime()}`;
};
