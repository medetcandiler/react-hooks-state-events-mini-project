import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 z-10 bg-white w-full">
      <header className="  container mx-auto flex px-8 justify-between items-center h-[80px] self-stretch pr-1.5 w-full text-[#020202] whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
        <div className="flex items-center justify-between w-full my-auto max-md:flex-wrap max-md:max-w-full">
          <div className="flex text-2xl font-bold tracking-normal leading-8 text-black">
            <img src="logolong.png" alt="logo" width={150} height={150} />
          </div>

          <nav className="flex gap-5 justify-between items-stretch text-sm font-semibold tracking-wide leading-6 text-center">
            <div className="">Ana Sayfa</div>
            <div className="">Ürünler</div>
            <div className="">Fiyatlandırma</div>
            <div className="">İletişim</div>
          </nav>

          <div className="flex gap-5 justify-between items-center text-sm font-bold tracking-wide leading-5">
            <div className="">Giriş Yap</div>
            <div className="flex flex-col flex-1 ">
              <div className="flex gap-4 justify-between items-stretch px-6 py-4 bg-sky-500 rounded-md max-md:px-5">
                <div className="grow">Üye Ol</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/d8af384f430da15aad208f6c66ca71156587c774e276d981f7866b09d5892d52?"
                  className="object-center my-auto w-3 aspect-[1.2]"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
