import React, { useState } from "react"
import { Flex, Text, chakra, useColorModeValue } from "@chakra-ui/react"
import Step0 from "./step0"
import Step1 from "./step1"
import Step2 from "./step2"
import Step3 from "./step3"
import Step4 from "./step4"
import Step5 from "./Step5"

export default function Form({ data }: any) {
    const [step, setStep] = useState(0)
    const [subHeading, setSubHeading] = useState([
        "— We're here to help.",
        "— Step 1 of 4",
        "— Step 2 of 4",
        "— Step 3 of 4",
        "— Step 4 of 4",
    ])
    const [heading, setHeading] = useState([
        "Get the free legal help you need.",
        "Do you live in a household of four or more?",
        "What is your annual household income?",
        "What are of law do you need?",
        "Do any of these apply to you?",
    ])
    const [filters, setFilters] = useState({
        location: "",
        household: false,
        income: "",
        area: "",
        tags: [""],
        phoneNumber: "",
        address: "",
        website: "",
    })
    const [input, setInput] = useState([
        <Step0 key={0} setStep={setStep} filters={filters} />,
        <Step1 key={1} setStep={setStep} filters={filters} />,
        <Step2 key={2} setStep={setStep} filters={filters} />,
        <Step3 key={3} setStep={setStep} filters={filters} />,
        <Step4 key={4} setStep={setStep} filters={filters} />,
        <Step5 key={5} data={data} filters={filters} />,
    ])

    const bg = useColorModeValue("#fff", "#1A202C")
    const color = useColorModeValue("black", "#9ac8ff")

    return (
        <Flex
            direction="column"
            alignItems="start"
            justifyContent="center"
            px={{
                base: 4,
                lg: 20,
            }}
            py={24}
            bg={bg}
            zIndex={1}
        >
            <Text
                fontSize="2xl"
                color={useColorModeValue("gray.500", "gray.400")}
            >
                {" "}
                {subHeading[step]}
            </Text>

            <chakra.h1
                mb={6}
                fontSize={{
                    base: "50px",
                    md: "50px",
                    lg: step === 0 ? "70px" : "55px",
                  
                }}
                fontWeight="bold"
                color={color}
                lineHeight="shorter"
                fontFamily="Playfair Display"
                //letter spacing
                letterSpacing={step === 0 ? "-2.5px" : "-1px"}
            >
                {heading[step]}
            </chakra.h1>

            {input[step]}
        </Flex>
    )
}
