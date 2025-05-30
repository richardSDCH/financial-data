// fetchApiData.js
export async function fetchLocalApiDailyData() {
  const res = await fetch("/dailyData.json");
  if (!res.ok) throw new Error("Failed to load daily data");
  return await res.json();
}

export async function fetchManualDailyData() {
  const res = await fetch("/manualDailyData.json");
  if (!res.ok) throw new Error("Failed to load daily data");
  return await res.json();
}


