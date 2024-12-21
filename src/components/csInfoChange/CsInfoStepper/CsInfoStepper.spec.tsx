import { MantineProvider } from "@mantine/core";
import { render, screen } from "@testing-library/react";
import CsInfoChangeStepper from "./CsInfoStepper";
import '@testing-library/jest-dom';

describe('<CsInfoStepper />', () => {
    const mockProps = {
        active: 1,
    };

    const renderWithMantine = (ui: React.ReactNode) => {
        return render(
            <MantineProvider>
                {ui}
            </MantineProvider>
        );
    };

    it('렌더링 시 해당 mockProps 전달 TEST', () => {
        renderWithMantine(<CsInfoChangeStepper {...mockProps} />);

        // stepper 액티브 확인
        expect(screen.getByText('변경정보')).toBeInTheDocument();
        expect(screen.getByText('동의/서명')).toBeInTheDocument();
        expect(screen.getByText('구비서류')).toBeInTheDocument();

        
    });

    it('Stepper active 활성화 확인', () => {
        renderWithMantine(<CsInfoChangeStepper {...mockProps} />);

        const activeStep = screen.getByText('동의/서명');
        const activeButton = activeStep.closest('button');
        const activeAttribute = activeButton?.getAttribute('data-progress');
        expect(activeAttribute).toBe('true');
    });
});