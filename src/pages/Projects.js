import { AbsoluteCenter, Box, Button, Card, Image, Text, SimpleGrid, CardHeader, CardBody, CardFooter, Flex, HStack, Separator, Link, Tag } from "@chakra-ui/react";
import Proj from '../components/data/Projects.json'
import { AiFillEye, AiOutlineCode } from "react-icons/ai";
import Spline from "@splinetool/react-spline";
import { useColorModeValue } from "../components/ui/color-mode";

export default function Projects() {
  const selectedClass = 'All';
  const sortedProj = [...Proj].sort((a, b) => a.title.localeCompare(b.title));
  const splineBg = useColorModeValue("https://prod.spline.design/ZA09FN7haCz3VUbt/scene.splinecode", "https://prod.spline.design/o9ovXjiWWrDUSROR/scene.splinecode")
  return (
    <div style={{ position: "relative" }}>

      <Box position="fixed"  w="100%" h="100%">
        <Spline alt="Rebecca Frey" scene={splineBg} style={{ width: "100%", height: "100%" }} />
      </Box>

      <Box position="relative" pointerEvents="none">
        <Box position="relative" w="100%" h="100px" ><AbsoluteCenter axis="both"><Text textStyle="2xl">{selectedClass}</Text></AbsoluteCenter></Box>

        <SimpleGrid px="20px" gap="20px" minChildWidth="350px">
          {sortedProj.map(proj =>
            selectedClass === 'All' || proj.class === selectedClass ? (
              <div>
                <Card.Root key={proj.id} h="100%" pointerEvents="auto">
                  <CardHeader>
                    <Flex gap="5">
                      <Image w="50px" h="50px" src={proj.logo} borderRadius="lg" />
                      <Box>
                        <h1>{proj.title}</h1>
                        <Text color="gray.400" fontSize="xs"> by {proj.author} </Text>
                      </Box>
                    </Flex>
                    {proj.tag !== "" && (
                      <Box>
                        <Tag.Root>
                          <Tag.Label>{proj.tag}</Tag.Label>
                        </Tag.Root>
                      </Box>
                    )}
                  </CardHeader>
                  <CardBody color="gray.500">
                    {proj.description}
                  </CardBody>
                  <Separator variant="dotted" size="xs" pt="5" />
                  <CardFooter justifyContent="flex-end">
                    <HStack gap="2">
                      {proj.view !== "" && (
                        <Button variant="ghost" as={Link} href={proj.view}><AiFillEye /> View</Button>
                      )}
                      <Button variant="ghost" as={Link} href={proj.code}><AiOutlineCode /> Code</Button>
                    </HStack>
                  </CardFooter>
                </Card.Root>
              </div>) : null)}
        </SimpleGrid>
      </Box>
    </div>
  );
}
