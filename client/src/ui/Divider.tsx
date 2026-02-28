const Divider = ({ style }: { style: string }) => {
  return (
    <div>
      <div class={`h-px ${style} opacity-20`}></div>
    </div>
  );
};

export default Divider;
