import { useState } from "react";

interface ParentComponentProps {
  render: (name: string[]) => React.ReactNode;
}



const ParentComponent : React.FC<ParentComponentProps> = ({ render }) => {
  const [names] = useState<string[]>(["John", "Jane", "Doe"]);
  return (
    <div>
      {render(names)}
    </div>
  );
};

export default ParentComponent;
