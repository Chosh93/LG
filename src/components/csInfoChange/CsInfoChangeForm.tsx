import { Stepper, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconSearch } from '@tabler/icons-react';
import { useState } from 'react';

export default function CsInfoChangeForm() {
    
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

    return (
        <>
            <TextInput 
                label="고객명"
                placeholder='이름을 입력하세요.'
                key={csInfoChangeForm.key('userName')}
                {...csInfoChangeForm.getInputProps('userName')}
            />
            <TextInput
                label="주소"
                rightSection={<IconSearch/>}
                key={csInfoChangeForm.key('userZipCode')}
                {...csInfoChangeForm.getInputProps('userZipCode')}
            />
            <TextInput
                key={csInfoChangeForm.key('userAddress1')}
                {...csInfoChangeForm.getInputProps('userAddress1')}
            />
            <TextInput
                placeholder='상세 주소를 입력하세요.'
                key={csInfoChangeForm.key('userAddress2')}
                {...csInfoChangeForm.getInputProps('userAddress2')}
            />
        </>
    )
}