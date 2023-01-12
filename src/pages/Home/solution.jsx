import { Card } from "flowbite-react";
import React from "react";

export default function Solution() {
  return (
    <div className="container flex justify-center items-center mt-44">
      <div className="w-3/4">
        <h1 className="text-3xl text-center text-sky-700 font-bold mb-7">
          Solusi yang Kami Berikan
        </h1>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1">
            <div className="grid grid-rows-4 grid-flow-col gap-4">
              <div className="row-span-1">
                <Card href="#">
                  <h5 className="text-2xl font-bold tracking-tight text-sky-700 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </Card>
              </div>

              <div className="row-span-1">
                <Card href="#">
                  <h5 className="text-2xl font-bold tracking-tight text-sky-700 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </Card>
              </div>

              <div className="row-span-1">
                <Card href="#">
                  <h5 className="text-2xl font-bold tracking-tight text-sky-700 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </Card>
              </div>

              <div className="row-span-1">
                <Card href="#">
                  <h5 className="text-2xl font-bold tracking-tight text-sky-700 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </Card>
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="grid grid-rows-3 grid-flow-col">
              <div className="col-span-3">
                <img
                  src={require("../../images/image-3.png")}
                  alt="Gambar 1"
                  className="h-full my-auto place-items-center"
                />
              </div>
            </div>
          </div>

          <div className="col-span-1">
            <div className="grid grid-rows-4 grid-flow-col gap-4">
              <div className="row-span-1">
                <Card href="#">
                  <h5 className="text-2xl font-bold tracking-tight text-sky-700 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </Card>
              </div>

              <div className="row-span-1">
                <Card href="#">
                  <h5 className="text-2xl font-bold tracking-tight text-sky-700 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </Card>
              </div>

              <div className="row-span-1">
                <Card href="#">
                  <h5 className="text-2xl font-bold tracking-tight text-sky-700 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </Card>
              </div>

              <div className="row-span-1">
                <Card href="#">
                  <h5 className="text-2xl font-bold tracking-tight text-sky-700 dark:text-white">
                    Noteworthy technology acquisitions 2021
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
