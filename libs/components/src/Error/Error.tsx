export const Error = ({ errorMsg }: { errorMsg?: string }) => {
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {errorMsg}
    </div>
  );
};
