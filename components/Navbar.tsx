import {
    Box,
    Button,
    Link,
    Heading,
    chakra,
    CloseButton,
    Flex,
    HStack,
    IconButton,
    useColorModeValue,
    useDisclosure,
    VStack,
    Divider,
    Image,
    useColorMode,
} from "@chakra-ui/react"
import React from "react"
import { IoLanguage, IoMoon, IoSunny } from "react-icons/io5"

const Navbar = () => {
    const bg = useColorModeValue("white", "gray.800")
    const navBg = useColorModeValue("white", "gray.900")
    const mobileNav = useDisclosure()

    const { colorMode, toggleColorMode } = useColorMode()

    //if scrollY > 100, change navbar color
    const [scrollNav, setScrollNav] = React.useState(false)

    const changeNav = () => {
        if (window.scrollY >= 100) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", changeNav)
    }, [])

    return (
        <React.Fragment>
            <chakra.header
                // bg={bg}
                position="sticky"
                top={0}
                w="full"
                px={{
                    base: 3,
                    sm: 8,
                }}
                py={6}
                zIndex="100"
                transition="all 0.3s"
                bg={scrollNav ? navBg : "transparent"}
                shadow={scrollNav ? "md" : "none"}
                borderBottom="1px solid"
            >
                <Flex
                    alignItems="center"
                    justifyContent="space-between"
                    mx="auto"
                    maxW="7xl"
                >
                    <Flex>
                        <chakra.a
                            href="/"
                            title="Legal Dove"
                            display="flex"
                            alignItems="center"
                        ></chakra.a>
                        {/* <chakra.h1
                            fontSize="xl"
                            fontWeight="900"
                            ml="2"
                            color="black"
                            _dark={{
                                color: "white",
                            }}
                            // fontFamily="Playfair Display"
                        >
                            Stox
                        </chakra.h1> */}
                        <Image
                            src={useColorModeValue(
                                "/Sto (1).png",
                                "/Sto (2).png"
                            )}
                            alt="Logo"
                            // width="150px"
                            height="50px"
                            ml={12}
                        />
                    </Flex>
                    <HStack display="flex" alignItems="center" spacing={7}>
                        <HStack
                            spacing={1}
                            mr={1}
                            color="brand.500"
                            display={{
                                base: "none",
                                md: "inline-flex",
                            }}
                        ></HStack>
                        <Button
                            size="large"
                            variant="ghost"
                            fontSize="2xl"
                            _hover={{ bg: "" }}
                        >
                            Help
                        </Button>
                        <IoLanguage fontSize="30px" />
                        <IconButton
                            size="lg"
                            fontSize="lg"
                            variant="ghost"
                            icon={
                                colorMode === "light" ? <IoMoon /> : <IoSunny />
                            }
                            aria-label={`Switch to ${
                                colorMode === "light" ? "dark" : "light"
                            } mode`}
                            onClick={toggleColorMode}
                        />
                        <Box
                            display={{
                                base: "inline-flex",
                                md: "none",
                            }}
                        >
                            <IconButton
                                display={{
                                    base: "flex",
                                    md: "none",
                                }}
                                aria-label="Open menu"
                                fontSize="20px"
                                color="gray.800"
                                _dark={{
                                    color: "inherit",
                                }}
                                variant="ghost"
                                // icon={<AiOutlineMenu />}
                                onClick={mobileNav.onOpen}
                            />

                            <VStack
                                pos="absolute"
                                top={0}
                                left={0}
                                right={0}
                                display={mobileNav.isOpen ? "flex" : "none"}
                                flexDirection="column"
                                p={2}
                                pb={4}
                                m={2}
                                bg={bg}
                                spacing={3}
                                rounded="sm"
                                shadow="sm"
                            >
                                <CloseButton
                                    aria-label="Close menu"
                                    onClick={mobileNav.onClose}
                                />
                            </VStack>
                        </Box>
                    </HStack>
                </Flex>
            </chakra.header>
        </React.Fragment>
    )
}

export default Navbar
