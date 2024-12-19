
import { useState } from "react";
import CsInfoChangeStepper from "./CsInfoStepper";
import CsInfoBox, { CsInfoBoxProps } from "./CsInfoBox";
import CsInfoChangeForm from "./CsInfoChangeForm";
import { Button, Flex, Group } from "@mantine/core";

interface CsInfoChangeProps {
  stepper: number;
  prev: () => void;
  next: () => void;
  infoBox: CsInfoBoxProps;
}

export default function CsInfoChangeComp({stepper, infoBox, next, prev}: CsInfoChangeProps) {

  return (
    <>
      <CsInfoChangeStepper active={stepper}/>
      <CsInfoBox planName={infoBox.planName} serviceName={infoBox.serviceName} />
      {stepper === 0 && <CsInfoChangeForm />}
      <Flex justify="space-between" style={{marginTop: '15px'}}>
        <Button onClick={prev}>이전</Button>
        <Button onClick={next}>다음</Button>
      </Flex>
    </>
  );
};