interface IMenuToggleProps {
  onClick: () => void;
}

export const MenuToggle = ({ onClick }: IMenuToggleProps) => {
  return (
    <div className="menu cross z-50">
      <label>
        <input
          type="checkbox"
          onChange={onClick}
        />
        <svg viewBox="0 0 90 90" xmlns="http://www.w3.org/2000/svg">
          <path className="line--1" d="M0 70l28-28c2-2 2-2 7-2h64" />
          <path className="line--2" d="M0 50h99" />
          <path className="line--3" d="M0 30l28 28c2 2 2 2 7 2h64" />
        </svg>
      </label>
    </div>
  );
};

export default MenuToggle;
