import gallery from "./image/gallery.jpg";
import g2 from "./image/gallery2.jpg";
import g3 from "./image/gallery3.jpg";
import galaxi from "./video/purple.mp4";
// import h1 from "./image/heic0304e.jpg";
// import h2 from "./image/heic0506a.jpg";
// import h3 from "./image/heic1509a.jpg";
// import h4 from "./image/heic2018b.jpg";
// import h5 from "./image/heic2105a.jpg";
// import h6 from "./image/opo0328a.jpg";
// import h7 from "./image/opo0501a.jpg";
// import h8 from "./image/potw1208a.jpg";
// import h9 from "./image/potw1441a.jpg";
// import h10 from "./image/potw2242a.jpg";

const Gallery = () => {
  return (
    <>
      <div id="gallery">
        <video src={galaxi} autoPlay loop muted />
        <h1 id="gallery-h">Scroll to see picture</h1>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner" id="gallery">
            <div className="carousel-item active" id="gallery">
              <img
                src={gallery}
                className="d-block w-100 "
                style={{ height: "800px" }}
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Hubble Image</h5>
                <p>
                  This new Hubble image, captured and released to celebrate the
                  telescope’s 23rd year in orbit, shows part of the sky in the
                  constellation of Orion (The Hunter)
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={g2}
                className="d-block w-100"
                style={{ height: "800px" }}
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Stars</h5>
                <p>
                  The star-forming region NGC 3603 - seen here in the latest
                  Hubble Space Telescope image - contains one of the most
                  impressive massive young star clusters in the Milky Way
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src={g3}
                className="d-block w-100"
                style={{ height: "800px" }}
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Young Star</h5>
                <p>Young stars sculpt gas with powerful outflows</p>
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
        </div>
      </div>

      {/* <img src={gallery} alt="" width={400} />
           
            <img src={g2} alt="" width={400} />
            
            <img src={g3} alt="" width={400} />
            
     
      <div classNameNameNameName="gallery">
        <img src={h1} alt="" width={400} />
        <img src={h2} alt="" width={400} />
        <img src={h3} alt="" width={400} />
        <img src={h4} alt="" width={400} />
        <img src={h5} alt="" width={400} />
        <img src={h6} alt="" width={400} />
        <img src={h7} alt="" width={400} />
        <img src={h8} alt="" width={400} />
        <img src={h9} alt="" width={400} />
        <img src={h10} alt="" width={400} />
      </div> */}
    </>
  );
};

export default Gallery;
