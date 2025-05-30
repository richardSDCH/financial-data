// updateDates.mjs or use .js if type: "module" is set
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Get today's and yesterday's dates
const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(today.getDate() - 1);

const formatDate = (date) => date.toISOString().split('T')[0];

const todayStr = formatDate(today);
const yesterdayStr = formatDate(yesterday);

// Get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputPath = path.join(__dirname, 'manualDailyData.json');
const outputPath = path.join(__dirname, 'updated_manualDailyData.json');

try {
  const data = await fs.readFile(inputPath, 'utf-8');
  const json = JSON.parse(data);

  for (const key in json) {
    json[key] = [
      { date: yesterdayStr, value: json[key][0].value },
      { date: todayStr, value: json[key][1].value }
    ];
  }

  await fs.writeFile(outputPath, JSON.stringify(json, null, 2));
  console.log(`Updated file saved to ${outputPath}`);
} catch (err) {
  console.error('Error:', err);
}

