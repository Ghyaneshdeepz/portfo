export async function fetchFigmaData(fileKey) {
  const url = `https://api.figma.com/v1/files/${fileKey}`;

  const response = await fetch(url, {
    headers: {
      "X-Figma-Token": "",
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Figma data");
  }

  return await response.json();
}