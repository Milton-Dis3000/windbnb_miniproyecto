function ImagContainer(post) {
  return (
    <div className="imagecontainer">
      <img
        id="principalImage"
        src={post.img}
        alt="bedRoom"
      />
      <div className="photoFooter">
        <button id="host">
          <h2>{post.button}</h2>
        </button>
        <div className="beds">
          <h4>{post.descript}</h4>
        </div>
        <div className="star">
          <img id="iconStar" src="src\icons\starbnb.svg" alt="" />
          <h4>{post.cuality}</h4>
        </div>
      </div>
      <div className="stylist">
        <h2>{post.imgFooter}</h2>
      </div>
    </div>
    
  );
}
export default ImagContainer
