import React, { FC, useState } from "react";

type ControlProps = {
  isOn: boolean;
  onToggle: (value: boolean) => void;
};

export const Toggle: FC<ControlProps> = ({ isOn, onToggle }: ControlProps) => {
  const [InternalIsOn, setInternalIsOn] = useState(isOn);
  const Toggle = () => {
    if (onToggle) {
      onToggle(!InternalIsOn);
    }
    setInternalIsOn(!InternalIsOn);
  };
  return (
  <button onClick={Toggle}>{InternalIsOn ? "ON" : "OFF"}</button>
  );
}
export const ParentComponent = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <div>
      <p>Toggle is {isOn ? "ON" : "OFF"}</p>
      <Toggle isOn={isOn} onToggle={setIsOn} />
    </div>
  );
};
