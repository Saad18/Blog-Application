const Image = ({title, image, id }) => {
  return <img src={image} alt={title} className="w-full rounded-md" id={id} />;
};

export default Image;
