'use client';

import CsInfoChangeComp from "@/components/csInfoChange/CsInfoChange";
import { useState } from "react";

export default function CsInfoChange() {
  const [active, setActive] = useState<number>(0);
    const nextStep = () => setActive((current) => (current < 3) ? current + 1 : current);
    const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

    const infoBox = {
      planName: "5G 프리미어 에센셜 / 85,000원",
      serviceName: "이동통신 (010-****-5678)"
    }
  return (
    <>
      <CsInfoChangeComp stepper={active} infoBox={infoBox} prev={prevStep} next={nextStep}/>
    </>
  );
}
