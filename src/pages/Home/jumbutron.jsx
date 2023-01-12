import React from "react";

export default function Jumbutron() {
  return (
    <div className="custom-bg-home flex justify-center items-center">
      <div className="text-center text-white">
        <h1 className="font-bold text-5xl">TRANSFORMASI DIGITALISASI DESA</h1>
        <p className="text-lg mt-3">
          Perluas Jangkauan, Lakukan Percepatan Pelayanan Dengan Smart System Terintegrasi.
        </p>

        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 text-right">
            <button
              type="button"
              className="focus:outline-none text-white bg-sky-700 hover:bg-sky-900 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-7"
            >
              Request Demo
            </button>
          </div>

          <div className="col-span-1 text-left">
            <button
              type="button"
              className="focus:outline-none text-white bg-sky-700 hover:bg-sky-900 focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 mt-7"
            >
              Daftar Gratis
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
