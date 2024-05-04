import * as yup from "yup";

export const homeSchema = yup
  .object({
    title: yup.string().min(5).max(50).required(),
    country: yup.string().min(5).max(50).required(),
    state: yup.string().min(5).max(50).required(),
    city: yup.string().min(5).max(50).required(),
    price: yup.number().required().typeError("Ammount should be number"),
    description: yup.string().min(10).max(20000).required(),
    categories: yup
      .mixed<Array<string> | []>()
      .test(
        "categories",
        "please select at least one category",
        (data: any) => {
          const isValid = data?.lenght >= 1;
          return isValid;
        }
      ),

    image: yup.mixed().test("image", "Only JPEG, PNG WEPB", (file: any) => {
      const isValid =
        file?.type === "image/jpeg" ||
        file?.type === "image/png" ||
        file?.type === "image/wepb";

      return isValid;
    })
    
  })
  .required();

  export type AddHomeType = yup.InferType<typeof homeSchema>
