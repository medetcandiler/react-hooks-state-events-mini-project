const TestimonialCard = () => {
  return (
    <div className="flex flex-col grow items-center px-9 py-10 mx-auto w-full bg-white rounded-md border border-solid border-neutral-200 max-md:px-5 max-md:mt-10">
      <img
        loading="lazy"
        width={100}
        height={100}
        srcSet="medo.png"
        className="max-w-full"
      />
      <div className="self-stretch mt-8 text-sm font-medium tracking-wide leading-5 text-center text-neutral-500">
        Sigorta poliçeleri ile güvende olmanın huzurunu yaşadım. Hedeflediğim
        finansal güvenceye ulaşmak için ne kadar çalışmam gerektiğini görmemde
        Slate çok yardımcı oldu.
      </div>
      {/* <div className="flex gap-1.5 mt-4 max-w-full w-[130px]">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e649a56d78302438ac7db0c9bf1f08b07e423d44826b917ef102b213f7c71d7?"
          className="flex-1 shrink-0 w-full aspect-square"
        />
      </div> */}
    </div>
  );
};

export default TestimonialCard;
