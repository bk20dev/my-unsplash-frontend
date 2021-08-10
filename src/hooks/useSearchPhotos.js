import Fuse from 'fuse.js';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';

const useSearchPhotos = (data) => {
  const term = useSelector((state) => state.search);

  const photos = useMemo(() => {
    if (!data) return [];

    if (!term) {
      return data
        .slice()
        .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
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
