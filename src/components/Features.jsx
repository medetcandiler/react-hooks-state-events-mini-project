import * as React from "react";

function InsuranceBenefitsSection(props) {
  return (
    <div className="container mx-auto flex justify-center items-center self-stretch px-16 py-12 bg-white max-md:px-5">
      <div className="px-0.5 mt-12 w-full max-w-[1046px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:items-stretch">
          <div className="flex flex-col items-stretch w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-11 py-10 text-center rounded-md max-md:px-5 max-md:mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeb1877f5eb72a3c09e24e6d306a30b982dedb87a751612e101bc55068696f40?"
                className="object-center aspect-[1.22] w-[72px]"
              />
              <div className="mt-8 text-base font-bold tracking-normal leading-6 whitespace-nowrap text-slate-800">
                Güvende Olma
              </div>
              <div className="self-stretch mt-2.5 text-sm font-medium tracking-wide leading-5 text-neutral-500">
                Sigorta poliçelerimizle huzur içinde olun. Küçük ölçekteki riskleri büyük bir özenle yönetiyoruz.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-14 py-10 text-center rounded-md max-md:px-5 max-md:mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8501deeeffef0cc5fcd45e8253fc6677f252fcf6fd85360882d1c0496ec51d47?"
                className="object-center aspect-[1.22] w-[72px]"
              />
              <div className="mt-8 text-base font-bold tracking-normal leading-6 whitespace-nowrap text-slate-800">
                Geleceğe Güvence
              </div>
              <div className="self-stretch mt-2.5 text-sm font-medium tracking-wide leading-5 text-neutral-500">
                Sigorta poliçelerimizle geleceğinizi güvence altına alın. Planlı bir şekilde geleceğe adım atın.
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow items-center px-12 py-10 text-center rounded-md max-md:px-5 max-md:mt-8">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/b131effd01ae92bfec8c086b6930898abab95339774c0e830cdcff484808a5a8?"
                className="object-center aspect-[1.22] w-[72px]"
              />
              <div className="mt-8 text-base font-bold tracking-normal leading-6 whitespace-nowrap text-slate-800">
                %100 Müşteri Memnuniyeti
              </div>
              <div className="self-stretch mt-2.5 text-sm font-medium tracking-wide leading-5 text-neutral-500">
                Müşteri memnuniyeti odaklı hizmetimizle her zaman yanınızdayız. Sorunsuz bir sigorta deneyimi yaşayın.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InsuranceBenefitsSection;
