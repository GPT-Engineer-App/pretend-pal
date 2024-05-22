import { Container, Text, VStack, Box, Heading, Button, Flex, Spacer, HStack, IconButton } from "@chakra-ui/react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box bg="blue.500" w="100%" p={4} color="white">
        <Flex alignItems="center">
          <Heading size="md">My Landing Page</Heading>
          <Spacer />
          <HStack spacing={4}>
            <IconButton aria-label="Home" icon={<FaHome />} />
            <IconButton aria-label="About" icon={<FaInfoCircle />} />
            <IconButton aria-label="Contact" icon={<FaPhone />} />
          </HStack>
        </Flex>
      </Box>
      <Container centerContent maxW="container.md" height="80vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          <Heading as="h1" size="2xl">Welcome to Our Website</Heading>
          <Text fontSize="xl" textAlign="center">We provide the best solutions for your business. Join us and grow together.</Text>
          <Button colorScheme="blue" size="lg">Get Started</Button>
        </VStack>
      </Container>
    </Container>
  );
};

export default Index;