import "bootstrap/dist/css/bootstrap.min.css";

import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://tourism-app-backend.herokuapp.com/add-service", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {});

    reset();
  };

  return (
    <div style={{ paddingTop: "150px", textAlign: "center" }} className="row">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input placeholder="Package Name" {...register("PackageName")} />

        <input placeholder=" Tour Timing" {...register("Time")} />
        <input placeholder=" Tour type" {...register("Type")} />

        <input
          {...register("Expense")}
          type="number"
          placeholder="Amount BDT"
        />
        <input {...register("image")} placeholder="Image Url" />

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddService;
