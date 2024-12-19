import { Stepper } from "@mantine/core";

export interface CsInfoChangeStepperProps {
    active: number;
}

export default function CsInfoChangeStepper({active}: CsInfoChangeStepperProps) {
    
    return (
        <>
            <Stepper active={active} style={{marginTop: '20px'}}>
                <Stepper.Step label="변경정보" />
                <Stepper.Step label="동의/서명" />
                <Stepper.Step label="구비서류" />
            </Stepper>
        </>
    )
}