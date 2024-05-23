import { Parallax } from "react-parallax";
const Cover = ({ img, title, passage }) => {
  return (
    <div>
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
      >
        <div>
          <div className="hero h-[700px]">
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content bg-[#15151599] w-2/4 h-1/3">
              <div className="max-w-md  ">
                <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
                <p className="mb-5 uppercase">{passage}</p>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
