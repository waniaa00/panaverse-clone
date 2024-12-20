import header from "@/components/layout/header";
import Image from "next/image";
import Hero from "@/components/widgets/Hero";
import CoreTracks from "@/components/widgets/CoreTracks";
import SpecializedTracks from "@/components/widgets/SpecializedTracks";
import ProgramOutcome from "@/components/widgets/ProgramOutcome";
import Footer from "@/components/layout/Footer";
import EndProgram from "@/components/widgets/EndProgram";

export default function Home() {
  return (
    <>
      <main>
        
        <Hero />
        <CoreTracks />
        <SpecializedTracks />
        <ProgramOutcome/>
        <EndProgram/>
        <Footer/>
      </main>
    </>
  );
}
