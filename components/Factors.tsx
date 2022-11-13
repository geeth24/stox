import {
    Slider,
    SliderMark,
    SliderTrack,
    SliderFilledTrack,
    Tooltip,
    SliderThumb,
    Box,
    Button,
    Center,
    chakra,
    Flex,
    GridItem,
    Icon,
    Input,
    SimpleGrid,
    VisuallyHidden,
    Text,
    VStack,
    Select,
} from "@chakra-ui/react"
import React from "react"

function Factors() {
    const [factor, setFactor] = React.useState("")
    return (
        <Box px={8} py={24} mx="auto" maxWidth="5xl">
            <SimpleGrid
                alignItems="center"
                w={{
                    base: "full",
                    xl: 11 / 12,
                }}
                columns={{
                    base: 1,
                    lg: 11,
                }}
                gap={{
                    base: 0,
                    lg: 24,
                }}
                mx="auto"
            >
                <GridItem
                    colSpan={{
                        base: "auto",
                        md: 4,
                    }}
                >
                    <VStack spacing={4} align="left">
                        <Text fontSize="xl" fontWeight="bold" mb={4}>
                            Factors
                        </Text>
                        <Select
                            placeholder="Select factor"
                            onChange={(e) => setFactor(e.target.value)}
                        >
                            <option value="option1">Interest rates</option>
                            <option value="option2">Treasury bonds</option>
                            <option value="option3">Unemployment</option>
                            <option value="option4">Stock market</option>
                            <option value="option5">
                                Government spending and regulations
                            </option>
                        </Select>
                    </VStack>
                </GridItem>
                <GridItem
                    colSpan={{
                        base: "auto",
                        lg: 7,
                    }}
                    textAlign={{
                        base: "center",
                        lg: "left",
                    }}
                >
                    <chakra.h1
                        mb={4}
                        fontSize={{
                            base: "3xl",
                            md: "4xl",
                        }}
                        fontWeight="bold"
                        lineHeight={{
                            base: "shorter",
                            md: "none",
                        }}
                        color="gray.900"
                        _dark={{
                            color: "gray.200",
                        }}
                        letterSpacing={{
                            base: "normal",
                            md: "tight",
                        }}
                    >
                        Please select a factor to view its impact on the stock
                    </chakra.h1>
                    <chakra.p
                        mb={{
                            base: 10,
                            md: 4,
                        }}
                        fontSize={{
                            base: "lg",
                            md: "xl",
                        }}
                        fontWeight="thin"
                        color="gray.500"
                        letterSpacing="wider"
                    >
                        We will use this information to help you make better
                        investment decisions
                    </chakra.p>
                </GridItem>
            </SimpleGrid>
        </Box>
    )
}

export default Factors
