import { chakra, ChakraProps } from "@chakra-ui/react";
import { HTMLMotionProps, isValidMotionProp, motion } from "framer-motion";

export interface MotionBoxProps
  extends HTMLMotionProps<"div">,
    Omit<ChakraProps, "transition" | "color"> {
  transition?: any;
}

export const MotionBox = chakra(motion.div, {
  shouldForwardProp: isValidMotionProp,
});
