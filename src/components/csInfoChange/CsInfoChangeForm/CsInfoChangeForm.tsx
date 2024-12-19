import { Button, Flex, Group, Modal, Select, Stack, Table, Text, TextInput, Title } from '@mantine/core';
import classes from './CsnfoChangeForm.module.css';
import { useState } from 'react';
import SearchAddress from 'react-daum-postcode';
import { CsInfoChangeFormProps } from '../types';

export default function CsInfoChangeForm({form}: CsInfoChangeFormProps) {
    const [modalOpen, setModalOpen] = useState<boolean>(false);

    const phoneSelect = [
        { value: 'mobile', label: '휴대폰' },
        { value: 'landline', label: '유선전화' },
    ];

    const emailSelect = [
        {value: '', label: '직접입력'},
        {value: 'gmail.com', label: 'gmail.com'},
        {value: 'naver.com', label: 'naver.com'},
        {value: 'daum.com', label: 'daum.com'}, 
    ];

    const searchComplete = (data: any) => {
        form.setFieldValue('userZipCode', data.zonecode);
        form.setFieldValue('userAddress1', data.address);
        setModalOpen(false);
    }

    return (
        <>
            <Stack gap="sm">
                <Flex gap="lg">
                <Title order={6}>변경할 정보를 입력해 주세요</Title>
                <Text className={classes.title_ico_text} size='xs'>변경할 항목만 입력해 주세요.</Text>
                </Flex>
            </Stack>
            <Table horizontalSpacing="md" verticalSpacing="md" withRowBorders={false}>
                <Table.Tbody>
                    <Table.Tr>
                        <Table.Th>
                            고객명
                        </Table.Th>
                        <Table.Td>
                            <Group>
                                <TextInput
                                    placeholder='이름을 입력하세요.'
                                    {...form.getInputProps('userName')}
                                    style={{flex: 1}}
                                />
                                <Button className={classes.button} style={{ marginLeft: '10px'}}>실명확인</Button>
                            </Group>
                        </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Th>
                            주소
                        </Table.Th>
                        <Table.Td>
                            <Group>
                                <TextInput
                                    {...form.getInputProps('userZipCode')}
                                    readOnly
                                    onClick={() => {
                                        console.log('주소 검색 버튼 클릭!')
                                    }}
                                    rightSection={
                                        <Button
                                        className={classes.button}
                                            onClick={() => {
                                                // 주소 검색 로직 호출
                                                setModalOpen(true);
                                            }}
                                            fullWidth
                                        >
                                            주소검색
                                        </Button>
                                    }
                                    rightSectionWidth={100}
                                />
                                <TextInput
                                    disabled
                                    {...form.getInputProps('userAddress1')}
                                    style={{ flex: 1}}
                                />
                            </Group>
                            <TextInput
                                placeholder='상세주소를 입력하세요.'
                                value={form.values.userAddress2}
                                onChange={(value) => form.setFieldValue('userAddress2', value.target.value)}
                                style={{marginTop: '10px'}}
                            />
                        </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Th>
                            연락처
                        </Table.Th>
                        <Table.Td>
                            <Group>
                                <Select 
                                    data={phoneSelect}
                                    value={form.values.userPhoneType}
                                    onChange={(value) => form.setFieldValue('userPhoneType', value as string || '')}
                                />
                                <TextInput
                                    placeholder="'-'없이 숫자만 입력하세요"
                                    value={form.values.userPhone}
                                    onChange={(value) => form.setFieldValue('userPhone', value.target.value)}
                                    style={{flex: 1}}
                                />
                            </Group>
                        </Table.Td>
                    </Table.Tr>
                    <Table.Tr>
                        <Table.Th>
                            이메일
                        </Table.Th>
                        <Table.Td >
                            <Flex align='center' style={{width: '100%'}}>
                                <TextInput 
                                    style={{flex: 1, marginRight: '5px'}}
                                    placeholder='이메일 주소를 입력해주세요'
                                    {...form.getInputProps('userEmail1')}
                                />
                                @
                                <TextInput 
                                    style={{flex: 1, marginRight: '5px', marginLeft: '5px'}}
                                    {...form.getInputProps('userEmail2')}
                                />
                                <Select 
                                    data={emailSelect}
                                    value={form.values.userEmail2} 
                                    onChange={(value) => form.setFieldValue('userEmail2', value as string || '')}
                                    allowDeselect={false}
                                    style={{flex: 1, marginRight: '5px', marginLeft: '5px'}}
                                />
                                <Button className={classes.button} style={{marginLeft: '5px'}}>인증</Button>
                            </Flex>
                        </Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>
            <Modal title='주소 검색' opened={modalOpen} onClose={() => setModalOpen(false)}>
                <SearchAddress onComplete={searchComplete} autoClose/>
            </Modal>
        </>
    )
}

