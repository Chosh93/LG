import { Button, Flex, Group, Select, Stack, Table, Text, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './CsnfoChangeForm.module.css';

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
                                    {...csInfoChangeForm.getInputProps('userName')}
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
                                    {...csInfoChangeForm.getInputProps('userZipCode')}
                                    readOnly
                                    onClick={() => {
                                        console.log('주소 검색 버튼 클릭!')
                                    }}
                                    rightSection={
                                        <Button
                                        className={classes.button}
                                            onClick={() => {
                                                // 주소 검색 로직 호출
                                                console.log('주소 검색 버튼 클릭!');
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
                                    {...csInfoChangeForm.getInputProps('userAddress1')}
                                    style={{ flex: 1}}
                                />
                            </Group>
                            <TextInput
                                placeholder='상세주소를 입력하세요.'
                                {...csInfoChangeForm.getInputProps('userAddress2')}
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
                                <Select/>
                                <TextInput
                                    placeholder="'-'없이 숫자만 입력하세요"
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
                                    {...csInfoChangeForm.getInputProps('userEmail1')}
                                />
                                @
                                <TextInput 
                                    style={{flex: 1, marginRight: '5px', marginLeft: '5px'}}
                                    {...csInfoChangeForm.getInputProps('userEmail2')}
                                />
                                <Select style={{flex: 1, marginRight: '5px', marginLeft: '5px'}}/>
                                <Button className={classes.button} style={{marginLeft: '5px'}}>인증</Button>
                            </Flex>
                        </Table.Td>
                    </Table.Tr>
                </Table.Tbody>
            </Table>
        </>
    )
}

