import { Container, Text, Button, Icon } from "components/shared";
import { PaperPlaneIcon } from "components/icons";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <Container type="page">
      <Text title as="h1" css={{ mt: "$6" }}>
        {`Higher`}
      </Text>
      <Text
        css={{ fontSize: "$5", marginBottom: "$3" }}
      >{`The research assistance`}</Text>
      <Button
        data-cy="login"
        onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
      >
        {`Try for free`}
      </Button>
    </Container>
  );
}
