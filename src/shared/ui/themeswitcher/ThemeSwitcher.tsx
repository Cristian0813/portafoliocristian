'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { MoonIcon } from './MoonIcon';
import { SunIcon } from './SunIcon';
import {
  useSwitch,
  VisuallyHidden,
  SwitchProps,
} from '@nextui-org/react';

const ThemeSwitcher = (props: SwitchProps) => {
  const {
    Component,
    slots,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch(props);

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex flex-col gap-1">
      <Component
        {...getBaseProps()}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      >
        <VisuallyHidden>
          <input {...getInputProps()} />
        </VisuallyHidden>
        <div
          {...getWrapperProps()}
          className={slots.wrapper({
            class: [
              'w-7 h-7',
              'flex items-center justify-center bg-zinc-100',
              'rounded-lg',
              'cursor-pointer',
              theme === 'dark',
            ],
          })}
        >
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </div>
      </Component>
    </div>
  );
};

export default ThemeSwitcher;
