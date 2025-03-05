
import { Text, Heading, Container } from "@chakra-ui/react"

export const Landing = () => {
  return (
    <Container fluid>
        <Heading my="10px" p="10px">Landing</Heading>
        <Text ml="30px">AAAAAAA</Text>
        <ul>
          <li><a href="/overlook">Overlook</a></li>
          <li><a href="/admin">Admin</a></li>
          <li><a href="/menu">Menu</a></li>
        </ul>
    </Container>
  )
}
