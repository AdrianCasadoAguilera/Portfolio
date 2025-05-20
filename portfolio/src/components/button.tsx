type ButtonProps = {
  children?: React.ReactNode;
  text?: string;
  icon?: React.ReactNode;
  onClick: () => void;
};

export default function Button({ children, text, icon, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-fit px-3 py-1 border flex gap-2 items-center justify-center border-[#dadada] hover:bg-gray-100 transition rounded-lg cursor-pointer"
    >
      {children ? (
        children
      ) : (
        <div className="flex gap-2 items-center">
          {icon}
          <p>{text}</p>
        </div>
      )}
    </button>
  );
}
