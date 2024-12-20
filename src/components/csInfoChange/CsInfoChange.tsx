
import CsInfoChangeStepper from "./CsInfoStepper/CsInfoStepper";
import CsInfoBox from "./CsInfoBox/CsInfoBox";
import CsInfoChangeForm from "./CsInfoChangeForm/CsInfoChangeForm";
import { Button, Flex } from "@mantine/core";
import { useState } from "react";
import { CsInfoChangeProps } from "./types";
import RealNameAuthModal from "../LGModal/RealNameAuthModal/RealNameAuthModal";
import { useCsChangeForm } from "@/utils/hooks/form/CsInfoChange/useCsChangeForm";
import CsInfoChangeAgree from "./CsInfoChangeAgree/CsInfoChangeAgree";

export default function CsInfoChangeComp({stepper, infoBox, next, prev}: CsInfoChangeProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const { form } = useCsChangeForm();

  const handleNext = () => {
    console.log('Form Values:', form.values);
    console.log(stepper);
    next();
  };

  // 모달 열기 핸들러
  const handleModalOpen = () => {
    setModalOpen(true);
  };

  // 모달 닫기 핸들러
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <CsInfoChangeStepper active={stepper}/>
      <CsInfoBox planName={infoBox.planName} serviceName={infoBox.serviceName} />
      {stepper === 0 && <CsInfoChangeForm form={form} />}
      {stepper === 1 && <CsInfoChangeAgree />}
      <Flex justify="space-between" style={{marginTop: '15px'}}>
        <Button onClick={prev}>이전</Button>
        <Button onClick={handleNext}>다음</Button>
      </Flex>
      <Flex style={{marginTop: '20px'}}>
        <Button onClick={handleModalOpen}>실명확인 실패 시</Button>
      </Flex>
      <RealNameAuthModal opened={modalOpen} onClose={handleModalClose}/>
    </>
  );
};