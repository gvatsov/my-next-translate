import React from "react";
import { CircularProgress, styled } from "@mui/material";

interface IProps {
  center?: boolean;
  centerX?: boolean;
  size?: number;
  className?: string;
}

// Todo: Naming?
const StyledCircularProgress: React.FC<IProps> = ({ center, centerX, size, className }) => {
  const loader = <StyledLoader size={size} className={className} />;

  if (centerX) return <StyledCenterX>{loader}</StyledCenterX>;
  else if (center) return <StyledCenter>{loader}</StyledCenter>;
  else return loader;
};

export default StyledCircularProgress;

const StyledCenterX = styled("div")(() => ({
  margin: "auto",
}));
const StyledCenter = styled("div")(() => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
}));
const StyledLoader = styled(CircularProgress)(() => ({
  display: "block",
  margin: "auto",
  padding: "10px",
}));
