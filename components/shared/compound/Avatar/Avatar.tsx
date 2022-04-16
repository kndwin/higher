import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { styled } from "stitches.config";
import { Text } from "components/shared";

const StyledAvatar = styled(AvatarPrimitive.Root, {
  width: "100%",
  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "$primary",
  color: "$bg",
  fontSize: "$3",
  lineHeight: 1,
  fontWeight: 500,
  borderRadius: "100%",
});

const StyledImage = styled(AvatarPrimitive.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "100%",
});

const StyledFallback = styled(AvatarPrimitive.Fallback, {
  size: "$4",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "$primary",
  color: "$bg",
  fontSize: "$3",
  lineHeight: 1,
  fontWeight: 500,
  borderRadius: "100%",
});

export const Avatar = ({ children, ...props }: any) => (
  <StyledAvatar {...props}>{children}</StyledAvatar>
);

const Image = ({ children, ...props }: any) => (
  <StyledImage {...props}>{children}</StyledImage>
);

const Fallback = ({ children, ...props }: any) => (
  <StyledFallback {...props}>
    <Text>{children}</Text>
  </StyledFallback>
);

Avatar.Image = Image;
Avatar.Fallback = Fallback;
