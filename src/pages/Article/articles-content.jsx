import { Card, Pagination } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

export default function ArticlesContent() {
  const onPageChange = 0;

  return (
    <div className="container flex justify-center items-center">
      <div className="w-3/4 mt-44">
        <h1 className="text-3xl text-sky-700 font-bold mb-7 text-center">
          ARTIKEL
        </h1>

        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-1 mx-auto">
            <div className="max-w-sm">
              <Card
                imgAlt="Bag Purple"
                imgSrc={require("../../images/image-9.jpg")}
              >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet.
                </h5>

                <p className="text-sm text-slate-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea minima suscipit sequi iure eos saepe assumenda numquam quibusdam ducimus molestias.
                </p>

                <div className="flex justify-between">
                  <Link
                    to={"/detail-article"}
                    className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </Card>
            </div>
          </div>

          <div className="col-span-1 mx-auto">
            <div className="max-w-sm">
              <Card
                imgAlt="Bag Purple"
                imgSrc={require("../../images/image-10.jpg")}
              >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet.
                </h5>

                <p className="text-sm text-slate-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea minima suscipit sequi iure eos saepe assumenda numquam quibusdam ducimus molestias.
                </p>

                <div className="flex justify-between">
                  <Link
                    to={"/detail-article"}
                    className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </Card>
            </div>
          </div>

          <div className="col-span-1 mx-auto">
            <div className="max-w-sm">
              <Card
                imgAlt="Bag Purple"
                imgSrc={require("../../images/image-11.jpg")}
              >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet.
                </h5>

                <p className="text-sm text-slate-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea minima suscipit sequi iure eos saepe assumenda numquam quibusdam ducimus molestias.
                </p>

                <div className="flex justify-between">
                  <Link
                    to={"/detail-article"}
                    className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="col-span-1 mx-auto">
            <div className="max-w-sm">
              <Card
                imgAlt="Bag Purple"
                imgSrc={require("../../images/image-12.jpg")}
              >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet.
                </h5>

                <p className="text-sm text-slate-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea minima suscipit sequi iure eos saepe assumenda numquam quibusdam ducimus molestias.
                </p>

                <div className="flex justify-between">
                  <Link
                    to={"/detail-article"}
                    className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </Card>
            </div>
          </div>

          <div className="col-span-1 mx-auto">
            <div className="max-w-sm">
              <Card
                imgAlt="Bag Purple"
                imgSrc={require("../../images/image-13.jpg")}
              >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet.
                </h5>

                <p className="text-sm text-slate-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea minima suscipit sequi iure eos saepe assumenda numquam quibusdam ducimus molestias.
                </p>

                <div className="flex justify-between">
                  <Link
                    to={"/detail-article"}
                    className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </Card>
            </div>
          </div>

          <div className="col-span-1 mx-auto">
            <div className="max-w-sm">
              <Card
                imgAlt="Bag Purple"
                imgSrc={require("../../images/image-14.jpg")}
              >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet.
                </h5>

                <p className="text-sm text-slate-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea minima suscipit sequi iure eos saepe assumenda numquam quibusdam ducimus molestias.
                </p>

                <div className="flex justify-between">
                  <Link
                    to={"/detail-article"}
                    className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-5">
          <div className="col-span-1 mx-auto">
            <div className="max-w-sm">
              <Card
                imgAlt="Bag Purple"
                imgSrc={require("../../images/image-15.jpg")}
              >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet.
                </h5>

                <p className="text-sm text-slate-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea minima suscipit sequi iure eos saepe assumenda numquam quibusdam ducimus molestias.
                </p>

                <div className="flex justify-between">
                  <Link
                    to={"/detail-article"}
                    className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </Card>
            </div>
          </div>

          <div className="col-span-1 mx-auto">
            <div className="max-w-sm">
              <Card
                imgAlt="Bag Purple"
                imgSrc={require("../../images/image-16.jpg")}
              >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet.
                </h5>

                <p className="text-sm text-slate-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea minima suscipit sequi iure eos saepe assumenda numquam quibusdam ducimus molestias.
                </p>

                <div className="flex justify-between">
                  <Link
                    to={"/detail-article"}
                    className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </Card>
            </div>
          </div>

          <div className="col-span-1 mx-auto">
            <div className="max-w-sm">
              <Card
                imgAlt="Bag Purple"
                imgSrc={require("../../images/image-17.jpg")}
              >
                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                  Lorem ipsum dolor sit amet.
                </h5>

                <p className="text-sm text-slate-400">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea minima suscipit sequi iure eos saepe assumenda numquam quibusdam ducimus molestias.
                </p>

                <div className="flex justify-between">
                  <Link
                    to={"/detail-article"}
                    className="rounded-lg bg-sky-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-sky-900 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Lihat Detail
                  </Link>
                </div>
              </Card>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center mt-10">
          <Pagination
            currentPage={1}
            onPageChange={onPageChange}
            showIcons={true}
            totalPages={100}
          />
        </div>
      </div>
    </div>
  );
}
