import { useEffect, useState } from "react";
import { Container, FileTree, Button, Flex, Text } from "components/shared";
import { useFiles, useFileUpload, useModules } from "hooks";

export const Sidebar = () => {
  const { files, setFiles, newFolder, setSelectedFile } = useFiles();
  const { state } = useFileUpload();
  const { selectedModule } = useModules();

  const handleAddFolder = () => {
    setFiles([...files, newFolder]);
  };

  const stateCSS = {
    loading: {
      opacity: 0.5,
      pointerEvents: "none",
    },
  };

  const { updatedFiles } = useTrackFilesUpdated();

  useEffect(() => {
    setFiles(selectedModule?.fileStructure);
  }, [JSON.stringify(selectedModule?.id)]);

  useEffect(() => {
    if (selectedModule) {
      setSelectedFile(null);
    }
  }, [selectedModule?.id]);

  return (
    <Container.Sidebar
      css={{
        ...stateCSS[state],
      }}
    >
      <Flex
        css={{
          flexDirection: "column",
          mt: "$3",
          gap: "$2",
          alignItems: "flex-start",
        }}
      >
        {files?.length > 0 ? (
          <FileTree items={files} setItems={setFiles} removable indicator />
        ) : (
          <Flex css={{ background: "$slate3", py: "$2", px: "$3", br: "$2" }}>
            <Text>{`No folders added 😥`}</Text>
          </Flex>
        )}
        <Button
          onClick={() => handleAddFolder()}
          css={{ mx: "auto" }}
        >{`Add Folder`}</Button>
      </Flex>
    </Container.Sidebar>
  );
};

const useTrackFilesUpdated = () => {
  let updatedFiles = [];
  const { files } = useFiles();
  const { selectedModule, updateModule } = useModules();
  const [prevFile, setPrevFile] = useState(null);

  const handleUpdateModule = async ({ id, fileStructure }) => {
    const updatedModule = await updateModule({
      where: { id },
      data: {
        fileStructure,
      },
    });
  };

  useEffect(() => {
    setPrevFile(JSON.stringify(files));
    if (
      prevFile !== JSON.stringify(files) &&
      Boolean(prevFile) &&
      Array.isArray(files)
    ) {
      updatedFiles = [...files];
      handleUpdateModule({
        id: selectedModule.id,
        fileStructure: updatedFiles,
      });
    }
  }, [JSON.stringify(files)]);

  return { updatedFiles };
};
