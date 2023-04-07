const ExamplesList = (props) => {
  return (
    <ul>
      {props.examples.map((example, index) => (
        <li key={index}>
          {example.name} - {example.description}
        </li>
      ))}
    </ul>
  );
};

export default ExamplesList;
