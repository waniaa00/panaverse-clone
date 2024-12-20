import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import outcome from "@/assets/images/female.webp";
import { IoCheckmarkCircleOutline } from "react-icons/io5";


const outcomePoints = ["Product Ownership", "Freelancing", "Global Marketing bt Panaverse DAO", "Boosting Economy"]


const ProgramOutcome = () => {
  return (
    <section className="mt-16 md:mt-28">
      <Wrapper>
        <div className="flex gap-x-8 items-center flex-col-reverse md:flex-row">
          {/* Left image */}
          <div className="flex-1">
            <Image src={outcome} alt="program outcome" />
          </div>
          {/* Right Content  */}
          <div className="flex-1">
            <h2 className="font-bold text-5xl"> The Output for Participants of the Program</h2>
            <p className="mt-4 text-slate-600 text-lg ">
             
              As a graduate of this program, you will own valuable products such
              as Full-Stack App Templates, AR and VR Experiences, and APIs that
              are marketed globally by the Panaverse DAO. You will also have the
              opportunity to offer your services at a rate of $50 per hour,
              providing a path to financial stability while contributing to the
              growth of Pakistan's software exports.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-x-2 gap-y-4 ">
                {outcomePoints.map((item, i) => (
                    <div key={i} className="flex items-center gap-x-2">
                       
                        <IoCheckmarkCircleOutline className="h-10 w-10 flex-shrink-0" />
                        
                        <h3 className="font-medium text-lg ">{item}</h3>
                    </div>
                ))}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default ProgramOutcome;
