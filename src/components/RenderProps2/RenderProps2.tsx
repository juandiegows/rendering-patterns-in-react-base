import ParentComponent from "./ParentComponent";
import ChildComponent from "./ChildComponent";
export const RenderProps2 = () => {
  return (
    <div>
      <ParentComponent render={(names) => <ChildComponent data={names} />} />
    </div>
  );
};
