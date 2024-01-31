import * as React from "react";

function FooterSection(props) {
  return (
    <div className="container mx-auto flex justify-center items-center self-stretch px-16 py-12 text-sm font-semibold tracking-wide leading-6 bg-white text-neutral-500 max-md:px-5">
      <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
        <div className="flex flex-col pr-8 basis-0">
          <div className="text-base font-bold tracking-normal leading-6 whitespace-nowrap text-slate-800">
            Şirket Bilgisi
          </div>
          <div className="mt-5">Hakkımızda</div>
          <div className="mt-2.5">Sigorta Ürünleri</div>
          <div className="mt-2.5 whitespace-nowrap">Kariyer Fırsatları</div>
          <div className="mt-2.5">Blog</div>
        </div>
        <div className="flex flex-col pr-14 basis-0">
          <div className="text-base font-bold tracking-normal leading-6 text-slate-800">
            Hukuki
          </div>
          <div className="mt-5">Kullanım Şartları</div>
          <div className="mt-2.5">Gizlilik Politikası</div>
          <div className="mt-2.5 whitespace-nowrap">Telif Hakkı</div>
          <div className="mt-2.5">İletişim</div>
        </div>
        <div className="flex flex-col basis-0">
          <div className="text-base font-bold tracking-normal leading-6 text-slate-800">
            Özellikler
          </div>
          <div className="mt-5 whitespace-nowrap max-md:mr-0.5">
            Kapsamlı Sigorta Çeşitleri
          </div>
          <div className="mt-2.5 max-md:mr-0.5">Hızlı İşlemler</div>
          <div className="mt-2.5 max-md:mr-0.5">Canlı Destek</div>
          <div className="mt-2.5 whitespace-nowrap max-md:mr-0.5">
            Sorunsuz Hizmet
          </div>
        </div>
        <div className="flex flex-col pr-11 whitespace-nowrap basis-0">
          <div className="text-base font-bold tracking-normal leading-6 text-slate-800">
            Kaynaklar
          </div>
          <div className="mt-5">Sigorta Uygulamaları</div>
          <div className="mt-2.5">Demo İzle</div>
          <div className="mt-2.5">Müşteri Yorumları</div>
          <div className="mt-2.5">API Kılavuzu</div>
        </div>
        <div className="flex flex-col flex-1 self-start">
          <div className="text-base font-bold tracking-normal leading-6 text-slate-800">
            İletişim
          </div>
          <div className="flex gap-2.5 justify-between mt-5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/b0f6f7f8906977b335e26f3b9bc392f0579952bb962af7a101e9304af4e8fada?"
              className="my-auto w-6 aspect-square"
            />
            <div className="flex-auto">(480) 555-0103</div>
          </div>
          <div className="flex gap-2.5 justify-between mt-2.5">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/14008a2cbb460f1060adbfe27b11ec5eb1cba6594a610f73c3d81ed9b3b48a5b?"
              className="w-6 aspect-[0.8]"
            />
            <div className="flex-auto">
              4517 Washington Ave. Manchester, Kentucky 39495
            </div>
          </div>
          <div className="flex gap-2.5 justify-between mt-2.5 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/3ffe898981fb0a452fefac10cb946bf82a3908432a2b1be3d1828d1036bfc398?"
              className="my-auto w-6 aspect-[0.93]"
            />
            <div className="flex-auto">info@sirketiniz.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FooterSection;
