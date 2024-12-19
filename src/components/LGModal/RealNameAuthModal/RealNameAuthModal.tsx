import {
    Modal,
    TextInput,
    Box,
    Button,
    Group, Text,
    Table, Flex
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconInfoCircle } from '@tabler/icons-react';

interface RealNameAuthModalProps {
    opened: boolean;
    onClose: () => void;
}

export default function RealNameAuthModal({ opened, onClose }: RealNameAuthModalProps) {
    const form = useForm({
        initialValues: {
            name: '',
            residentNumber: '',
            registrationDate: '',
            dateOfBirth: '',
            dateOfRegistration: ''
        }
    });

    const handleCancel = () => {
        form.reset();
        onClose();
    }
    return (
        <Modal
            withCloseButton={false}
            opened={opened}
            onClose={onClose}
            title="KIS 실명등록"
            size="xl"
        >
            <Box>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <Table horizontalSpacing="md" verticalSpacing="md" withRowBorders={false}>
                        <Table.Tbody>
                            {/* 성명 */}
                            <Table.Tr>
                                <Table.Th>
                                    성명
                                </Table.Th>
                                <Table.Td>
                                    <TextInput
                                        required
                                        {...form.getInputProps('name')}
                                    />
                                </Table.Td>
                            </Table.Tr>

                            {/* 주민등록번호 */}
                            <Table.Tr>
                                <Table.Th>
                                    주민등록번호
                                </Table.Th>
                                <Table.Td>
                                    <TextInput
                                        required
                                        placeholder="920101-1******"
                                        {...form.getInputProps('residentNumber')}
                                    />
                                </Table.Td>
                            </Table.Tr>

                            {/* 주민등록 발급일자 */}
                            <Table.Tr>
                                <Table.Th>
                                    주민등록 발급일자
                                </Table.Th>
                                <Table.Td>
                                    <Flex gap="sm">
                                        <TextInput
                                            placeholder="YYYY-MM-DD"
                                            {...form.getInputProps('registrationDate')}
                                        />
                                        <Text>
                                            <IconInfoCircle size={16} style={{ display: 'inline-block', marginRight: '4px', color: 'red' }} />
                                            미성년자는 생략 가능합니다
                                        </Text>
                                    </Flex>
                                </Table.Td>
                            </Table.Tr>

                            {/* 대리자 연락처 */}
                            <Table.Tr>
                                <Table.Th>
                                    대리자 연락처
                                </Table.Th>
                                <Table.Td>
                                    <TextInput
                                        required
                                        placeholder="'-'없이 숫자만 입력하세요"
                                        {...form.getInputProps('dateOfBirth')}
                                    />
                                </Table.Td>
                            </Table.Tr>

                            {/* 대리자 휴대폰 */}
                            <Table.Tr>
                                <Table.Th>
                                    대리자 휴대폰
                                </Table.Th>
                                <Table.Td>
                                    <Flex gap="sm">
                                    <TextInput
                                        required
                                        placeholder="'-'없이 숫자만 입력하세요"
                                        {...form.getInputProps('dateOfRegistration')}
                                    />
                                    <Text>
                                        <IconInfoCircle size={16} style={{ display: 'inline-block', marginRight: '4px', color: 'red' }} />
                                        처리결과가 SMS로 송부됩니다
                                    </Text>
                                    </Flex>
                                </Table.Td>
                            </Table.Tr>
                        </Table.Tbody>
                    </Table>

                    {/* 안내사항 */}
                    <Box>
                    <IconInfoCircle size={16} style={{ display: 'inline-block', marginRight: '4px', color: 'red' }} />
                        안내사항
                        <Text size="sm" c="dimmed">
                            • 발급된 발급일자에 맞추어 카드발급처(은행)으로 처리됩니다.
                            <br />
                            • 문의전용휴대전화 (상담시간/평일 02-3771-1030, ARS 1600-1522, Fax 02-6008-5666)로 문의 바랍니다.
                        </Text>
                    </Box>

                    {/* 버튼 그룹 */}
                    <Group justify="center" mt="lg">
                        <Button variant="default" onClick={handleCancel}>취소</Button>
                        <Button type="submit">저장</Button>
                    </Group>
                </form>
            </Box>
        </Modal>
    );
}