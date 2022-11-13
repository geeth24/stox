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
} from "@chakra-ui/react"
import React from "react"

function Levels() {
    const [savingsSliderValue, setSavingsSliderValue] = React.useState(0)
    const [stocksSliderValue, setStocksSliderValue] = React.useState(0)
    const [bondsSliderValue, setBondsSliderValue] = React.useState(0)
    const [showSavingsTooltip, setShowSavingsTooltip] = React.useState(false)
    const [showStocksTooltip, setShowStocksTooltip] = React.useState(false)
    const [showBondsTooltip, setShowBondsTooltip] = React.useState(false)

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
                        Please enter your current savings, stocks, and bonds.
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
                        We will use this information to calculate your risk
                        tolerance.
                    </chakra.p>
                </GridItem>
                <GridItem
                    colSpan={{
                        base: "auto",
                        md: 4,
                    }}
                >
                    <VStack spacing={4} align="left">
                        <Text fontSize="xl" fontWeight="bold" mb={4}>
                            Savings
                        </Text>
                        <Slider
                            id="slider"
                            defaultValue={5}
                            min={0}
                            max={100}
                            colorScheme="brand"
                            onChange={(v) => {
                                setSavingsSliderValue(v)
                            }}
                            onMouseEnter={() => setShowSavingsTooltip(true)}
                            onMouseLeave={() => setShowSavingsTooltip(false)}
                        >
                            <SliderMark
                                value={25}
                                mt="1"
                                ml="-2.5"
                                fontSize="sm"
                            >
                                25%
                            </SliderMark>
                            <SliderMark
                                value={50}
                                mt="1"
                                ml="-2.5"
                                fontSize="sm"
                            >
                                50%
                            </SliderMark>
                            <SliderMark
                                value={75}
                                mt="1"
                                ml="-2.5"
                                fontSize="sm"
                            >
                                75%
                            </SliderMark>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <Tooltip
                                hasArrow
                                bg="brand.500"
                                color="white"
                                placement="top"
                                isOpen={showSavingsTooltip}
                                label={`${savingsSliderValue}%`}
                            >
                                <SliderThumb />
                            </Tooltip>
                        </Slider>
                        <Text fontSize="xl" fontWeight="bold" mb={4}>
                            Stocks
                        </Text>
                        <Slider
                            id="slider"
                            defaultValue={5}
                            min={0}
                            max={100}
                            colorScheme="brand"
                            onChange={(v) => {
                                setStocksSliderValue(v)
                            }}
                            onMouseEnter={() => setShowStocksTooltip(true)}
                            onMouseLeave={() => setShowStocksTooltip(false)}
                        >
                            <SliderMark
                                value={25}
                                mt="1"
                                ml="-2.5"
                                fontSize="sm"
                            >
                                25%
                            </SliderMark>
                            <SliderMark
                                value={50}
                                mt="1"
                                ml="-2.5"
                                fontSize="sm"
                            >
                                50%
                            </SliderMark>
                            <SliderMark
                                value={75}
                                mt="1"
                                ml="-2.5"
                                fontSize="sm"
                            >
                                75%
                            </SliderMark>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <Tooltip
                                hasArrow
                                bg="brand.500"
                                color="white"
                                placement="top"
                                isOpen={showStocksTooltip}
                                label={`${stocksSliderValue}%`}
                            >
                                <SliderThumb />
                            </Tooltip>
                        </Slider>
                        <Text fontSize="xl" fontWeight="bold" mb={4}>
                            Bonds
                        </Text>
                        <Slider
                            id="slider"
                            defaultValue={5}
                            min={0}
                            max={100}
                            colorScheme="brand"
                            onChange={(v) => {
                                setBondsSliderValue(v)
                            }}
                            onMouseEnter={() => setShowBondsTooltip(true)}
                            onMouseLeave={() => setShowBondsTooltip(false)}
                        >
                            <SliderMark
                                value={25}
                                mt="1"
                                ml="-2.5"
                                fontSize="sm"
                            >
                                25%
                            </SliderMark>
                            <SliderMark
                                value={50}
                                mt="1"
                                ml="-2.5"
                                fontSize="sm"
                            >
                                50%
                            </SliderMark>
                            <SliderMark
                                value={75}
                                mt="1"
                                ml="-2.5"
                                fontSize="sm"
                            >
                                75%
                            </SliderMark>
                            <SliderTrack>
                                <SliderFilledTrack />
                            </SliderTrack>
                            <Tooltip
                                hasArrow
                                bg="brand.500"
                                color="white"
                                placement="top"
                                isOpen={showBondsTooltip}
                                label={`${bondsSliderValue}%`}
                            >
                                <SliderThumb />
                            </Tooltip>
                        </Slider>
                    </VStack>
                </GridItem>
            </SimpleGrid>
        </Box>
    )
}

export default Levels
