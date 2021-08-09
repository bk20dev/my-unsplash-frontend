import Fuse from 'fuse.js';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const getTime = (date) => new Date(date).getTime();

const useSearchPhotos = (data) => {
  const term = useSelector((state) => state.search);

  const photos = useMemo(() => {
    if (!data) return [];

    if (!term) {
      const comparison = (a, b) => getTime(b.timestamp) - getTime(a.timestamp);
      return data.slice().sort(comparison);
    }

    const fuse = new Fuse(data, {
      keys: ['label'],
      includeScore: true,
      threshold: 0.5,
    });

    return fuse.search(term).map(({ item }) => item);
  }, [data, term]);

  return photos;
};

export default useSearchPhotos;
