import Wrapper from "@/components/shared/Wrapper";
import HeroPoster from "@/assets/images/hero.webp";
import Image from "next/image";
// components
import Button from "@/components/shared/Button";

const Hero = () => {
  return (
    <section className="">
      <Wrapper>
        <div className="flex flex-col md:flex-row items-center">
          {/* left side */}
          <div className="flex-1">
            <h4 className="text-primary font-semibold text-lg mt-4">
              Presidential Initiative for Artificial Intelligence and Computing
              (PIAIC)
            </h4>
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 md:text-red-400 lg:text-gray-950">
              Certified Web 3.0 and Metaverse Developer
            </h1>
            <p className="mt-6 text-xl text-slate-600">
              A One and Quarter Years Panaverse DAO Earn as you Learn Program
              Getting Ready for the Next Generation of the Internet
            </p>
            <p className="mt-6  text-xl text-slate-600">
              Consolidating Web 3.0 Metaverse Artificial Intelligence (AI) Cloud
              Edge Ambient Computing Network Automation and Bioinformatics
              Technologies
            </p>
            <div className="mt-6">
              <Button text={"Enroll Now"} />
              <br />
            </div>
          </div>

          {/* Right Side  */}
          <div className="flex-1">
            <Image
              src={HeroPoster}
              alt="Hero Poster"
              width={500}
              height={500}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
