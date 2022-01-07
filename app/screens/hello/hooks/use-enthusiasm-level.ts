import React from 'react';

interface EnthusiasmLevel {
  onIncrement: () => void;
  onDecrement: () => void;
  getExclamationMarks: () => string;
}

export const useEnthusiasmLevel = (): EnthusiasmLevel => {
  const [enthusiasmLevel, setEnthusiasmLevel] = React.useState(0);
  const onIncrement = (): void => setEnthusiasmLevel(enthusiasmLevel + 1);
  const onDecrement = (): void =>
    setEnthusiasmLevel(enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0);

  const getExclamationMarks = (): string =>
    enthusiasmLevel > 0 ? Array(enthusiasmLevel + 1).join('!') : '';

  return { onIncrement, onDecrement, getExclamationMarks };
};
