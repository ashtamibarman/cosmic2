import universe from "./image/universe.webp";
import moon from "./image/moon.webp";
import nebulae from "./image/nebulae2.jpg";
import starts from "./image/starts.webp";
import planets from "./image/planet2.jpg";
import galaxy from "./image/galaxy.jpg";

const Explore = () => {
  return (
    <>
      <div className="explore">
        <h1 id="h1">EXPLORE SECTION</h1>
        <div className="card mb-3 " id="card2">
          <img src={universe} alt="" width={300} />

          <div className="card-body">
            <h5 className="card-title">what is this map</h5>
            This map shows a slice of our Universe. It was created from
            astronomical data taken night after night over a period of 15 years
            using a telescope in New Mexico, USA. We are located at the bottom.
            At the top is the actual edge of the observable Universe. In
            between, we see about 200,000 galaxies.
          </div>
        </div>
        <div className="card mb-3" id="card2">
          <img src={moon} alt="" width={300} />
          <div className="card-body">
            <h5 className="card-title">About moon</h5>
            The Moon is Earths only natural satellite. It orbits at an average
            distance of 384,400 km (238,900 mi), about 30 times Earths diameter.
            The Moon always presents the same side to Earth, because
            gravitational pull has locked its rotation to the planet. This
            results in the lunar day of 29.5 Earth days matching the lunar
            month. The Moons gravitational pull – and to a lesser extent the
            Suns – are the main drivers of the tides.
          </div>
        </div>
        <div className="card mb-3" id="card2">
          <img src={galaxy} alt="" width={300} />
          <div className="card-body">
            <h5 className="card-title">About Galaxy</h5>
            Galaxies consist of stars, planets, and vast clouds of gas and dust,
            all bound together by gravity. The largest contain trillions of
            stars and can be more than a million light-years across. The
            smallest can contain a few thousand stars and span just a few
            hundred light-years. Most large galaxies have supermassive black
            holes at their centers, some with billions of times the Sun’s mass.
            Galaxies come in a variety of shapes, mostly spirals and
            ellipticals, as well as those with less orderly appearances, usually
            dubbed irregular. Most galaxies are between 10 billion and 13.6
            billion years old. Some are almost as old as the universe itself,
            which formed around 13.8 billion years ago. Astronomers think the
            youngest known galaxy formed approximately 500 million years ago.
            Galaxies can organize into groups of about 100 or fewer members held
            together by their mutual gravity. Larger structures, called
            clusters, may contain thousands of galaxies. Groups and clusters can
            be arranged in superclusters, which are not gravitationally bound.
            Superclusters, empty voids, “walls” of galaxies, and other
            large-scale structures make up the cosmic web of matter in the
            universe.
          </div>
        </div>
        <div className="card mb-3" id="card2">
          <img src={nebulae} alt="" width={300} />
          <div className="card-body">
            <h5 className="card-title">About Nebula</h5>
            Nebulae are interstellar clouds of gas and dust. Many nebulae are
            formed from the remnants of dying stars. Nebulae are often also
            regions where new stars are born. Nowadays, the term ‘nebula’ refers
            to an interstellar cloud of dust and gas. Nebulae are often formed
            from the remnants of dying stars: from planetary nebulae or the
            dispersed debris from supernova explosions. They are also often
            regions of intense star formation, as the rich reservoirs of dust
            and gas provide the necessary raw material from which new stars are
            born. Nebulae are often mind-bogglingly big, spanning several light
            years in size. The word ‘nebula’ used to have a much broader
            meaning, referring to any celestial object that appeared to have a
            diffuse structure, including the objects that we now know as
            galaxies.
          </div>
        </div>
        <div className="card mb-3" id="card2">
          <img src={planets} alt="" width={300} />
          <div className="card-body">
            <h5 className="card-title"> About planet</h5>A planet is a large,
            rounded astronomical body that is neither a star nor its remnant.
            The best available theory of planet formation is the nebular
            hypothesis, which posits that an interstellar cloud collapses out of
            a nebula to create a young protostar orbited by a protoplanetary
            disk. Planets grow in this disk by the gradual accumulation of
            material driven by gravity, a process called accretion. The Solar
            System has at least eight planets: the terrestrial planets Mercury,
            Venus, Earth, and Mars, and the giant planets Jupiter, Saturn,
            Uranus, and Neptune. The word planet probably comes from the Greek
            planḗtai, meaning (wanderers). In antiquity, this word referred to
            the Sun, Moon, and five points of light visible by the naked eye
            that moved across the background of the stars—namely, Mercury,
            Venus, Mars, Jupiter, and Saturn. Planets have historically had
            religious associations: multiple cultures identified celestial
            bodies with gods, and these connections with mythology and folklore
            persist in the schemes for naming newly discovered Solar System
            bodies. Earth itself was recognized as a planet when heliocentrism
            supplanted geocentrism during the 16th and 17th centuries.
          </div>
        </div>
        <div className="card mb-3" id="card2">
          <img src={starts} alt="" width={300} />
          <div className="card-body">
            <h5 className="card-title">About Star</h5>A star is a luminous
            spheroid of plasma held together by self-gravity. The nearest star
            to Earth is the Sun. Many other stars are visible to the naked eye
            at night; their immense distances from Earth make them appear as
            fixed points of light. The most prominent stars have been
            categorised into constellations and asterisms, and many of the
            brightest stars have proper names. Astronomers have assembled star
            catalogues that identify the known stars and provide standardized
            stellar designations. The observable universe contains an estimated
            1022 to 1024 stars. Only about 4,000 of these stars are visible to
            the naked eye—all within the Milky Way galaxy.[1] A stars life
            begins with the gravitational collapse of a gaseous nebula of
            material largely comprising hydrogen, helium, and trace heavier
            elements. Its total mass mainly determines its evolution and
            eventual fate. A star shines for most of its active life due to the
            thermonuclear fusion of hydrogen into helium in its core. This
            process releases energy that traverses the stars interior and
            radiates into outer space. At the end of a stars lifetime as a
            fusor, its core becomes a stellar remnant: a white dwarf, a neutron
            star, or—if it is sufficiently massive—a black hole.
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
