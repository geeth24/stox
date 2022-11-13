import {
    Box,
    SimpleGrid,
    Flex,
    Badge,
    chakra,
    VisuallyHidden,
    Input,
    Button,
    InputGroup,
    InputRightElement,
    Image,
    Text,
    Divider,
    HStack,
    useColorModeValue,
} from "@chakra-ui/react"
import React from "react"
import Form from "./Form"

const Hero = ({ data }: any) => {
    const right = useColorModeValue("#E9F2FF", "#84b7ff")
    return (
        <SimpleGrid
            columns={{
                base: 1,
                md: 2,
            }}
            spacing={0}
            _after={{
                opacity: 0.25,
                pos: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: -1,
                content: '" "',
            }}
            height="100vh"
        >
            <Form data={data} />
        </SimpleGrid>
    )
}

export default Hero
