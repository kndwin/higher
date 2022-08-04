import { useState, useEffect, ReactNode } from "react";
import { useRouter } from "next/router";
import { signIn, useSession } from "next-auth/react";

import { Container, Text, Button, Icon } from "components/shared";
import { styled } from "stitches.config";
import { LogoIcon } from "components/icons";
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
      <StyledHeaderContainer>
        <Box css={{ d: "flex", ai: "center", gap: "$3" }}>
          <LogoIcon />
          <Text b>Higher</Text>
        </Box>
        <Box css={{ d: "flex", ai: "center", gap: "$3" }}>
          <IconContainer
            as="a"
            href="https://github.com/kndwin/higher"
            target="_blank"
            css={{
              textDecoration: "none",
              "&:visited, &:focus, &:active": { color: "inherit" },
            }}
          >
            <GitHubLogoIcon />
          </IconContainer>
          <ButtonLogin>Login</ButtonLogin>
        </Box>
      </StyledHeaderContainer>
      <MainContent>
        <TextContainer>
          <StyledText as="h1">Read.</StyledText>
          <StyledText as="h1">Think.</StyledText>
          <StyledText as="h1">Write.</StyledText>
        </TextContainer>
        <Text as="p" css={{ fz: "$4", mb: "$3", ta: "center", maw: "40ch" }}>
          <b>{`Higher `}</b>
          {`helps you make progress on that research when you don't want to.`}
        </Text>
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
          <StyledCard
            css={{ lg: "linear-gradient(120deg, $amber3, $orange3)" }}
          >
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
        <Text
          as="h2"
          css={{ mt: "$6", fz: "$5", fw: "bold", "@bp1": { fz: "$6" } }}
        >{`Testimonies`}</Text>
        <TestimonyCard>
          <Avatar
            src="https://media-exp1.licdn.com/dms/image/C5603AQFXSnDtMVTC_w/profile-displayphoto-shrink_800_800/0/1629096419596?e=1665014400&v=beta&t=-JP7-wXIU4leQp8cQoQlCAOH7HvZSVfdJyc6TAw0dmI"
            alt="Profile"
          />
          <Box css={{ d: "flex", fd: "column", gap: "$2" }}>
            <Box css={{ mx: "auto", mb: "$3" }}>
              <Text b css={{ fz: "$3", ta: "center" }}>
                {`Tina`}
              </Text>
              <Text css={{ color: "$slate11" }}>{`Masters in Teaching`}</Text>
            </Box>
            <Text as="blockquote" css={{ fz: "$3" }}>
              {`"Love it, been using it for university and it's a life saver"`}
            </Text>
          </Box>
        </TestimonyCard>
      </MainContent>
      <Footer>
        <Text>Made with ❤ by kndwin</Text>
      </Footer>
    </Container>
  );
}

const Footer = styled("footer", {
  d: "grid",
  gtc: "repeat(2, 1fr)",
  gap: "$3",
  w: "100%",
  py: "$4",
  ji: "center",
  bc: "$slate3",
  mt: "$4",
});

const TestimonyCard = styled("div", {
  br: "$3",
  miw: "20em",
  mih: "10em",
  p: "$4",
  bc: "$slate3",
  mt: "$4",
  d: "flex",
  fd: "column",
  gap: "$3",
  "& > img": {
    mx: "auto",
  },
});

const Avatar = styled("img", {
  size: "5em",
  br: "$round",
});

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

const StyledHeaderContainer = styled("header", {
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
  w: "100%",
  maw: "70em",
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

const MainContent = styled("main", {
  fx: 1,
  d: "flex",
  fd: "column",
  ai: "center",
});

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

const Box = styled("div", {});
