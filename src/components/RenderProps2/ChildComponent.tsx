interface ChildComponentProps {
  data: string[];
}


const ChildComponent : React.FC<ChildComponentProps> = ({ data }) => {
  return (
    <>
      {data.map((name, index) => (
        <p key={index}>{name}</p>
      ))}
    </>
  );
};

export default ChildComponent;
