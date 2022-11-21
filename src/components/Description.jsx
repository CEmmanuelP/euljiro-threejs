const Description = ({ url }) => {
  return (
    <>
      <div className="desc" id="desc_sewoon">
        <h1 className="desc_title" id="desc_title"></h1>
        <p className="desc_description" id="desc_description"></p>
        <img
          src={process.env.PUBLIC_URL + "/images/sewoonImg.jpeg"}
          id="img"
          alt="sewoon"
          width="400px"
          height="300px"
        />
      </div>
      <button
        className="urlBtn"
        id="urlBtn"
        onClick={() => window.open(url, "_blank")}
      >
        URL
      </button>
    </>
  );
};

export default Description;
