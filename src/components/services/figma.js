export async function fetchFigmaData(fileKey) {
  const url = `https://api.figma.com/v1/files/${fileKey}`;

  const response = await fetch(url, {
    headers: {
      'X-Figma-Token': 'YOUR_FIGMA_API_TOKEN_HERE', 
    },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch Figma data");
  }

  return await response.json();
}
