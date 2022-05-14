import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

import { Container, Text, Button, Icon } from "components/shared";

export default function Home() {
  const { data } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    signIn("google", { callbackUrl: "/dashboard" });
  };

  useEffect(() => {
    if (Boolean(data?.user?.id)) {
      router.push("/dashboard");
    }
  }, [data?.user?.id]);

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
