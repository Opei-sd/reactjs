function cardComponent({ image, title, description, price, backgroungColor, id }) {
  return (
    <div style={{ backgroundColor: backgroungColor }}>
      <img src={image} alt={title} />
      <p>{price}</p>
      <h2>{title}</h2>
    </div>
  );
}



export default cardComponent;