const Divider = ({ style }: { style: string }) => {
  return (
    <div>
      <div class={`w-full h-px ${style} opacity-20`}></div>
    </div>
  );
};

export default Divider;
