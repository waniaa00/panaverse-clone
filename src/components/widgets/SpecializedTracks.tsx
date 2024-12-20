"use client";
import Wrapper from "@/components/shared/Wrapper";
import QuarterBox from "@/components/shared/QuarterBox";
import Image from "next/image";
import { useState } from "react";
import metaImg from "@/assets/images/meta.webp";
import aiImg from "@/assets/images/ai.webp";
import cncImg from "@/assets/images/cnc.webp";
import iotImg from "@/assets/images/iot.webp";
import gbImg from "@/assets/images/gb.webp";
import npImg from "@/assets/images/np.webp";


export const programsData = [
  {
    slug: "wmd",
    header: "Web 3.0 (Blockchain) and Metaverse Specialization",
    description:
      "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of the cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
    image: metaImg,
    quarters: [
      {
        header: "Quarter IV",
        description: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
        number: 5,
      },
    ],
  },
  {
    slug: "ai",
    header: "Artificial Intelligence (AI) and Deep Learning Specialization",
    description:
      "The AI Deep Learning specialization focuses on deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
    image: aiImg,
    quarters: [
      {
        header: "Quarter IV",
        description: "AC-351: Developing Planet-Scale Intelligent APIs and Python Programming",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AC-361: Deep learning and MLOps",
        number: 5,
      },
    ],
  },

  {
    slug: "cnc",
    header: "Cloud-Native Specialization",
    description:
      "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
    image: cncImg,
    quarters: [
      {
        header: "Quarter IV",
        description: "CN-351: Certified Kubernetes Application Developer (CKAD)",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
        number: 5,
      },
    ],
  },

  {
    slug: "iot",
    header: "The Ambient Computing and IoT Specialization",
    description:
      "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
    image: iotImg,
    quarters: [
      {
        header: "Quarter IV",
        description: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "AC-361: Embedded Programming using C and Rust",
        number: 5,
      },
    ],
  },

  {
    slug: "bio",
    header: "Genomics and Bioinformatics Specialization",
    description:
      "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
    image: gbImg,
    quarters: [
      {
        header: "Quarter IV",
        description: "Bio-351: Python for Biologists",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "Bio-361: Bioinformatics with Python",
        number: 5,
      },
    ],
  },
  {
    slug: "npa",
    header: "Network and Cloud Specialization",
    description:
      "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
    image: npImg,
    quarters: [
      {
        header: "Quarter IV",
        description: "NPA-351: CCNA 200-301 Certification",
        number: 4,
      },
      {
        header: "Quarter V",
        description: "NPA-361: Network Programmability and Automation",
        number: 5,
      },
    ],
  },

  
];

const SpecializedTracks = () => {
  const [selectedItem, setSelectedItem] = useState("wmd");
  const selectedItemData = programsData.find((item) => item.slug === selectedItem);

  return (
    <section>
      <Wrapper>
        {/* Header */}
        <div>
          <h2 className="text-5xl font-bold whitespace-pre-line">Specialized Tracks:</h2>
          <p className="mt-3 text-xl text-slate-600 max-w-screen-sm">
            After completing the first three quarters, participants will select one or more specializations consisting of two courses each:
          </p>
        </div>

        <div className="mt-10 flex flex-col-reverse lg:flex-row gap-x-6 gap-y-8">
          {/* Content Left */}
          <div className="shadow-xl sticky top-28 self-start basis-8/12  rounded-xl border border-slate-200 py-8 px-8">
            <h4 className="text-primary text-lg font-medium">Specialized Program</h4>
            <h3 className="text-2xl font-bold">{selectedItemData?.header}</h3>
            <p className="text-lg text-slate-600 mt-2">{selectedItemData?.description}</p>
            <button className="text-primary text-xl mt-4 underline font-semibold flex gap-x-2 items-end ">
              Learn More
              <svg
                className="mb-1.5"
                width={10}
                height={13}
                viewBox="0 0 8 11"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994"
                  stroke="#00616C"
                  strokeWidth={2}
                />
              </svg>
            </button>
            <div className="flex flex-col sm:flex-row gap-5 mt-8">
              {selectedItemData?.quarters.map((item) => (
                <QuarterBox
                  key={item.number}
                  header={item.header}
                  description={item.description}
                  number={item.number}
                />
              ))}
            </div>
          </div>

          {/* Content Right */}
          <div className="px-4 py-6 space-y-4 basis-4/12 flex-1">
            {programsData.map((item) => (
              <div
                key={item.slug}
                onClick={() => setSelectedItem(item.slug)}
                className={`flex gap-x-4 items-center cursor-pointer ${
                  selectedItem === item.slug ? "bg-slate-200" : ""
                }`}
              >
                <div className="flex-shrink-0 h-24 w-36">
                  <Image src={item.image} alt={item.header} className="h-24 object-cover rounded-md" />
                </div>
                <div>
                  <h4 className="text-primary font-medium">Specialized Program</h4>
                  <h3 className="text-xl font-semibold">{item.header}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
       
      </Wrapper>
    </section>
  );
};

export default SpecializedTracks;
