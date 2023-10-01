"use client";
import { Image, Link } from "@nextui-org/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
export default function Homepage() {
  return (
    <>
      <main className="flex flex-col md:flex-row gap-2 min-w-screen min-h-screen justify-center items-center ">
        <div className="md:w-1/2 w-1/2  flex justify-center items-center ">
          {/* image */}
          <div className=" mt-10  ">
            <Image
              className="  rounded-full"
              src="/shiva.jpg"
              alt="image of shiva"
            />
          </div>
        </div>

        <div className="md:w-1/2 container my-auto flex  flex-col justify-center gap-2 items-center">
          <p> Hello ! </p>
          <p>I am SHIVA</p>
          <p> I like to build software</p>
          <div className="flex gap-3 ">
            {/* contact div */}
            <div>
              {/* github */}
              <div>
              <Link href="https://github.com/baramsivaramireddy">
              <AiFillGithub  size={25}  />

              </Link>
              </div>
            </div>
            <div>
              {/* linkedln */}
              <div>
              <Link href="https://www.linkedin.com/in/siva-baram-1269261aa/">
              <AiFillLinkedin size={25}  />

              </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
