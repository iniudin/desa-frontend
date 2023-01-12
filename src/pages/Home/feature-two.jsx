import React from "react";

export default function FeatureTwo() {
  return (
    <div className="container flex justify-center items-center mt-44">
      <div className="w-3/4">
        <div className="grid grid-cols-2 gap-4">
          <div className="col-span-1 flex justify-center items-center">
            <div className="">
              <h1 className="text-3xl text-sky-700 font-bold">Fitur Lengkap & Mudah Digunakan</h1>
              <p className="text-lg mt-4">
                DIGIDES merupakan platform tata kelola desa yang menawarkan sejumlah layanan seperti sistem informasi pembangunan desa, administrasi, kependudukan, pelayanan publik, anggaran, dan berbagai layanan lainnya.
              </p>

              <div className="pl-8 mt-2">
              <ul className="list-disc">
                <li>Mudah digunakan.</li>
                <li>Terintegrasi antara Android dan Website.</li>
                <li>Dapat berjalan secara online dan offline.</li>
                <li>Mudah dalam memasukkan data.</li>
                <li>Kompatibel dengan PRODESKEL.</li>
                <li>Terintegrasi dengan IDM.</li>
              </ul>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <img src={require("../../images/image-5.png")} alt="Gambar 2" className="mx-auto w-64" />
          </div>
        </div>
      </div>
    </div>
  );
}
