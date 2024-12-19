import { Box, Title, Text, Flex, Stack } from "@mantine/core";
import { IconDeviceMobile } from "@tabler/icons-react";

export interface CsInfoBoxProps {
    planName: string;
    serviceName: string;
}

export default function CsInfoBox({planName, serviceName}: CsInfoBoxProps) {
  return (
    <Box p="md"  style={{ border: '3px solid #F7F7F7', borderRadius: '8px'}}>
      <Flex align="flex-start" gap="md">
        {/* 아이콘 */}
        <IconDeviceMobile size={48} stroke={1.5} />

        {/* 텍스트 그룹 */}
        <Stack gap="sm" style={{ flex: 1 }}>
          {/* 요금제명과 요금정보 */}
          <Flex align="center" gap="lg">
            <Title order={6} style={{ minWidth: "120px" }}>요금제명</Title>
            <Text>5G 프리미어 에센셜 / 85,000원</Text>
            <Text>{planName}</Text>
          </Flex>

          {/* 가입서비스명과 정보 */}
          <Flex align="center" gap="lg">
            <Title order={6} style={{ minWidth: "120px" }}>가입서비스명</Title>
            <Text>이동통신 (010-****-5678)</Text>
            <Text>{serviceName}</Text>
          </Flex>
        </Stack>
      </Flex>
    </Box>
  );
}
