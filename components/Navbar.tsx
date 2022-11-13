import {
    useColorModeValue,
    useDisclosure,
    Icon,
    chakra,
    VStack,
    Button,
    Flex,
    HStack,
    IconButton,
    Box,
    Text,
    Link,
    Image,
} from "@chakra-ui/react"
import { useViewportScroll } from "framer-motion"
import React from "react"

import { AiOutlineMenu } from "react-icons/ai"
import { IoIosArrowDown } from "react-icons/io"
import { FaDiscord, FaTimes, FaTwitter } from "react-icons/fa"
import { motion } from "framer-motion"

function Navbar() {
    const ref = React.useRef(null)
    const [y, setY] = React.useState(0)
    //@ts-ignore
    const height = ref.current ? ref.current.getBoundingClientRect() : 0
    const { scrollY } = useViewportScroll()
    React.useEffect(() => {
        return scrollY.onChange(() => setY(scrollY.get()))
    }, [scrollY])
    const cl = useColorModeValue("gray.800", "white")
    const mobileNav = useDisclosure()

    //check if scrollY is greater than 0
    const isScrolled = y > 0

    const MobileNavContent = (
        <VStack
            position="absolute"
            top={20}
            mt={-2}
            left={0}
            right={0}
            display={mobileNav.isOpen ? "flex" : "none"}
            flexDirection="column"
            pb={4}
            bg="linear-gradient(359.86deg, rgba(0, 5, 5, 0.8) 75.56%, rgba(0, 5, 5, 0) 131.78%)"
            backdropFilter="blur(19.5px)"
            sx={{
                borderImage:
                    "linear-gradient(90deg, rgba(1, 218, 124, 0) 2.69%, rgba(175, 174, 184, 0) 2.7%, rgba(175, 174, 184, 0.21) 50.12%, rgba(175, 174, 184, 0) 96.58%)",
                borderImageSlice: 1,
                borderTopWidth: "1.5px",
                borderTopStyle: "solid",
                borderTopColor: "transparent",
            }}
            rounded="sm"
            shadow="sm"
            zIndex="999"
            //animation
            as={motion.div}
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition="0.3s linear"
        >
            <Box
                w="full"
                border="1.5px "
                sx={{
                    borderImage:
                        "linear-gradient(90deg, rgba(175, 174, 184, 0.21) 2.69%, rgba(175, 174, 184, 0) 96.58%)",
                    borderImageSlice: 1,
                    borderBottomWidth: "1.5px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "transparent",
                }}
                p={3}
            >
                <Text fontSize="xl" fontWeight="medium" color="white" ml={5}>
                    Protocol
                </Text>
            </Box>
            <Box
                w="full"
                border="1.5px "
                sx={{
                    borderImage:
                        "linear-gradient(90deg, rgba(175, 174, 184, 0.21) 2.69%, rgba(175, 174, 184, 0) 96.58%)",
                    borderImageSlice: 1,
                    borderBottomWidth: "1.5px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "transparent",
                }}
                p={3}
            >
                <Text fontSize="xl" fontWeight="medium" color="white" ml={5}>
                    Governance
                </Text>
            </Box>
            <Box
                w="full"
                sx={{
                    borderImage:
                        "linear-gradient(90deg, rgba(175, 174, 184, 0.21) 2.69%, rgba(175, 174, 184, 0) 96.58%)",
                    borderImageSlice: 1,
                    borderBottomWidth: "1.5px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "transparent",
                }}
                p={3}
            >
                <Text fontSize="xl" fontWeight="medium" color="white" ml={5}>
                    Docs
                </Text>
            </Box>
            <Box
                w="full"
                border="1.5px "
                sx={{
                    borderImage:
                        "linear-gradient(90deg, rgba(175, 174, 184, 0.21) 2.69%, rgba(175, 174, 184, 0) 96.58%)",
                    borderImageSlice: 1,
                    borderBottomWidth: "1.5px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "transparent",
                }}
                p={3}
            >
                <Text fontSize="xl" fontWeight="medium" color="white" ml={5}>
                    About
                </Text>
            </Box>
            <Box
                w="full"
                border="1.5px "
                sx={{
                    borderImage:
                        "linear-gradient(90deg, rgba(175, 174, 184, 0.21) 2.69%, rgba(175, 174, 184, 0) 96.58%)",
                    borderImageSlice: 1,
                    borderBottomWidth: "1.5px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "transparent",
                }}
                p={3}
            >
                <Text fontSize="xl" fontWeight="medium" color="white" ml={5}>
                    Twitter
                </Text>
            </Box>
            <Box
                w="full"
                border="1.5px"
                sx={{
                    borderImage:
                        "linear-gradient(90deg, rgba(175, 174, 184, 0.21) 2.69%, rgba(175, 174, 184, 0) 96.58%)",
                    borderImageSlice: 1,
                    borderBottomWidth: "1.5px",
                    borderBottomStyle: "solid",
                    borderBottomColor: "transparent",
                }}
                p={3}
            >
                <Text fontSize="xl" fontWeight="medium" color="white" ml={5}>
                    Discord
                </Text>
            </Box>
        </VStack>
    )
    return (
        <chakra.header
            ref={ref}
            shadow={y > height ? "sm" : undefined}
            bg={isScrolled ? "#000505" : "transparent"}
            //add transition
            transition="0.1s linear"
            w="full"
            sx={{
                borderImage:
                    "linear-gradient(90deg, rgba(1, 218, 124, 0) 2.69%, rgba(175, 174, 184, 0) 2.7%, rgba(175, 174, 184, 0.21) 50.12%, rgba(175, 174, 184, 0) 96.58%)",
                borderImageSlice: 1,
                borderBottomWidth: "1.5px",
                borderBottomStyle: "solid",
                borderBottomColor: "transparent",
            }}
            color="gray.800"
            marginBottom={-90}
            position="sticky"
            top={0}
            zIndex="10"
        >
            <chakra.div h="4.5rem" mx="auto" maxW="7xl" px={{ base: 2, sm: 4 }}>
                <Flex
                    w="full"
                    h="full"
                    px="6"
                    // align="center"
                    justify="space-between"
                >
                    <Flex align="center">
                        <Link href="/">
                            <HStack w="full">
                                <Text
                                    fontSize="xl"
                                    fontWeight="medium"
                                    color="white"
                                    ml={5}
                                >
                                    Stox
                                </Text>
                            </HStack>
                        </Link>
                    </Flex>

                    <Box
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        ml={20}
                    >
                        <HStack
                            spacing="2"
                            display={{
                                base: "none",
                                lg: "flex",
                            }}
                        >
                            <Button
                                color="white"
                                alignItems="center"
                                fontSize={{ base: "sm", md: "md" }}
                                fontWeight="medium"
                                _hover={{
                                    color: cl,
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                                variant="ghost"
                            >
                                Protocol
                            </Button>
                            <Button
                                color="white"
                                alignItems="center"
                                fontSize={{ base: "sm", md: "md" }}
                                fontWeight="medium"
                                _hover={{
                                    color: cl,
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                                variant="ghost"
                            >
                                Governance
                            </Button>
                            <Button
                                color="white"
                                alignItems="center"
                                fontSize={{ base: "sm", md: "md" }}
                                fontWeight="medium"
                                _hover={{
                                    color: cl,
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                                variant="ghost"
                            >
                                Docs
                            </Button>
                            <Button
                                color="white"
                                alignItems="center"
                                fontSize={{ base: "sm", md: "md" }}
                                fontWeight="medium"
                                _hover={{
                                    color: cl,
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                                variant="ghost"
                            >
                                About
                            </Button>

                            <Button
                                color="white"
                                alignItems="center"
                                fontSize={{ base: "sm", md: "md" }}
                                fontWeight="medium"
                                _hover={{
                                    color: cl,
                                }}
                                _focus={{
                                    boxShadow: "none",
                                }}
                                rightIcon={<IoIosArrowDown />}
                                variant="ghost"
                            >
                                More
                            </Button>
                        </HStack>
                    </Box>

                    <HStack spacing="2" color="white">
                        <HStack spacing="5">
                            <HStack
                                spacing="5"
                                display={{
                                    base: "none",
                                    lg: "flex",
                                }}
                            >
                                <Icon as={FaDiscord} />
                                <Icon as={FaTwitter} />
                            </HStack>
                            <Button
                                variant="solid"
                                size="sm"
                                width="150px"
                                bg="white"
                                color="black"
                            >
                                Launching Soon...
                            </Button>
                        </HStack>
                        <IconButton
                            display={{
                                base: "flex",
                                lg: "none",
                            }}
                            aria-label="Open menu"
                            fontSize="20px"
                            size="sm"
                            color="gray.800"
                            _dark={{
                                color: "inherit",
                            }}
                            variant="ghost"
                            icon={
                                mobileNav.isOpen ? (
                                    <FaTimes
                                        transform="rotate(90deg)"
                                        style={{
                                            transition: "all 0.3s ease-in-out",
                                        }}
                                    />
                                ) : (
                                    <AiOutlineMenu />
                                )
                            }
                            onClick={() => mobileNav.onToggle()}
                        />
                    </HStack>
                </Flex>
                {MobileNavContent}
            </chakra.div>
        </chakra.header>
    )
}

export default Navbar
