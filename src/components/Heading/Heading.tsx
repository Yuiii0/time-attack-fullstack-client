function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-bold text-2xl text-center my-12 text-gray-700">
      {children}
    </h2>
  );
}

export default Heading;
