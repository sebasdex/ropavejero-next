function Title({ text }: { text: string }) {
  return (
    <span className="text-center p-4 uppercase font-semibold tracking-wider">
      {text}
    </span>
  );
}

export default Title;