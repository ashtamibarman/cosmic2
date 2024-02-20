import vid2 from "./video/stone.mp4";

const HomePage = () => {
  return (
    <>
      <div className="main">
        <video src={vid2} autoPlay loop muted />

        <p className="heading">
          {/* <h1 className="heading" id="cosmic"> */}
          ALL ABOUT COSMIC <hr />
          {/* </h1> */}
          The cosmos is an alternative name for the universe or its nature or
          order. Usage of the word cosmos implies viewing the universe as a
          complex and orderly system or entity.
        </p>
      </div>
    </>
  );
};

export default HomePage;
