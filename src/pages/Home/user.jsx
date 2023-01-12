import { faCity, faDatabase, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function User() {
    return (
        <div className="container flex justify-center items-center mt-44">
            <div className="w-3/4">
                <h1 className="text-3xl text-center text-sky-700 font-bold mb-7">Jumlah Pengguna</h1>

                <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-1 text-center">
                        <FontAwesomeIcon icon={faDatabase} className="text-sky-700 text-7xl" />
                        <h1 className="text-5xl font-bold">688</h1>
                        <p className="text-lg">Desa Register</p>
                    </div>

                    <div className="col-span-1 text-center">
                        <FontAwesomeIcon icon={faCity} className="text-sky-700 text-7xl" />
                        <h1 className="text-5xl font-bold">88</h1>
                        <p className="text-lg">Kabupaten</p>
                    </div>

                    <div className="col-span-1 text-center">
                        <FontAwesomeIcon icon={faUsers} className="text-sky-700 text-7xl" />
                        <h1 className="text-5xl font-bold">12536</h1>
                        <p className="text-lg">Pengguna Aplikasi</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
