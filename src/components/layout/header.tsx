import Image from "next/image"
import Logo from "@/assets/images/logo.webp"
import Link from "next/link"
import Wrapper from "@/components/shared/Wrapper"
const header = () => {
  return (
    <header className="sticky top-0 z-10 bg-white">
    <Wrapper>
   <div className="flex justify-between py-4 items-center">
       <div>
        {/* logo */}
        <Image src={Logo}
         alt="Panaverse dao logo" />
     </div>

     {/* navigation bar */}
      <ul className="flex space-x-8 font-medium hover:text-primary">
         <li>
<Link href={"/"}>
           Home
           </Link>
         </li>
         <li>
           <Link href={"/courses"}>
             Courses
           </Link>
         </li>
       </ul>

     </div>
     </Wrapper>
     </header>
   )
  
 }

export default header


