import { Button, HStack } from "@chakra-ui/react"
import React from "react"

interface step1Props {
    setStep: (arg0: number) => void
    filters: {
        location: string
        household: boolean
        income: string
        area: string
        tags: Array<string>
    }
}

export default function Step1({ setStep, filters }: step1Props) {
    const onClick = (e: any) => {
        setStep(2)
        if (e.target.value === "YES") {
            filters.household = true
        } else {
            filters.household = false
        }
    }

    return (
        <HStack spacing="24px">
            <Button
                colorScheme="brand"
                variant="solid"
                onClick={(e) => onClick(e)}
            >
                YES
            </Button>
            <Button
                colorScheme="brand"
                variant="outline"
                onClick={(e) => onClick(e)}
            >
                NO
            </Button>
        </HStack>
    )
}
