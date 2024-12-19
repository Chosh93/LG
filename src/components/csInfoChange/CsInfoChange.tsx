
import CsInfoChangeStepper from "./CsInfoStepper/CsInfoStepper";
import CsInfoBox from "./CsInfoBox/CsInfoBox";
import CsInfoChangeForm from "./CsInfoChangeForm/CsInfoChangeForm";
import { Button, Flex } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useState } from "react";
import { CsInfoChangeProps } from "./types";
import RealNameAuthModal from "../LGModal/RealNameAuthModal/RealNameAuthModal";

export default function CsInfoChangeComp({stepper, infoBox, next, prev}: CsInfoChangeProps) {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const csInfoChangeForm = useForm({
      initialValues: {
          userName: '',
          userZipCode: '',
          userAddress1: '',
          userAddress2: '',
          userPhoneType: '',
          userPhone: '',
          userEmail1: '',
          userEmail2: '',
      }
  });

  const handleNext = () => {
    console.log('Form Values:', csInfoChangeForm.values);
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
      {stepper === 0 && <CsInfoChangeForm form={csInfoChangeForm} />}
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