import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faCalendarDay, faImage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

export default function ArticleDetail() {
  return (
    <div className="container flex justify-center items-center">
      <div className="w-3/4 mt-44 mb-6">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-3">
            <img
              src={require("../../images/image-11.jpg")}
              alt="Thumbnail"
              className="mx-auto rounded-md w-10/12"
            />

            <h1 className="text-2xl text-sky-700 font-bold mb-7 mt-4 text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing
            </h1>

            <p className="text-sm text-justify mb-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Asperiores maiores sed porro. Quae laboriosam pariatur consectetur
              ut neque aliquam quidem qui odio, doloremque iure labore.
            </p>

            <p className="text-sm text-justify mb-3">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi, ratione reprehenderit harum vitae tempore incidunt totam optio molestias alias quo veritatis. Repudiandae aspernatur, rerum consequatur eligendi alias maxime sapiente et aliquid mollitia. A nemo quo nulla, velit neque voluptas ad corrupti deserunt. Enim earum eligendi et soluta, ratione repellat dicta unde deserunt error repellendus ab voluptate placeat commodi aut exercitationem magni corporis ex deleniti eaque, eos itaque laborum! Repellat quia dolorem aspernatur reprehenderit voluptatum? Ipsum labore saepe pariatur error earum dicta quae libero, omnis magnam vel vero veniam excepturi optio praesentium aut recusandae mollitia a? Non totam omnis nam consequatur ea ipsum labore delectus velit, error quas officia cum, esse quasi nobis explicabo a. Assumenda accusamus animi repudiandae omnis obcaecati.
            </p>

            <p className="text-sm text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi repellat quaerat harum illum similique voluptatum amet vero molestiae ratione vitae sint, quia voluptate saepe explicabo ea debitis optio eius necessitatibus, odio culpa laboriosam eos delectus placeat. Commodi voluptatum maiores modi cum nam, nihil porro soluta, non, eos sed iste doloribus consectetur ipsum ex quis reiciendis architecto adipisci blanditiis minus atque dicta? Similique beatae consequatur impedit amet ipsa, quasi repudiandae illum atque velit nisi accusantium, dolore eveniet est dolores assumenda iure et quod quaerat pariatur tenetur sit! Possimus, delectus. Voluptates ab blanditiis quis labore, voluptatem tenetur obcaecati in molestias iste dolorum nihil esse repellendus consequatur veniam impedit? Ex, rerum labore maxime deserunt atque modi excepturi doloribus fugit. Natus sit dolores sint. Architecto, labore! Saepe rem quasi earum, veniam quis perferendis. A harum facilis amet expedita eius recusandae. Natus voluptatem necessitatibus deleniti facere nihil accusantium magnam totam doloremque inventore quibusdam hic laborum, numquam architecto animi cumque! Vitae deserunt enim molestiae, dolorum illo ipsa tempora quidem omnis quisquam minima eos sunt facere voluptatum quo nobis harum vero voluptatibus nulla aperiam perferendis placeat cum laboriosam. Dolorum, facere? Neque voluptas, officiis eius molestiae hic distinctio culpa minima doloribus quos nesciunt sequi, omnis incidunt cum commodi.
            </p>
          </div>

          <div className="col-span-1 pl-10">
            <div className="flex justify-center items-center">
            <div className="bg-sky-600 w-44 rounded-md">
              <h6 className="font-bold text-center text-white text-lg">Detail Artikel</h6>
            </div>
            </div>

            <div className="mb-5 mt-7">
              <span>
                <FontAwesomeIcon icon={faImage} className="text-lg" />
                <span className="ml-1 font-bold text-base">Foto</span>
              </span>

              <img src={require("../../images/user.png")} alt="Creator" className="w-14" />
            </div>

            <div className="mb-5 mt-5">
              <span>
                <FontAwesomeIcon icon={faLinkedin} className="text-lg" />
                <span className="ml-1 font-bold text-base">LinkedIn</span>
              </span>

              <p className="text-sm">
                Creator_User
              </p>
            </div>

            <div className="mb-5 mt-5">
              <span>
                <FontAwesomeIcon icon={faFacebook} className="text-lg" />
                <span className="ml-1 font-bold text-base">Facebook</span>
              </span>

              <p className="text-sm">
                Creator_User
              </p>
            </div>

            <div className="mb-5 mt-5">
              <span>
                <FontAwesomeIcon icon={faCalendarDay} className="text-base" />
                <span className="ml-1 font-bold text-base">Tanggal Pembuatan</span>
              </span>

              <p className="text-sm">
                Kamis, 29 Desember 2022, 19:43:52
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
