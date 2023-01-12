import React from "react";

export default function Benefit() {
  return (
    <div className="container flex justify-center items-center mt-44">
      <div className="w-3/4">
        <h1 className="text-3xl text-center text-sky-700 font-bold mb-7">
          Manfaat DIGIDES
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1">
            <h1 className="text-2xl text-center text-sky-700 font-bold mb-3">Tanpa DIGIDES</h1>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-1 p-6 rounded-lg bg-sky-700">
                <h1 className="text-xl text-white font-bold">Jangkauan</h1>
                <p className="text-lg text-white">
                  Pengenalan potensi desa sangat terbatas.
                </p>
              </div>

              <div className="row-span-1 p-6 rounded-lg bg-sky-700">
                <h1 className="text-xl text-white font-bold">Kecepatan</h1>
                <p className="text-lg text-white">30 menit s/d -&gt; 4 hari.</p>
              </div>

              <div className="row-span-1 p-6 rounded-lg bg-sky-700">
                <h1 className="text-xl text-white font-bold">Kecerdasan</h1>
                <p className="text-lg text-white">
                  Data kacau dan butuh SDM yang mengerti semuanya.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <h1 className="text-2xl text-center text-sky-700 font-bold mb-3">
              Dengan DIGIDES
            </h1>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
              <div className="row-span-1 p-6 rounded-lg bg-indigo-700">
                <h1 className="text-xl text-white font-bold">Jangkauan</h1>
                <p className="text-lg text-white">
                  Dengan promosi digital dapat menjangkau lebih banyak.
                </p>
              </div>

              <div className="row-span-1 p-6 rounded-lg bg-indigo-700">
                <h1 className="text-xl text-white font-bold">Kecepatan</h1>
                <p className="text-lg text-white">+1-5 menit.</p>
              </div>

              <div className="row-span-1 p-6 rounded-lg bg-indigo-700">
                <h1 className="text-xl text-white font-bold">Kecerdasan</h1>
                <p className="text-lg text-white">Smart system.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
