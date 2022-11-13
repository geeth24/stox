import {
    HStack,
    Select,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from "@chakra-ui/react"
import React, { useState } from "react"
import { BsArrowRight } from "react-icons/bs"

interface step2Props {
    setStep: (arg0: number) => void
    filters: {
        location: string
        household: boolean
        income: string
        area: string
        tags: Array<string>
    }
}

export default function Step2({ setStep, filters }: step2Props) {
    const [isEmpty, setIsEmpty] = useState(true)
    const { isOpen, onOpen, onClose } = useDisclosure()

    const onClick = () => {
        if (filters.income === "$16,988 - $34,687.99" || filters.income === "Above $34,688") {
            onOpen()
        } else {
            setStep(3)
        }
    }

    return (
        <HStack spacing="24px">
            <Modal onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader> Ineligible </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Unfortunately, you are ineligible for pro bono legal
                        services as your income is higher than $16,988.
                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose} colorScheme="red">
                            Close
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
            <Select
                placeholder="Select your income"
                onChange={(e) => {
                    filters.income = e.target.value
                    if (e.target.value !== "") {
                        setIsEmpty(false)
                    } else {
                        setIsEmpty(true)
                    }
                    
                }}
            >
                <option value="$10,000 - $16,987.99">
                    $10,000 - $16,987.99
                </option>
                <option value="$16,988 - $34,687.99">
                    $16,988 - $34,687.99
                </option>
                <option value="Above $34,688">Above $34,688</option>
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
