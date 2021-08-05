import { MoonIcon,SunIcon } from "@chakra-ui/icons";
import { IconButton ,useColorMode } from '@chakra-ui/react'
import React from "react";

export const DarkModeSwitch: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <IconButton
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      icon={isDark ? <SunIcon /> : <MoonIcon />}
      color="current"
      variant="ghost"
      onClick={toggleColorMode}
    />
  )
}
