import Button from "@/components/shared/Button";
import Wrapper from "@/components/shared/Wrapper";
import QuarterBox from "@/components/shared/QuarterBox";

const CoreTracksData = [
  {
    header: "Quarter I",
    description: "CS-101: Object-Oriented Programming using Typescript",
    number: 1,
  },
  {
    header: "Quarter II",
    description:
      "W2-201: Developing PLanet-Scale Web 2.0 Serverless Cloud CLoud Apps and APIs using Next.js13 and Cloud Development kit (CDK) for Terraform",
    number: 2,
  },
  {
    header: "Quarter III",
    description:
      "$-101: Dollar Making Bootcamp-Full-Stack Template and API Product Development",
    number: 3,
  },
];

const CoreTracks = () => {
  const header = " Core Courses \n (Common in All Specialization):";
  return (
    <section className=" mt-16 lg:mt-28">
      <Wrapper>
        {/* content */}
        <div className="max-w-screen-md">
          <h4 className="text-primary font-semibold text-lg mt-4">
            Program of Studies
          </h4>
          <h2 className="text-5xl font-bold whitespace-pre-line">{header}</h2>
          <p className="mt-3 text-xl text-slate-600">
            Every participant of the program will start by completing the
            following three core courses:
          </p>
          <div className="mt-5">
            <Button text="Learn More" />
          </div>
        </div>
        {/* Boxes */}
        <div className="my-20 flex flex-col gap-y-6 md:flex-row md:gap-x-8">
  {CoreTracksData.map((item, i) => (
      <QuarterBox 
      key={item.number}
       header={item.header}
       description={item.description}
       number={i + 1}
       
       />
     
    ))
    }
</div>

      </Wrapper>
    </section>
  );
};

export default CoreTracks;

