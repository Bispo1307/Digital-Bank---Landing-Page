export const BtnPrimary = ({ className }) => {
  return (
    <button
      className={`w-42 h-12 transition text-white font-bold rounded-3xl cursor-pointer bg-linear-to-tr from-cyan-400 to-green-500 hover:cursor-pointer hover:from-cyan-hover hover:to-green-hover ${className}`}
    >
      Solicitar Convite
    </button>
  );
};
