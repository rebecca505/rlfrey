import { AbsoluteCenter, Box, Card, CardBody, CardFooter, CardHeader, SimpleGrid, Text } from "@chakra-ui/react";
import Courses from '../components/data/Classes.json'
import { useState } from "react";

export default function Classes() {
  const selectedYear = 'First';
  const selectedSem = 'Fall';
  const c = Courses.filter(course => course.semester === selectedSem && course.year === selectedYear)

  const [start, setStart] = useState(-2);
  const mod = (n, m) => ((n % m) + m) % m;
  const a = Array.from({ length: 3 }, (_, i) => c[mod(start + i, c.length)]);

  function handleClick() {
    setStart(prev => prev + 1);
  }

  return (
    <div>
      <Box position="relative" w="100%" h="100px" ><AbsoluteCenter axis="both"><Text textStyle="2xl">First-Year Fall</Text></AbsoluteCenter></Box>

      <SimpleGrid px="20px" gap="20px" minChildWidth="350px">
        {a.map(course => (
          <Card.Root key={course.id} h="100%" backgroundImage={`url(${course.img})`} backgroundPosition="center">
            <CardHeader>{course.title}</CardHeader>
            <CardBody>{course.description}</CardBody>
            <CardFooter>{course.link} </CardFooter>
          </Card.Root>
        ))}
      </SimpleGrid>
      {/* <button onClick={handleClick}>xx</button> */}
    </div>
  );
}
