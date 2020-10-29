const WIDTH = 'width';
const HEIGHT = 'height';

const getImageWidth = (containerSize, imageOriginalSize, shouldRecalculate = false) => {
  if (imageOriginalSize.height > imageOriginalSize.width && !shouldRecalculate) {
    return containerSize.width;
  }

  const aspectRatio = containerSize.height / imageOriginalSize.height;
  const width = imageOriginalSize.width * aspectRatio;

  return width;
};

const getImageHeight = (containerSize, imageOriginalSize, shouldRecalculate = false) => {
  if (imageOriginalSize.width > imageOriginalSize.height && !shouldRecalculate) {
    return containerSize.height;
  }

  const aspectRatio = containerSize.width / imageOriginalSize.width;
  const height = imageOriginalSize.height * aspectRatio;

  return height;
};

const getScale = (containerSize, imageSize, shouldRecalculate) => {
  let scale = 1;

  if (imageSize.height > imageSize.width || shouldRecalculate === WIDTH) {
    scale = containerSize.height / imageSize.height;
  }

  if (imageSize.width > imageSize.height || shouldRecalculate === HEIGHT) {
    scale = containerSize.width / imageSize.width;
  }

  return Math.ceil(scale * 100) / 100;
};

/**
 * Calculating image size regarding resizeMode=cover strategy
 * */
const useImageSize = (containerSize, imageOriginalSize) => {
  let imageWidth = getImageWidth(containerSize, imageOriginalSize);
  let imageHeight = getImageHeight(containerSize, imageOriginalSize);
  let scale = getScale(containerSize, { width: imageWidth, height: imageHeight });

  /*
    * incase after calculating container width more than image width
    * should recalculate proportion and fit image regarding cover strategy
    */
  if (containerSize.width > imageWidth) {
    imageHeight = getImageHeight(
      containerSize, { width: imageWidth, height: imageHeight }, true,
    );
    imageWidth = containerSize.width;
    scale = getScale(containerSize, { width: imageWidth, height: imageHeight }, WIDTH);
  }
  /*
    * incase after calculating container height more than image height
    * should recalculate proportion and fit image regarding cover strategy
    */
  if (containerSize.height > imageHeight) {
    imageWidth = getImageWidth(containerSize, { width: imageWidth, height: imageHeight }, true);
    imageHeight = containerSize.height;
    scale = getScale(containerSize, { width: imageWidth, height: imageHeight }, HEIGHT);
  }

  return { width: imageWidth, height: imageHeight, scale };
};

export default useImageSize;
