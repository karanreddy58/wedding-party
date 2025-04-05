import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  Link,
  List,
  ListItem,
  Divider,
  Container,
  useColorModeValue,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

function Details() {
  const sectionBg = useColorModeValue("white", "gray.700");
  const sectionShadow = useColorModeValue("md", "dark-lg");

  return (
    <>
      {/* Wrapper to offset fixed navbar */}
      <Box mt={["80px", "80px"]}>
        {/* Hero Banner */}
        <MotionBox
          bgGradient="linear(to-r, #a2b798, #f9f9f9)"
          py={["16", "24"]}
          mb={8}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Container maxW="1200px" centerContent>
            <Heading
              fontSize={["3xl", "5xl"]}
              fontFamily="'Moontime', cursive"
              color="white"
              textShadow="1px 1px 2px rgba(0,0,0,0.4)"
            >
              Wedding Weekend Details
            </Heading>
            <Text
              mt={4}
              fontSize={["md", "lg"]}
              color="whiteAlpha.900"
              textAlign="center"
            >
              Stamford, Connecticut — Memorial Day Weekend 2025
            </Text>
          </Container>
        </MotionBox>
      </Box>

      {/* Main Content Container */}
      <Container maxW="1200px" px={["4", "8"]} mb={8}>
        <VStack spacing={8} align="stretch">
          {/* Travel Information Section */}
          <MotionBox
            bg={sectionBg}
            boxShadow={sectionShadow}
            borderRadius="md"
            p={["4", "6"]}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h2"
              fontSize={["lg", "xl"]}
              mb={4}
              color="#a2b798"
              fontFamily="'Montserrat', sans-serif"
            >
              Travel Information
            </Heading>
            <VStack align="start" spacing={3}>
              <Box>
                <Heading
                  as="h3"
                  fontSize={["md", "lg"]}
                  mb={2}
                  color="#4a4a4a"
                  fontFamily="'Montserrat', sans-serif"
                >
                  JFK to Stamford via Train
                </Heading>
                <List spacing={2} fontSize={["sm", "md"]} color="#4a4a4a">
                  <ListItem>
                    Upon landing at JFK, follow signs for Baggage Claim and the AirTrain.
                  </ListItem>
                  <ListItem>
                    Take the AirTrain to Jamaica Station. Use contactless payment or a Metrocard ($8.50 fee).
                  </ListItem>
                  <ListItem>
                    Use the{" "}
                    <Link color="blue.500" href="https://www.mta.info/traintime" isExternal>
                      MTA TrainTime app
                    </Link>{" "}
                    to purchase tickets from Jamaica to Grand Central (Off Peak: $5, Peak: $7).
                  </ListItem>
                  <ListItem>
                    At Grand Central Terminal, refer to{" "}
                    <Link color="blue.500" href="https://www.mta.info/map/24956" isExternal>
                      this map
                    </Link>{" "}
                    to navigate from the Madison Concourse to the Main Concourse.
                  </ListItem>
                  <ListItem>
                    Purchase tickets from Grand Central to Stamford (Off Peak: $11.75, Peak: $16).
                  </ListItem>
                  <ListItem>
                    Arrive at the Stamford Metro-North Train Station. See{" "}
                    <Link color="blue.500" href="https://stamfordstation.ctrail.com/wp-content/uploads/sites/4/2021/03/Stamford-Station-Map-Final.pdf" isExternal>
                      the station map
                    </Link>{" "}
                    for guidance.
                  </ListItem>
                  <ListItem>
                    From the station, choose to walk, take a bus, taxi, or rideshare service.
                  </ListItem>
                </List>
              </Box>
              <Box>
                <Heading
                  as="h3"
                  fontSize={["md", "lg"]}
                  mb={2}
                  color="#4a4a4a"
                  fontFamily="'Montserrat', sans-serif"
                >
                  Alternate Options
                </Heading>
                <Text fontSize={["sm", "md"]} color="#4a4a4a">
                  Explore additional travel options from JFK to Stamford via{" "}
                  <Link color="blue.500" href="https://www.rome2rio.com/s/New-York-JFK-Airport-JFK/Stamford" isExternal>
                    Rome2Rio
                  </Link>
                  .
                </Text>
              </Box>
            </VStack>
          </MotionBox>

          {/* Hotel Recommendations Section */}
          <MotionBox
            bg={sectionBg}
            boxShadow={sectionShadow}
            borderRadius="md"
            p={["4", "6"]}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h2"
              fontSize={["lg", "xl"]}
              mb={4}
              color="#a2b798"
              fontFamily="'Montserrat', sans-serif"
            >
              Hotel Recommendations
            </Heading>
            <List spacing={3} fontSize={["sm", "md"]} color="#4a4a4a">
            <ListItem>
                <strong>Courtyard Stamford Downtown</strong>
                <br />
                <i>This hotel is across the street from the party restaurant.</i>
                <br/>
                275 Summer St, Stamford, CT 06901
                <br />
                <Link color="blue.500" href="https://www.marriott.com/en-us/hotels/stfcy-courtyard-stamford-downtown/overview/" isExternal>
                  Marriott Link
                </Link>{" "}
                – (203) 358-8822
              </ListItem>
              <ListItem>
                <strong>Residence Inn Stamford Downtown</strong>
                <br />
                <i>This hotel is one bloack from the party restaurant.</i>
                <br/>
                25 Atlantic Street, 275 Summer St, Stamford, CT 06901
                <br />
                <Link color="blue.500" href="https://www.marriott.com/en-us/hotels/stfrd-residence-inn-stamford-downtown/overview/" isExternal>
                  Marriott Link
                </Link>{" "}
                – (203) 564-5000
              </ListItem>
              <ListItem>
                <strong>Hampton Inn & Suites Stamford</strong>
                <br />
                26 Mill River St, Stamford, CT 06902
                <br />
                <Link color="blue.500" href="https://www.hilton.com/en/hotels/bdrsmhx-hampton-suites-stamford/" isExternal>
                  Hilton Link
                </Link>{" "}
                – (203) 353-9855
              </ListItem>
              <ListItem>
                <strong>The Lloyd Stamford, Tapestry Collection by Hilton</strong>
                <br />
                909 Washington Blvd, Stamford, CT 06901
                <br />
                <Link color="blue.500" href="https://www.hilton.com/en/hotels/hpnstup-the-lloyd-stamford/" isExternal>
                  Hilton Link
                </Link>{" "}
                – (203) 363-7900
              </ListItem>
              <ListItem>
                <strong>Stamford Marriott Hotel & Spa</strong>
                <br />
                243 Tresser Blvd, Stamford, CT 06901
                <br />
                <Link color="blue.500" href="https://www.marriott.com/en-us/hotels/stfct-stamford-marriott-hotel-and-spa/overview/" isExternal>
                  Marriott Link
                </Link>{" "}
                – (203) 357-9555
              </ListItem>
              <ListItem>
                <strong>The Stamford Hotel</strong>
                <br />
                700 E Main St, Stamford, CT 06901
                <br />
                <Link color="blue.500" href="https://www.thestamfordhotel.com/" isExternal>
                  Website
                </Link>{" "}
                – (203) 358-8400
              </ListItem>
              <ListItem>
                <strong>Stamford Suites Hotel</strong>
                <br />
                720 Bedford St, Stamford, CT 06901
                <br />
                <Link color="blue.500" href="https://www.stamfordsuites.com/" isExternal>
                  Website
                </Link>{" "}
                – (203) 548-7900
              </ListItem>
              <ListItem>
                <strong>Holiday Inn Express & Suites Stamford</strong>
                <br />
                2703 Summer St, Stamford, CT 06905
                <br />
                <Link color="blue.500" href="https://www.ihg.com/holidayinnexpress/hotels/us/en/stamford/stmex/hoteldetail" isExternal>
                  IHG Link
                </Link>{" "}
                – (203) 978-5600
              </ListItem>
              <ListItem>
                <strong>The Armon Hotel & Conference</strong>
                <br />
                2701 Summer St, Stamford, CT 06905
                <br />
                <Link color="blue.500" href="https://armonstamford.com/" isExternal>
                  Website
                </Link>{" "}
                – (203) 359-1300
              </ListItem>
            </List>
          </MotionBox>

          {/* Dining & Entertainment Section */}
          <MotionBox
            bg={sectionBg}
            boxShadow={sectionShadow}
            borderRadius="md"
            p={["4", "6"]}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h2"
              fontSize={["lg", "xl"]}
              mb={4}
              color="#a2b798"
              fontFamily="'Montserrat', sans-serif"
            >
              Dining & Entertainment
            </Heading>
            <VStack align="start" spacing={3}>
              <Box>
                <Heading
                  as="h3"
                  fontSize={["md", "lg"]}
                  mb={2}
                  color="#4a4a4a"
                  fontFamily="'Montserrat', sans-serif"
                >
                  Bars & Restaurants - Downtown Stamford
                </Heading>
                <List spacing={2} fontSize={["sm", "md"]} color="#4a4a4a">
                  <ListItem>
                    <strong>Tiernan&apos;s Bar & Restaurant</strong> – 187 Main St, Stamford, CT 06901. Casual pub with live local bands.
                  </ListItem>
                  <ListItem>
                    <strong>The Brickhouse Bar and Grill</strong> – 244 Bedford St, Stamford, CT 06902. Relaxed spot with sports on TV and creative comfort food.
                  </ListItem>
                  <ListItem>
                    <strong>Tigín Irish Pub</strong> – 175 Bedford St, Stamford, CT 06901. Offers creative pub fare with craft beer.
                  </ListItem>
                  <ListItem>
                    <strong>Bradford&apos;s Grill & Tavern</strong> – 83 Bedford St, Stamford, CT 06901. A neighborhood tavern with various pub options.
                  </ListItem>
                  <ListItem>
                    <strong>Bedford Hall Craft Kitchen & Bar</strong> – 135 Bedford St, Stamford, CT 06901. Serving elevated American comfort food.
                  </ListItem>
                </List>
              </Box>
              <Box>
                <Heading
                  as="h3"
                  fontSize={["md", "lg"]}
                  mb={2}
                  color="#4a4a4a"
                  fontFamily="'Montserrat', sans-serif"
                >
                  Indian Restaurants
                </Heading>
                <List spacing={2} fontSize={["sm", "md"]} color="#4a4a4a">
                  <ListItem>
                    <strong>Taj Stamford</strong> – 211 Summer St, Stamford, CT 06901.{" "}
                    <Link color="blue.500" href="http://www.tajstamford.com/" isExternal>
                      Website
                    </Link>
                  </ListItem>
                  <ListItem>
                    <strong>Navaratna</strong> – 133 Atlantic St, Stamford, CT 06901.{" "}
                    <Link color="blue.500" href="https://navaratnact.com/" isExternal>
                      Website
                    </Link>
                  </ListItem>
                  <ListItem>
                    <strong>Chutni Biryani & Noodle Bar</strong> – 211 Main St, Stamford, CT 06901. Casual eatery with build-your-own biryani.
                  </ListItem>
                  <ListItem>
                    <strong>Saravanaa Bhavan</strong> – 1033 Washington Blvd, Stamford, CT 06901.{" "}
                    <Link color="blue.500" href="http://www.saravanaabhavan.us/" isExternal>
                      Website
                    </Link>
                  </ListItem>
                </List>
              </Box>
            </VStack>
          </MotionBox>

          {/* Things To Do Section */}
          <MotionBox
            bg={sectionBg}
            boxShadow={sectionShadow}
            borderRadius="md"
            p={["4", "6"]}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Heading
              as="h2"
              fontSize={["lg", "xl"]}
              mb={4}
              color="#a2b798"
              fontFamily="'Montserrat', sans-serif"
            >
              Things to Do
            </Heading>
            <List spacing={2} fontSize={["sm", "md"]} color="#4a4a4a">
                <ListItem>
                Attend a performance by Yo-Yo Ma at the Palace Theater in downtown Stamford!
                <br/>
                We're going to the Sunday afternoon performance and would love for you to join us &nbsp;
                <Link color="blue.500" href="https://orchestralumos.org/our-common-world/" isExternal>
                  here
                </Link>
                .
              </ListItem>
              <ListItem>
                Check out local events and activities in Stamford at{" "}
                <Link color="blue.500" href="https://www.heystamford.com/" isExternal>
                  Hey Stamford
                </Link>
                .
              </ListItem>

            </List>
          </MotionBox>

          <Divider borderColor="#ccc" />
          <Text fontSize={["xs", "sm"]} color="#666" textAlign="center">
            If you have any questions or need assistance during the weekend, please reach out to us.
          </Text>
        </VStack>
      </Container>
    </>
  );
}

export default Details;
