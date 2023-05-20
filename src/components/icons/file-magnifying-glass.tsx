import { Box } from "@chakra-ui/react";
import { ChakraProps } from "@chakra-ui/system/dist/types/system.types";

export const FileMagnifyingGlassIcon = (props: ChakraProps) => (
  <Box
    as={"svg"}
    aria-hidden="true"
    focusable="false"
    data-icon="file-magnifying-glass"
    role="img"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 384 512"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity="0.4"
      d="M256 128V0H48C21.49 0 0 21.49 0 48v416C0 490.5 21.49 512 48 512h288c26.51 0 48-21.49 48-48V128H256zM312.1 440.1C308.3 445.7 302.2 448 296 448s-12.28-2.344-16.97-7.031l-48.67-48.67C214.5 402.1 195.1 408 176 408c-57.44 0-104-46.56-104-104S118.6 200 176 200s104 46.56 104 104c0 20-5.922 38.5-15.71 54.36l48.67 48.67C322.3 416.4 322.3 431.6 312.1 440.1zM176 248c-30.88 0-56 25.12-56 56c0 30.88 25.12 56 56 56c30.88 0 56-25.12 56-56C232 273.1 206.9 248 176 248z"
    ></path>
    <path
      fill="currentColor"
      fillOpacity="1"
      d="M256 0v128h128L256 0zM264.3 358.4C274.1 342.5 280 324 280 304c0-57.44-46.56-104-104-104S72 246.6 72 304s46.56 104 104 104c19.1 0 38.5-5.922 54.36-15.71l48.67 48.67C283.7 445.7 289.8 448 296 448s12.28-2.344 16.97-7.031c9.375-9.375 9.375-24.56 0-33.94L264.3 358.4zM176 360c-30.88 0-56-25.12-56-56c0-30.88 25.12-56 56-56c30.88 0 56 25.12 56 56C232 334.9 206.9 360 176 360z"
    ></path>
  </Box>
);
