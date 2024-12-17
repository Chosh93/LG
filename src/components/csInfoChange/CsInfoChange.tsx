
import { useState } from "react";
import CsInfoChangeStepper from "./CsInfoStepper";
import CsInfoBox from "./CsInfoBox";
import CsInfoChangeForm from "./CsInfoChangeForm";

export default function CsInfoChangeComp() {
 const [active, setActive] = useState<number>(0);
     const nextStep = () => setActive((current) => (current < 3) ? current + 1 : current);
     const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));
   return (
     <>
       <CsInfoChangeStepper active={active}/>
       <CsInfoBox />
       {active === 0 && <CsInfoChangeForm />}
     </>
   );
};