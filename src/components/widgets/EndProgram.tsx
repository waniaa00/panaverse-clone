import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.webp";
import robo from "@/assets/images/ChatGPT.jpeg"
import Wrapper from "@/components/shared/Wrapper";
import {
  SlSocialTwitter,
  SlSocialFacebook,
  SlSocialGithub,
} from "react-icons/sl";
import { TiSocialYoutube } from "react-icons/ti";

const EndProgram = () => {
  return (
    <section className="mt-20 lg:mt-28">
      <Wrapper>
        <div  className="flex gap-x-8 items-center flex-col-reverse md:flex-row">
          {/* left logo */}
          <div className="flex-1  justify-center">
            <div>
              {/* logo */}
              <Image src={Logo} alt="Panaverse dao logo" />
            </div>
            <p className="mt-3 text-lg max-w-screen-sm text-slate-600">
              Certified Web 3.0 and Metaverse Developer A One and Quarter Years
              Panaverse DAO Earn as you Learn Program Getting Ready for the Next
              Generation of the Internet.
            </p>

            <div className="flex flex-col justify-between mt-10">
              <h3 className="font-bold text-lg">Programs </h3>
              <ul className="text-sm text-slate-600">
                <li className=" hover:text-primary">
                  Web 3.0 and Metaverse Developer
                </li>
                <li className=" hover:text-primary">Artificial Intelligence</li>
                <li className=" hover:text-primary">CLoud-Native Computing</li>
                <li className=" hover:text-primary">
                  Ambient Computing and IoT
                </li>
                <li className=" hover:text-primary">
                  Genomics and Bioinformatics
                </li>
                <li className=" hover:text-primary">
                  Network Programmability and Automation
                </li>
              </ul>
            </div>
            <div className="flex flex-col md:flex-col justify-between mt-10">
              <h3 className="font-bold text-lg">Pages </h3>
              <ul className="text-sm text-slate-600"></ul>

              <li className=" hover:text-primary">Home</li>
              <li className=" hover:text-primary">Quarter I</li>
              <li className=" hover:text-primary">Quarter II</li>
              <li className=" hover:text-primary">Quarter III</li>
            </div>
            <div className="flex gap-x-7 mt-8">
              <SlSocialTwitter size={30} />
              <SlSocialFacebook size={30} />
              <SlSocialGithub size={30} />
              <TiSocialYoutube size={30} />
            </div>
          </div>
          <div className="flex-1 ">
            <Image src={robo} alt="program outcome" className="rounded"/>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default EndProgram;
