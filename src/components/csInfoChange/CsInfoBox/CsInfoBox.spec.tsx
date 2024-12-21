import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // jest-dom 확장 사용
import CsInfoBox from './CsInfoBox';

describe('<CsInfoBox />', () => {
  const mockProps = {
    planName: '5G 프리미어 에센셜 / 85,000원',
    serviceName: '이동통신 (010-****-5678)',
  };

  const renderWithMantine = (ui: React.ReactNode) => {
    return render(
      <MantineProvider>
        {ui}
      </MantineProvider>
    );
  };

  it('렌더링 시 해당 mockProps 전달 TEST', () => {
    renderWithMantine(<CsInfoBox {...mockProps} />);

    // 요금제명 확인
    expect(screen.getByText('요금제명')).toBeInTheDocument();
    expect(screen.getByText(mockProps.planName)).toBeInTheDocument();

    // 가입서비스명 확인
    expect(screen.getByText('가입서비스명')).toBeInTheDocument();
    expect(screen.getByText(mockProps.serviceName)).toBeInTheDocument();
  });
});
