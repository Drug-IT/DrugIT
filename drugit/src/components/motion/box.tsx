import { chakra, ChakraProps } from "@chakra-ui/react";
import { HTMLMotionProps, motion } from "framer-motion";

export interface MotionBoxProps
  extends HTMLMotionProps<"div">,
    Omit<ChakraProps, "transition" | "color"> {}

export const MotionBox = motion.create(chakra.div);
