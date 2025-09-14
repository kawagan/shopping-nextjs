'use client';

import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '@mui/material';
import { useEffect, useState } from 'react';

const ModeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, [mounted]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!mounted) {
    return null;
  }

  return (
    <Button
      variant="outlined"
      size="small"
      onClick={toggleTheme}
      sx={{ minWidth: 'auto', p: 1, mr: 1 }}
    >
      {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
};

export default ModeToggle;
