function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-bold text-2xl my-12 text-gray-700 text-center ">
      {children}
    </h2>
  );
}

export default Heading;
