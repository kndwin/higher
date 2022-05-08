import { Container, Breadcrumbs } from "components/shared";
import { HomeIcon, BoxIcon } from "components/icons";

export const Header = () => {
  const items = [
    {
      icon: <HomeIcon />,
      label: "Home",
      href: "/dashboard",
    },
  ];
  return (
    <Container.Header>
      <Breadcrumbs items={items} />
    </Container.Header>
  );
};
