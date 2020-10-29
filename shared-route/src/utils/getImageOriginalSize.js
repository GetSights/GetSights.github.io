const getImageOriginalSize = (imgSrc) => {
  return new Promise((res, rej) => {
    const img = new Image();

    // TODO: Add error handler here
    img.onload = () => {
      const { width, height } = img;

      res({ width, height });
    }

    img.src = imgSrc;
  })
};

export default getImageOriginalSize;
