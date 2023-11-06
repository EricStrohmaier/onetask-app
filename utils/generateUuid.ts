import { v4 as uuidv4 } from 'uuid';

const generateUniqueId = () => {
  // Generate a random UUID (v4) and return it as the project ID
  return uuidv4();
};

export default generateUniqueId;
