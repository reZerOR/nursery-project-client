const Heading = ({ text }: { text: string }) => {
  return (
    <h1 className="font-libre text-center text-primary1 text-6xl font-bold mt-20 mb-16">
      {text}
    </h1>
  );
};

export default Heading;
