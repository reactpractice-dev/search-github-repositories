type Props = {
  defaultValue: string;
  options: { value: string; label: string }[];
  label: string;
};
const SelectWithLabel: React.FC<Props> = ({ defaultValue, options, label }) => {
  return (
    <label className="border border-gray-300 p-2 bg-gray-50 text-gray-900 text-sm rounded mr-3">
      {label}
      <select
        name="perPage"
        className="p-2 focus:ring-blue-500 focus:border-blue-500"
        defaultValue={defaultValue}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default SelectWithLabel;
