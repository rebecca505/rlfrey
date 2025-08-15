import { Group, Button, Container, Link } from "@chakra-ui/react";
import { AiFillLinkedin, AiFillGithub, AiOutlineMail } from "react-icons/ai";


export default function Footer() {
  return (
    <Container fluid position="absolute" bottom="0" borderTopWidth="1px" centerContent p="4">
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