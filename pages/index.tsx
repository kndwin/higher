import { Container, Text, Button, Icon } from "components/shared";
import { PaperPlaneIcon } from "components/icons";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <Container type="page">
      <Text title as="h1" css={{ mt: "$6" }}>
        {`Higher`}
      </Text>
      <Text as="h1">{`The research assistance`}</Text>
      <Button onClick={() => signIn("google", { callbackUrl: "/dashboard" })}>
        <Icon css={{ mr: "$2" }}>
          <PaperPlaneIcon />
        </Icon>
        {`Try for free`}
      </Button>
    </Container>
  );
}
