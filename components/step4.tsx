import React, { useState } from "react"
import {
    AutoComplete,
    AutoCompleteInput,
    AutoCompleteItem,
    AutoCompleteList,
    AutoCompleteTag,
} from "@choc-ui/chakra-autocomplete"
import { HStack, Button } from "@chakra-ui/react"
import { BsArrowRight } from "react-icons/bs"

interface step4Props {
    setStep: (arg0: number) => void
    filters: {
        location: string
        household: boolean
        income: string
        area: string
        tags: Array<string>
    }
}

export default function Step4({ setStep, filters }: step4Props) {
    const tags = ["I prefer Spanish", "I'm a minor", "I'm seeking asylum"]
    const [tagArr, setTagArr] = useState(["", ""])

    for (var i = 0; i < tags.length; i++) {
        if (filters.tags.includes(tags[i])) {
            tagArr[i] = tags[i]
        }
    }
    const onClick = () => {
        for (var i = 0; i < tagArr.length; i++) {
            tags[i] = tagArr[i]
        }
        setStep(5)
    }

    return (
        <HStack spacing="24px">
            <AutoComplete openOnFocus multiple>
                <AutoCompleteInput variant="filled" placeholder="Click here">
                    {({ tags }) =>
                        tags.map((tag, tid) => (
                            <AutoCompleteTag
                                key={tid}
                                label={tag.label}
                                onRemove={tag.onRemove}
                            />
                        ))
                    }
                </AutoCompleteInput>
                <AutoCompleteList>
                    {tags.map((tag, tid) => (
                        <AutoCompleteItem
                            key={`option-${tid}`}
                            textTransform="capitalize"
                            _selected={{ bg: "whiteAlpha.50" }}
                            _focus={{ bg: "whiteAlpha.100" }}
                            value={tag}
                        ></AutoCompleteItem>
                    ))}
                </AutoCompleteList>
            </AutoComplete>
            <Button colorScheme="brand" variant="solid" onClick={onClick}>
                <BsArrowRight />
            </Button>
        </HStack>
    )
}
