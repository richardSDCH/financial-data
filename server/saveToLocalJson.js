// saveToLocalJson.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// This is necessary to get __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const FILE_PATH = path.join(__dirname, "dailyData.json");

const saveToLocalJson = (symbol, newEntry) => {
  let data = {};

  if (fs.existsSync(FILE_PATH)) {
    const raw = fs.readFileSync(FILE_PATH);
    data = JSON.parse(raw);
  }

  if (!data[symbol]) {
    data[symbol] = [];
  }

  const dateExists = data[symbol].some(entry => entry.date === newEntry.date);
  if (!dateExists) {
    data[symbol].push(newEntry);
  }

  fs.writeFileSync(FILE_PATH, JSON.stringify(data, null, 2));
};

export default saveToLocalJson;

