import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description should be at least 3 characters" })
    .max(50),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(0.01)
    .max(100_000),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  }),
});

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

type ExpenseFormData = z.infer<typeof schema>;

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });
  return (
    <div className="m-4">
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <div className="mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className="input-group-text my-span"
                id="inputGroup-sizing-default"
              >
                Description
              </span>
            </div>
            <input
              {...register("description")}
              id="description"
              type="text"
              className="form-control"
            />
          </div>
        </div>
        {errors.description && (
          <p className="text-danger">{errors.description.message}</p>
        )}
        <div className="mb-3">
          <div className="input-group">
            <div className="input-group-prepend">
              <span
                className="input-group-text my-span"
                id="inputGroup-sizing-default"
              >
                Amount
              </span>
            </div>{" "}
            <input
              {...register("amount", { valueAsNumber: true })}
              id="amount"
              type="number"
              className="form-control"
            />
          </div>

          {errors.amount && (
            <p className="text-danger">{errors.amount.message}</p>
          )}
        </div>
        <div className="mb-3">
          <div className="input-group ">
            <div className="input-group-prepend ">
              <span
                className="input-group-text my-span"
                id="inputGroup-sizing-default"
              >
                Category
              </span>
            </div>
            <select
              {...register("category")}
              id="category"
              className="form-select"
            >
              <option value=""></option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>

          {errors.category && (
            <p className="text-danger">{errors.category.message}</p>
          )}
        </div>
        <button className="btn btn-primary ">Add to expenses list</button>
      </form>
    </div>
  );
};

export default ExpenseForm;
