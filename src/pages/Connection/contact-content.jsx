import {
  faEnvelope,
  faLocationDot,
  faTabletScreenButton,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, TextInput } from "flowbite-react";
import Form from "react-validation/build/form";
import React from "react";

export default function ContactContent() {
  return (
    <div className="container flex justify-center items-center mt-20">
      <div className="w-3/4">
        <div className="mt-10">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faTabletScreenButton}
                  className="text-3xl text-sky-700"
                />
                <p className="text-base text-slate-400 mt-3">
                  Phone: +62896334567
                </p>
                <p className="text-base text-slate-400">Fax: +62896334567</p>
              </div>
            </div>

            <div className="col-span-1">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-3xl text-sky-700"
                />
                <p className="text-base text-slate-400 mt-3">PO BOX 54789</p>
                <p className="text-base text-slate-400">4321 Your Address</p>
                <p className="text-base text-slate-400">
                  Yout City, Your Country
                </p>
              </div>
            </div>

            <div className="col-span-1">
              <div className="text-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="text-3xl text-sky-700"
                />
                <p className="text-base text-slate-400 mt-3">
                  Info@company.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="col-span-1">
              <Form action="" className="flex flex-col gap-4">
                <TextInput
                  id="username"
                  type="text"
                  placeholder="Full Name"
                  required={true}
                />

                <TextInput
                  id="email"
                  type="email"
                  placeholder="Email Address"
                  required={true}
                />

                <TextInput
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  required={true}
                />
              </Form>
            </div>

            <div className="col-span-1">
              <Form>
                <TextInput
                  type="text"
                  name="message"
                  placeholder="Message"
                  className="w-full rounded"
                  sizing="lg"
                />
              </Form>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <Button type="submit">
            Send Message
          </Button>
        </div>
      </div>
    </div>
  );
}
