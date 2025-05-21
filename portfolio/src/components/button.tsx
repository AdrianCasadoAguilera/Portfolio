type ButtonProps = {
  children?: React.ReactNode;
  text?: string;
  icon?: React.ReactNode;
  onClick: () => void;
  mobileText?: string;
};

export default function Button({ children, text, icon, onClick, mobileText }: ButtonProps) {
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
          <p className="hidden md:block">{text}</p>
          <p className=" md:hidden">{mobileText}</p>
        </div>
      )}
    </button>
  );
}
