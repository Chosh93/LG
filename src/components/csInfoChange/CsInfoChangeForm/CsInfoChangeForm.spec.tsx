import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import CsInfoChangeForm from './CsInfoChangeForm';
import { useCsChangeForm } from '@/utils/hooks/form/CsInfoChange/useCsChangeForm';
import '@testing-library/jest-dom';

// Mock the useCsChangeForm hook
jest.mock('@/utils/hooks/form/CsInfoChange/useCsChangeForm', () => ({
  useCsChangeForm: jest.fn(),
}));

describe('CsInfoChangeForm', () => {
  beforeEach(() => {
    const mockForm = {
      getInputProps: jest.fn((field: string) => ({
        name: field,
        onChange: jest.fn(),
        value: '',
      })),
      setFieldValue: jest.fn(),
      values: {
        userName: '',
        userZipCode: '',
        userAddress1: '',
        userAddress2: '',
        userPhoneType: '',
        userPhone: '',
        userEmail1: '',
        userEmail2: '',
      },
    };

    (useCsChangeForm as jest.Mock).mockReturnValue({ form: mockForm });
  });

  test('renders all input fields and buttons', () => {
    render(<CsInfoChangeForm form={useCsChangeForm().form} />);

    // Check for input fields
    expect(screen.getByPlaceholderText('이름을 입력하세요.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('상세주소를 입력하세요.')).toBeInTheDocument();
    expect(screen.getByPlaceholderText("'-'없이 숫자만 입력하세요")).toBeInTheDocument();
    expect(screen.getByPlaceholderText('이메일 주소를 입력해주세요')).toBeInTheDocument();

    // Check for buttons
    expect(screen.getByText('실명확인')).toBeInTheDocument();
    expect(screen.getByText('주소검색')).toBeInTheDocument();
    expect(screen.getByText('인증')).toBeInTheDocument();

    // Check for modal
    expect(screen.queryByText('주소 검색')).not.toBeInTheDocument();
  });

  test('opens and closes the modal on button click', async () => {
    render(<CsInfoChangeForm form={useCsChangeForm().form} />);

    const addressSearchButton = screen.getByText('주소검색');
    fireEvent.click(addressSearchButton);

    // Modal should open
    expect(await screen.findByText('주소 검색')).toBeInTheDocument();

    const closeModalButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeModalButton);

    // Modal should close
    await waitFor(() => {
      expect(screen.queryByText('주소 검색')).not.toBeInTheDocument();
    });
  });

  test('updates form values on input change', () => {
    const { form } = useCsChangeForm();
    render(<CsInfoChangeForm form={form} />);

    const nameInput = screen.getByPlaceholderText('이름을 입력하세요.');
    fireEvent.change(nameInput, { target: { value: '홍길동' } });

    expect(form.setFieldValue).toHaveBeenCalledWith('userName', '홍길동');

    const phoneInput = screen.getByPlaceholderText("'-'없이 숫자만 입력하세요");
    fireEvent.change(phoneInput, { target: { value: '01012345678' } });

    expect(form.setFieldValue).toHaveBeenCalledWith('userPhone', '01012345678');
  });
});
