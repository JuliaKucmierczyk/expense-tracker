import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="m-4">
      <div className="input-group">
        <div className="input-group-prepend">
          <span
            className="input-group-text my-span"
            id="inputGroup-sizing-default"
          >
            Filter by category
          </span>
        </div>{" "}
        <select
          className="form-select"
          onChange={(event) => onSelectCategory(event.target.value)}
        >
          <option value="">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpenseFilter;
