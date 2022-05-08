import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { Container, Breadcrumbs } from "components/shared";
import { HomeIcon, BoxIcon, FileIcon } from "components/icons";
import { useFiles, useModules } from "hooks";

export const Header = () => {
  const { selectedModule, setSelectedModule, modules } = useModules();
  const { selectedFile } = useFiles();
  const [pageItems, setPageItems] = useState([]);
  const [breadcrumbItems, setBreadcrumbItems] = useState([]);

  const router = useRouter();

  useEffect(() => {
    if (modules.length > 0) {
      let moduleToSet;
      if (!Boolean(selectedModule)) {
        moduleToSet = modules.find((m) => m.id === router.query?.id);
        console.log({ modules });
        setSelectedModule(moduleToSet);
      } else {
        moduleToSet = selectedModule;
      }

      const items = [
        {
          icon: <HomeIcon />,
          label: "Home",
          href: "/dashboard",
        },
        {
          icon: <BoxIcon />,
          label: `${moduleToSet?.name}`,
        },
      ];

      setPageItems(items);
      setBreadcrumbItems(items);
    }
  }, [router.query?.id, modules]);

  useEffect(() => {
    if (selectedFile && pageItems.length > 0) {
      const fileItem = {
        icon: <FileIcon />,
        label: `${selectedFile.label}`,
      };
      setBreadcrumbItems([...pageItems, fileItem]);
    }
  }, [selectedFile?.id, pageItems]);

  return (
    <Container.Header>
      <Breadcrumbs items={breadcrumbItems} />
    </Container.Header>
  );
};
