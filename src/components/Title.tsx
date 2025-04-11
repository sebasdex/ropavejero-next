function Title({ text }: { text: string }) {
  return (
    <div className="w-full px-4">
      <div className="max-w-screen-2xl mx-auto text-center m-6">
        <span className="inline-block w-full bg-gray-100 text-gray-900 py-6 px-8 rounded-xl uppercase font-semibold tracking-widest text-base sm:text-lg shadow-sm relative">
          {text}
          <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-14 h-[3px] bg-gray-100 rounded" />
        </span>
      </div>
    </div>
  );
}

export default Title;
