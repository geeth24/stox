import React, { useState } from "react"
import { Badge, Flex, Heading } from "@chakra-ui/react"
import Card from "./Card"

interface step5Props {
    data: any
    filters: {
        location: string
        household: boolean
        income: string
        area: string
        tags: Array<string>
        phoneNumber: string
    }
}

export default function Step5({ data, filters }: step5Props) {
    const [matches, setMatches] = useState([{}])

    const [count, setCount] = useState(0)

    return (
        <Flex display="flex" flexDirection="column">
            <Heading as="h2" fontFamily="Playfair Display" fontSize="50px">
                We found {data.length} matching legal service providers.
            </Heading>

            {data.map((item: any) => {
                if (item.state === "Texas") {
                    return <Card key={item.id} {...item} />
                }
            })}
        </Flex>
    )
}
