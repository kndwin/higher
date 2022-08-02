import { useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

import { Container, Text, Button, Icon } from "components/shared";
import { styled } from "stitches.config";
import {
  GitHubLogoIcon,
  LightningBoltIcon,
  ViewGridIcon,
  ArchiveIcon,
} from "@radix-ui/react-icons";

export default function Home() {
  const { data } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (Boolean(data?.user?.id)) {
      router.push("/dashboard");
    }
  }, [data?.user?.id]);

  return (
    <Container type="page">
      <Header />
      <TextContainer>
        <StyledText>Read.</StyledText>
        <StyledText>Think.</StyledText>
        <StyledText>Write.</StyledText>
      </TextContainer>
      <Text
        css={{ fz: "$4", mb: "$3", ta: "center", maw: "40ch" }}
      >{`Higher helps you make progress on that research when you don't want to.`}</Text>
      <Grid css={{ mt: "$4" }}>
        <StyledCard css={{ lg: "linear-gradient(120deg, $red3, $violet3)" }}>
          <Title>
            <IconContainer>
              <GitHubLogoIcon />
            </IconContainer>
            <Text b size="4">
              Open source
            </Text>
          </Title>
          <Text css={{ mt: "$3" }}>Build your own!</Text>
        </StyledCard>
        <StyledCard css={{ lg: "linear-gradient(120deg, $grass3, $cyan4)" }}>
          <Title>
            <IconContainer>
              <LightningBoltIcon />
            </IconContainer>
            <Text b size="4">
              Blazingly fast
            </Text>
          </Title>
          <Text css={{ mt: "$3" }}>Build with speed</Text>
        </StyledCard>
        <StyledCard css={{ lg: "linear-gradient(120deg, $amber3, $orange3)" }}>
          <Title>
            <IconContainer>
              <ViewGridIcon />
            </IconContainer>
            <Text b size="4">
              Organize
            </Text>
          </Title>
          <Text css={{ mt: "$3" }}>All in one place</Text>
        </StyledCard>
        <StyledCard css={{ lg: "linear-gradient(120deg, $red3, $hlPeach4)" }}>
          <Title>
            <IconContainer>
              <ArchiveIcon />
            </IconContainer>
            <Text b size="4">
              Free-tier
            </Text>
          </Title>
          <Text css={{ mt: "$3" }}>512MB of free storage</Text>
        </StyledCard>
      </Grid>
    </Container>
  );
}

const Title = styled("div", {
  d: "flex",
  ai: "center",
  gap: "$3",
});

const IconContainer = styled("div", {
  size: "2em",
  bc: "$slate2",
  p: "$2",
  br: "$3",
  svg: { size: "100%" },
});

const Grid = styled("div", {
  d: "grid",
  "@bp1": {
    gtc: "repeat(1, 1fr)",
  },
  "@bp2": {
    gtc: "repeat(2, 1fr)",
  },
  "@bp3": {
    gtc: "repeat(4, 1fr)",
  },
  gap: "$3",
  w: "100%",
});

const StyledCard = styled("div", {
  br: "$3",
  p: "$3",
});

const StyledText = styled(Text, {
  fz: "6em",
  lineHeight: "1",
  fw: 900,
});

const TextContainer = styled("div", {
  letterSpacing: "-.03em",
  mt: "10em",
  mb: "3em",
  d: "flex",
  fd: "column",
  w: "100%",
  ta: "center",
});

const Header = () => {
  return (
    <StyledHeaderContainer>
      <Box css={{ d: "flex", ai: "center", gap: "$2" }}>
        <IconSvg />
        <Text b>Higher</Text>
      </Box>
      <Box css={{ d: "flex", ai: "center", gap: "$3" }}>
        <IconContainer
          as="a"
          href="https://github.com/kndwin/higher"
          target="_blank"
          css={{ textDecoration: "none", "&:visited": { color: "inherit" } }}
        >
          <GitHubLogoIcon />
        </IconContainer>
        <ButtonLogin>Login</ButtonLogin>
      </Box>
    </StyledHeaderContainer>
  );
};

const Box = styled("div", {});

const StyledHeaderContainer = styled("div", {
  top: "$3",
  d: "flex",
  ai: "center",
  jc: "space-between",
  pos: "fixed",
  height: "5em",
  gap: "$2",
  br: "$3",
  background: "rgba(200, 200, 200, .3)",
  backdropFilter: "blur(10px)",
  w: "calc(100vw - 2em)",
  px: "2em",
  "@bp1": {
    w: "calc(100vw - 2em)",
    px: "2em",
  },
  "@bp2": {
    w: "calc(100vw - 2em)",
    px: "2em",
  },
  "@bp3": {
    w: "calc(100vw - 8em)",
    px: "2.5em",
  },
});

const IconSvg = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 428 389.11"
  >
    <g>
      <g>
        <circle
          cx="214.15"
          cy="181"
          r="171"
          fill="#fff"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="20"
        ></circle>
        <path d="M413 134.11H15.29a15 15 0 00-15 15v15.3C.12 168 0 171.52 0 175.11c0 118.19 95.81 214 214 214 116.4 0 211.1-92.94 213.93-208.67 0-.44.07-.88.07-1.33v-30a15 15 0 00-15-15z"></path>
      </g>
    </g>
  </svg>
);

const ButtonLogin = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false);

  const handleSignIn = () => {
    setLoading(true);
    signIn("google", { callbackUrl: "/dashboard" });
  };
  return (
    <Button
      state={loading ? "loading" : "default"}
      data-cy="login"
      onClick={() => handleSignIn()}
    >
      {children}
    </Button>
  );
};
