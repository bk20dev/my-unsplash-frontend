const getUnifiedHeight = (width, height) => (height * 300) / width;

const distributePhotos = (photos, columnCount, gap = 32) => {
  const columns = [...new Array(columnCount)].map(() => []);
  const heights = new Array(columnCount).fill(0);

  photos.forEach((photo) => {
    const index = heights.indexOf(Math.min(...heights));
    const height = getUnifiedHeight(photo.width, photo.height);

    columns[index].push(photo);
    heights[index] += Math.round(height) + gap;
  });

  return columns;
};

export default distributePhotos;
