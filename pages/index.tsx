import { useColorModeValue, Box, Button, Flex } from "@chakra-ui/react"
import { motion } from "framer-motion"
import type { NextPage } from "next"
import Head from "next/head"
import Factors from "../components/Factors"
import Levels from "../components/Levels"
import Navbar from "../components/Navbar"

const Home: NextPage = ({ data }: any) => {
    console.log(data)
    const bg = useColorModeValue("#fff", "#1A202C")

    return (
        // <motion.div
        //     className="container text-center"
        //     initial={{ opacity: 0 }}
        //     animate={{ opacity: 1 }}
        //     exit={{ opacity: 0 }}
        //     transition={{ duration: 3 }}
        // >
        <div style={{ background: bg }}>
            <Head>
                <title>Stox</title>
                <link rel="icon" href="/logo.svg"></link>
            </Head>
            <Navbar />
            <Levels />
            <Factors />
            <Box px={8} py={24} mx="auto" maxWidth="5xl">
                <Flex justifyContent="center">
                    <Button colorScheme="teal" size="lg">
                        Analyze
                    </Button>
                </Flex>
            </Box>
            {/* <Hero data={data} /> */}
        </div>
        // </motion.div>
    )
}

export default Home

export async function getServerSideProps() {
    const res = await fetch("https://legaldove.geethg.com/api/data")
    const data = await res.json()

    return {
        props: { data: data }, // will be passed to the page component as props
    }
}
