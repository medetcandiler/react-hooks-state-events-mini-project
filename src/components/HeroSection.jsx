const HeroSection = () => {
  return (
    <section className="flex flex-col justify-center items-center self-stretch max-md:px-5">
      <div className="flex flex-col items-center pb-12 w-full max-w-[1048px] max-md:max-w-full">
        <div className="mt-40 text-6xl font-extrabold tracking-wide text-center text-white leading-[80px] w-[695px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[62px]">
          Güvenceli Geleceğin Anahtarı
        </div>
        <div className="mt-10 text-xl font-medium tracking-wide leading-8 text-center text-white max-md:max-w-full">
          Sigorta hizmetlerimizle hayatınızı güvence altına alın. Küçük
          ölçekteki riskleri büyük bir özenle yönetiyoruz.
        </div>
        <div className="flex gap-2.5 items-stretch mt-10 text-sm font-bold tracking-wide leading-5 text-center text-white whitespace-nowrap">
          <div className="grow justify-center items-stretch px-9 py-4 bg-sky-500 rounded-[37px] max-md:px-5">
            Teklif Alın
          </div>
          <div className="grow justify-center items-stretch px-9 py-4 border border-solid border-[color:var(--light-text-color,#FFF)] rounded-[37px] max-md:px-5">
            Daha Fazla Bilgi
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
