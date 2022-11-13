import { Button, HStack, Select } from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRight } from "react-icons/bs"

interface step3Props {
    setStep: (arg0: number) => void
    filters: {
        location: string
        household: boolean
        income: string
        area: string
        tags: Array<string>
    }
}

export default function Step3({ setStep, filters }: step3Props) {
    const [isEmpty, setIsEmpty] = useState(true)
    const onClick = () => {
        setStep(4)
    }

    return (
        <HStack spacing="24px">
            <Select
                placeholder="Select area of law"
                onChange={(e) => {
                    filters.area = e.target.value
                    if (e.target.value !== "") {
                        setIsEmpty(false)
                    } else {
                        setIsEmpty(true)
                    }
                }}
            >
                <option value="option1">Immigration Law</option>
                <option value="option1">Other</option>
            </Select>
            <Button
                colorScheme="brand"
                variant="solid"
                onClick={onClick}
                isDisabled={isEmpty}
            >
                <BsArrowRight />
            </Button>
        </HStack>
    )
}
