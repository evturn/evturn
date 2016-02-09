import tech from 'sources/tech';

const getFeaturedTech = () => {
  return tech.filter((obj) => {
    return obj.featured;
  }).map((obj) => {
    return obj;
  });
};

const featuredTech = getFeaturedTech();

export default featuredTech;