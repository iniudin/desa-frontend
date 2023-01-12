import React from "react";

export default function Feature() {
  return (
    <div className="container flex justify-center items-center mt-44">
      <div className="w-3/4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 flex justify-center items-center">
            <div className="">
              <h1 className="text-3xl text-sky-700 font-bold">FITUR DIGIDES</h1>
              <p className="text-lg mt-3">
                Berbagai fitur aplikasi desa gratis untuk menghilangkan
                kesenjangan teknologi di desa. Berbagai macam layanan dalam satu
                platform DIGIDES yang juga berdasar pada UU Desa dan
                Permendagri.
              </p>
            </div>
          </div>

          <div className="col-span-1">
            <video className="w-3/4 rounded-md mx-auto" controls>
              <source
                src={require("../../videos/ex-video.mp4")}
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </div>
    </div>
  );
}
