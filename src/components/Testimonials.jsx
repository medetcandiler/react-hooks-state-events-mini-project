import TestimonialCard from "./TestimonialCard";

function TestimonialsSection(props) {
  const array = [1, 2, 3];

  return (
    <section className=" bg-neutral-100">
      <div className="container mx-auto flex justify-center items-center self-stretch px-16 pb-12  max-md:px-5">
        <div className="flex flex-col py-12 w-full max-w-[1050px] max-md:max-w-full">
          <div className="flex flex-col self-center px-16 mt-16 max-w-full tracking-wide w-[607px] max-md:px-5 max-md:mt-10">
            <div className="self-center text-4xl font-bold leading-[57px] text-slate-800">
              Müşteri Yorumları
            </div>
            <div className="mt-2.5 text-sm font-medium leading-5 text-center text-neutral-500 max-md:max-w-full">
              Sigorta hizmetlerimizle ilgili müşteri deneyimlerini keşfedin.
              İşte müşterilerimizin bizimle ilgili düşünceleri:
            </div>
          </div>
          <div className="px-5 mt-20 mb-10 max-md:pr-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              {Array(3)
                .fill()
                .map((_, i) => (
                  <TestimonialCard key={i} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
