import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Button from "./Button";

const totalVideos = 4;

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);

  const nextVideoRef = useRef(null);

  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <section className="relative h-dvh w-screen overflow-x-hidden">
      {loading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}

      <div
        className="relative z-10 h-dvh w-screen overflow-hidden"
        id="video-frame"
      >
        <div>
          <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor pointer overflow-hidden rounded-lg">
            <div className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
              <video
                src={getVideoSrc((currentIndex % totalVideos) + 1)}
                ref={nextVideoRef}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
            loop
            autoPlay
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
          />
        </div>
        <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
          G<b>A</b>MING
        </h1>
      </div>

      <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        G<b>A</b>MING
      </h1>

      <div className="absolute left-0 top-0 z-40 size-full">
        <div className="mt-24 px-5 sm:px-10">
          <h2 className="special-font hero-heading text-blue-100">
            redefi<b>n</b>e
          </h2>
          <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
            Enter the Metagame Layer <br /> Unleash the Play Economy
          </p>
          <Button
            id="watch-trailer"
            title="Watch trailer"
            leftIcon={<TiLocationArrow />}
            containerClass="bg-yellow-300 flex-center gap-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
