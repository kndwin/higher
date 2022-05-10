import { useState } from "react";
import { signIn } from "next-auth/react";

import { Container, Text, Button, Icon } from "components/shared";

export default function Home() {
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    signIn("google", { callbackUrl: "/dashboard" });
  };

  return (
    <Container type="page">
      <Text title as="h1" css={{ mt: "$6" }}>
        {`Higher`}
      </Text>
      <Text
        css={{ fontSize: "$5", marginBottom: "$3" }}
      >{`The research assistant`}</Text>
      <Button
        state={loading ? "loading" : "default"}
        data-cy="login"
        onClick={() => handleSignIn()}
      >
        {`Try for free`}
      </Button>
    </Container>
  );
}
