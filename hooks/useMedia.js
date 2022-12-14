import { useEffect, useState } from 'react';

import * as media from '../utils/media';

const useMedia = () => {
  const [isDesktopUp, setIsDesktopUp] = useState(media.isDesktopUp());

  useEffect(() => {
    const handleResize = () => {
      setIsDesktopUp(media.isDesktopUp());
    };

    // For resizing header
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener(handleResize);
    };
  }, []);

  return { isDesktopUp };
};

export default useMedia;
