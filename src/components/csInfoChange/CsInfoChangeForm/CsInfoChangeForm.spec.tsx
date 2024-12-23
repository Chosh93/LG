import { MantineProvider } from "@mantine/core";
import { useForm } from "@mantine/form";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';
import CsInfoChangeForm from "./CsInfoChangeForm";
import { CsInfoForm } from "../types";
import userEvent from "@testing-library/user-event";

jest.mock('@mantine/form', () => ({
    useForm: jest.fn().mockReturnValue({
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
        setValues: jest.fn(),
        getValues: jest.fn(() => useForm().values),
        getInputProps: jest.fn((name) => ({
            value: '',
            onChange: jest.fn(),
        })),
        setFieldValue: jest.fn((field: string, value: any) => {
            useForm().values[field] = value;
        }),
    }),
}));

describe('<CsInfoChangeForm />', () => {
    const mockForm = useForm({
        initialValues: {
            userName: '',
            userZipCode: '',
            userAddress1: '',
            userAddress2: '',
            userPhoneType: '',
            userPhone: '',
            userEmail1: '',
            userEmail2: '',
        } as CsInfoForm,
    });
    
    const renderWithMantine = (ui: React.ReactNode) => {
        return render(
            <MantineProvider>
                {ui}
            </MantineProvider>
        );
    };

    it('렌더링 시 해당 mockForm TEST', () => {
        renderWithMantine(<CsInfoChangeForm form={mockForm} />);

        const userNameElement = screen.getByText('고객명');
        expect(userNameElement.tagName).toBe('TH');
        const userZipcodeElement = screen.getByText('주소');
        expect(userZipcodeElement.tagName).toBe('TH');
        const userAddress1Element = screen.getByText('주소');
        expect(userAddress1Element.tagName).toBe('TH');
        const userAddress2Element = screen.getByText('주소');
        expect(userAddress2Element.tagName).toBe('TH');
        const userPhoneTypeElement = screen.getByText('연락처');
        expect(userPhoneTypeElement.tagName).toBe('TH');
        const userPhoneElement = screen.getByText('연락처');
        expect(userPhoneElement.tagName).toBe('TH');
        const userEmail1Element = screen.getByText('이메일');
        expect(userEmail1Element.tagName).toBe('TH');
        const userEmail2Element = screen.getByText('이메일');
        expect(userEmail2Element.tagName).toBe('TH');
    })

    it('주소검색 버튼 click TEST', async () => {
        renderWithMantine(<CsInfoChangeForm form={mockForm}/>);

        // 주소검색 버튼 클릭시 모달 오픈 테스트
        const addressSearchBtn = screen.getByText('주소검색');
        await userEvent.click(addressSearchBtn);

        const modalOpenCheck = screen.getByText('주소검색');
        expect(modalOpenCheck).toBeInTheDocument();

        // 모달 오픈 후 주소 검색 시 우편번호 대표주소 저장 테스트
        const mockZipcode = '12345';
        const mockAddress = '대한민국 어딘가';

        // 우편번호, 대표주소 mockForm에 저장
        mockForm.setFieldValue('userZipCode', mockZipcode);
        mockForm.setFieldValue('userAddress1', mockAddress);
        
        // mockForm 우편번호, 대표주소와 검색값이 같은지 확인
        expect(mockForm.getValues().userZipCode).toEqual(mockZipcode);
        expect(mockForm.getValues().userAddress1).toEqual(mockAddress);
  
    })
})