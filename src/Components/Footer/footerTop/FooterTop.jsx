import { Box, Image, Link, Text, Flex, VStack,  HStack,Stack } from '@chakra-ui/react'
import React from 'react'
import facebook from '../../images/assets/facebook.svg'
import twiter from '../../images/assets/twiter.svg'
import instagram from '../../images/assets/instagram.svg'
import linkedin from '../../images/assets/dropDown.svg'

const FooterTop = () => {
    const footerProduct = [
        "Mobiles",
        "Tablets",
        "Laptops",
        "Home",
        "Camera",
        "Televisions",
        "Headphones",
        "Video",
    ]

    const appStoreImage = [
        {
            link: "https://apps.apple.com/app/noon-%D9%86%D9%88%D9%86/id1269038866?ls=1",
            image: "https://f.nooncdn.com/s/app/com/common/images/logos/app-store.svg"
        },
        {
            link: "https://play.google.com/store/apps/details?id=com.noon.buyerapp&pli=1",
            image: "https://f.nooncdn.com/s/app/com/common/images/logos/google-play.svg"
        },
        {
            link: "https://appgallery.huawei.com/app/C100441245",
            image: "https://f.nooncdn.com/s/app/com/common/images/logos/app-store.svg"
        },
    ]

    const mediaConnection = [
        {
            link: "https://www.facebook.com/noonunitedarabemirates/",
            image: facebook,
            imageName: "facebbok"
        },
        {
            link: "https://twitter.com/",
            image: twiter,
            imageName: "twiter"
        },
        {
            link: "https://www.instagram.com/noon_uae/",
            image: instagram,
            imageName: "instagram"
        },
        {
            link: "https://www.linkedin.com/company/nooncom/",
            image: linkedin,
            imageName: "linkedIn"
        },
    ]

    return (
        <Box py={3} >
            <Stack
                flexDirection={{base:'column', md:"row"}}
                justifyContent={"space-between"}
                spacing={{ base: 1, md: 7, }}
                px={{ base: 2, md: 7 }}
            >
                <Flex flexDirection={"column"} rowGap={2} >
                    <Text as={"span"} fontSize={"14px"} fontWeight={600}>ELECTRONICS</Text>
                    {
                        footerProduct.map((ele, idx) => {
                            return <Text key={idx} as={"p"} fontSize={"12px"}>{ele}</Text>
                        })
                    }
                </Flex >
                <Flex flexDirection={"column"} rowGap={2} >
                    <Text as={"span"} fontSize={"14px"} fontWeight={600}>FASHION</Text>
                    {
                        footerProduct.map((ele, idx) => {
                            return <Text  key={idx} as={"p"} fontSize={"12px"}>{ele}</Text>
                        })
                    }
                </Flex >
                <Flex flexDirection={"column"} rowGap={2} >
                    <Text as={"span"} fontSize={"14px"} fontWeight={600}>HOME AND KITCHEN</Text>
                    {
                        footerProduct.map((ele , idx) => {
                            return <Text  key={idx} as={"p"} fontSize={"12px"}>{ele}</Text>
                        })
                    }
                </Flex >
                <Flex flexDirection={"column"} rowGap={2} >
                    <Text as={"span"} fontSize={"14px"} fontWeight={600}>Beauty</Text>
                    {
                        footerProduct.map((ele, idx) => {
                            return <Text  key={idx} as={"p"} fontSize={"12px"}>{ele}</Text>
                        })
                    }
                </Flex >
                <Flex flexDirection={"column"} rowGap={2} >
                    <Text as={"span"} fontSize={"14px"} fontWeight={600}>Baby & Toys</Text>
                    {
                        footerProduct.map((ele, idx) => {
                            return <Text  key={idx} as={"p"} fontSize={"12px"}>{ele}</Text>
                        })
                    }
                </Flex >
                <Flex flexDirection={"column"} rowGap={2} >
                    <Text as={"span"} fontSize={"14px"} fontWeight={600}>Top Brands</Text>
                    {
                        footerProduct.map((ele, idx) => {
                            return <Text  key={idx} as={"p"} fontSize={"12px"}>{ele}</Text>
                        })
                    }
                </Flex >
                <Flex flexDirection={"column"} rowGap={2} >
                    <Text as={"span"} fontSize={"14px"} fontWeight={600}>Daily Groceries</Text>
                    {
                        footerProduct.map((ele, idx) => {
                            return <Text  key={idx} as={"p"} fontSize={"12px"}>{ele}</Text>
                        })
                    }
                </Flex >

            </Stack>
            <HStack  justifyContent={"space-around"} py={"60px"}>

                <Flex>
                    <VStack>
                        <Text
                            as={"span"}
                            fontSize={"12px"}
                            fontWeight={400}>SHOP ON THE GO</Text>
                        <Flex
                            columnGap={2}
                            w={"full"}>
                            {
                                appStoreImage.map((ele, idx) => {
                                    return <Link href={ele.link}  key={idx}>
                                        <Image  src={ele.image} w={"110px"} />
                                    </Link>
                                })
                            }

                        </Flex>
                    </VStack>
                </Flex>

                <Flex >
                    <VStack>
                        <Text
                            as={"span"}
                            fontSize={"12px"}
                            fontWeight={400}>CONNECT WITH US</Text>
                        <Flex
                            columnGap={2}
                            w={"full"}>
                            {
                                mediaConnection.map((ele , idx) => {
                                    return <Link  key={idx} href={ele.link}>
                                        <Image
                                            src={ele.image}
                                            h={"43px"}
                                            w={"43px"}
                                            alt={ele.imageName} />
                                    </Link>
                                })
                            }

                        </Flex>
                    </VStack>
                </Flex>

            </HStack>
        </Box>
    )
}

export default FooterTop