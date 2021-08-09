const sortPhotos = (photos) => {
  const getTime = (timestamp) => new Date(timestamp).getTime();

  return photos
    .slice()
    .sort((a, b) => getTime(b.timestamp) - getTime(a.timestamp));
};

export default sortPhotos;
