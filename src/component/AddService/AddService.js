import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";

import { useForm } from "react-hook-form";

const AddService = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    fetch("https://tourism-app-backend.herokuapp.com/add-package", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    }).then(() => {});

    reset();
  };

  return (
    <div
      className="cont row"
      style={{
        paddingTop: "100px",
        textAlign: "center",
      }}
    >
      <div
        className="mx-auto col-lg-6"
        style={{ backgroundColor: "cornflowerblue" }}
      >
        <h3 style={{ color: "wheat", marginTop: "30px" }}>
          Input the data to add a new package
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="form-style">
          <input placeholder="Package Name" {...register("PackageName")} />

          <input placeholder=" Tour Timing" {...register("Time")} />
          <input placeholder=" Tour type" {...register("Type")} />

          <input
            {...register("Expense")}
            type="number"
            placeholder="Amount BDT"
          />
          <input {...register("image")} placeholder="Image Url" />

          <div className="mx-auto">
            <Button type="submit" variant="dark">
              Add Package
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddService;
