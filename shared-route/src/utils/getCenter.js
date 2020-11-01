import center from '@turf/center';
import { featureCollection, point } from '@turf/helpers';

const getGenter = (route) => {
  const points = route.points.map((item) => point([item.latitude, item.longitude]));
  const features = featureCollection(points);

  const res = center(features);

  return res.geometry.coordinates;
};

export default getGenter;
