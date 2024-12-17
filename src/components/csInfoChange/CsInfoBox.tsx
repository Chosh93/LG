import { Box, Title,Text } from "@mantine/core";
import { IconDeviceMobile } from "@tabler/icons-react";

export default function CsInfoBox() {
    return (
        <>
            <Box>
                <Box>
                    <IconDeviceMobile size={48} stroke={1.5} />
                </Box>
                <Box>
                    <Title order={6}>
                    요금제명
                    </Title>
                    <Text >
                    5G 프리미어 에센셜 / 85,000원
                    </Text>

                    <Title>
                    가입서비스명
                    </Title>
                    <Text>
                    이동통신 (010-****-5678)
                    </Text>
                </Box>
            </Box>
        </>
    )
};