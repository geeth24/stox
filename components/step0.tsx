import {
    Button,
    HStack,
    Input,
    InputGroup,
    InputRightElement,
    FormControl,
    FormHelperText,
    FormErrorMessage,
    useColorModeValue,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRight } from "react-icons/bs"

interface step0Props {
    setStep: (arg0: number) => void
    filters: {
        location: string
        household: boolean
        income: string
        area: string
        tags: Array<string>
    }
}

export default function Step0({ setStep, filters }: step0Props) {
    const onClick = () => {
        setIsError(filters.location === "")
        if (isError) {
            setStep(1)
        }

        setStep(1)
    }
    const [isEmpty, setIsEmpty] = useState(true)
    const [isError, setIsError] = useState(false)
    const color = useColorModeValue("#143b6f", "#9ac8ff")
    const borderColor = useColorModeValue("#143b6f3a", "#9ac8ff")

    return (
        <HStack spacing="24px">
            <FormControl isInvalid={isError}>
                <InputGroup>
                    <Input
                        placeholder="Enter city, state, or zip code"
                        _placeholder={{ opacity: 0.4, color: "inherit" }}
                        borderColor={borderColor}
                        color={color}
                        _hover={{ borderColor: color }}
                        width="300px"
                        onChange={(e) => {
                            filters.location = e.target.value
                            if (e.target.value !== "") {
                                setIsEmpty(false)
                            } else {
                                setIsEmpty(true)
                            }
                        }}
                    />
                    <InputRightElement width="3.5rem">
                        <Button
                            colorScheme="brand"
                            onClick={onClick}
                            h="1.75rem"
                            size="sm"
                            isDisabled={isEmpty}
                        >
                            <BsArrowRight />
                        </Button>
                    </InputRightElement>
                </InputGroup>
                {!isError ? (
                    <FormHelperText></FormHelperText>
                ) : (
                    <FormErrorMessage>Location is required.</FormErrorMessage>
                )}
            </FormControl>
        </HStack>
    )
}
