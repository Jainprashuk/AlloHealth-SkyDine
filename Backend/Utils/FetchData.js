import fs from 'fs/promises';
import path from 'path';

const FetchDataFromJson = async () => {
  try {
    const filePath = path.join(process.cwd(), 'Assets', 'Data.json');
    console.log('Reading file from:', filePath);  // Log the file path
    const jsondata = await fs.readFile(filePath, 'utf-8');
    return jsondata;
  } catch (error) {
    console.log("Error while fetching data:", error);
    throw error;  // Re-throw the error to be handled by the caller
  }
};

export { FetchDataFromJson };
