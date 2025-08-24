import { Group, Button, Container, Link } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { useColorModeValue } from "./ui/color-mode";


export default function Footer() {
  const colorBg = useColorModeValue('white', 'black')
  return (
    <Container bg={colorBg} fluid position="sticky" bottom="0" mt="10" borderTopWidth="1px" centerContent p="4">
        <Group>
          <Button variant="outline" borderWidth="0">
            <Link href="https://www.linkedin.com/in/beccafrey/"> <AiFillLinkedin /> </Link>
          </Button>
          <Button variant="outline" borderWidth="0">
            <Link href="https://github.com/rebecca505"> <AiFillGithub /> </Link>
          </Button>
          <Button variant="outline" borderWidth="0">
            <Link href="mailto:rlf2153@columbia.edu"> <AiOutlineMail /> </Link>
          </Button>
        </Group>
    </Container>
  );
}