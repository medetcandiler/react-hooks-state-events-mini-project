import { useState, useEffect } from "react";
import HeroSectionSlider from "./HeroSlider";
import { data } from "autoprefixer";

const dataSlice = [
  {
    id: 1,
    title: "Araç Sigortası",
    description:
      "Araç sigortası ile aracınızın güvence altında olduğundan emin olun. Trafik kazaları, hırsızlık ve diğer risklere karşı koruma sağlıyoruz.",
    bg: "car.jpeg",
  },
  {
    id: 2,
    title: "Konut Sigortası",
    description:
      "Ev sigortası ile evinizi ve eşyalarınızı güvence altına alın. Doğal afetler, hırsızlık ve diğer risklere karşı kapsamlı bir koruma sunuyoruz.",
    bg: "konut.jpeg",
  },
  {
    id: 3,
    title: "Sağlık Sigortası",
    description:
      "Sağlık sigortası ile sağlığınızı ön planda tutun. İleri tedaviler, acil durumlar ve diğer sağlık hizmetlerine geniş kapsamlı bir erişim sağlıyoruz.",
    bg: "logistic.jpeg",
  },
];

const HeroSection = () => {
  const [currentSlice, setCurrentSlice] = useState(0);

  useEffect(() => {
    const intervalNext = setInterval(() => {
      handleNextSlice();
    }, 3000);

    return () => {
      clearInterval(intervalNext);
    };
  }, [currentSlice]);

  const handleNextSlice = () => {
    setCurrentSlice((prev) => (prev + 1) % dataSlice.length);
  };

  const handlePrevSlice = () => {
    setCurrentSlice((prev) => (prev - 1 + dataSlice.length) % dataSlice.length);
  };

  const backgroundImageStyle = {
    backgroundImage: `url('${dataSlice[currentSlice].bg}')`,
  };

  return (
    <section
      style={backgroundImageStyle}
      className={`bg-cover h-screen-80 relative overflow-hidden`}
    >
      <div className="absolute bottom-12 flex w-full justify-between px-12">
        <div
          onClick={handlePrevSlice}
          className="flex gap-4 justify-between items-stretch px-6 py-4 bg-sky-500 rounded-md max-md:px-5"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8af384f430da15aad208f6c66ca71156587c774e276d981f7866b09d5892d52?"
            className="object-center my-auto w-3 aspect-[1.2] -scale-100"
          />
        </div>
        <div
          onClick={handleNextSlice}
          className="flex gap-4 justify-between items-stretch px-6 py-4 bg-sky-500 rounded-md max-md:px-5"
        >
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8af384f430da15aad208f6c66ca71156587c774e276d981f7866b09d5892d52?"
            className="object-center my-auto w-3 aspect-[1.2]"
          />
        </div>
      </div>

      <div className="max-md:px-5">
        <div className="flex justify-center">
          {dataSlice.map((data, index) => (
            <HeroSectionSlider
              key={index}
              content={data}
              isVisible={index === currentSlice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
