function Title({ text }: { text: string }) {
  return (
    <span className="block my-8 text-center p-8 uppercase font-semibold tracking-widest text-gray-900 bg-gradient-to-b from-white to-gray-100 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 relative overflow-hidden group">
      <span className="relative z-10">{text}</span>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gray-900 rounded-b-md"></div>
    </span>
  );
}

export default Title;
