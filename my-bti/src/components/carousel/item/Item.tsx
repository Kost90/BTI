import Link from "next/link";
import Button from "../../button/Button";
import { Typography, Box } from "@mui/material";
import {
  contentbox,
  heroText,
  paragraphStyle,
} from "./stylesconstants";

interface PropsParams {
  name: string;
  description: string;
  path: string;
}

const Item = async ({ name, description, path }: PropsParams) => {
  return (
    <Box sx={contentbox}>
      <Typography variant="h5" component="h3" align="center" sx={heroText}>
        {name}
      </Typography>
      <Typography align="center" paragraph sx={paragraphStyle}>
        {description}
      </Typography>
      <Button type={"button"}>
        <Link href={path} key={path}>Замовити</Link>
      </Button>
    </Box>
  );
};

export default Item;
