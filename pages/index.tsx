import { Layout, Text } from "components/shared";

export default function Home() {
  return (
    <Layout type="page">
      <Text title css={{ mt: "$6" }}>
        {`Higher`}
      </Text>
      <Text as="h1">{`The research assistance`}</Text>
    </Layout>
  );
}
