
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { Form, useStepFormSetting } from "./Form";

const getLabelName = (kebabCase) =>
  kebabCase
    .split("-")
    .map((w) => w.replace(/^\w/, (c) => c.toUpperCase()))
    .join(" ");


function Input({ fieldName, id }) {

  const { register, formState: { errors } } = useFormContext();

  const hasRequiredError = errors[fieldName];

  const outLineStyle = hasRequiredError
    ? "focus:outline-strawberry-red"
    : "focus:outline-purplish-blue";

  return (
    <fieldset className="flex flex-col gap-1">
      <span className="flex justify-between text-xs md:text-sm">
        <label htmlFor={id}>
          {getLabelName(id ?? "")}
        </label>
        {hasRequiredError && (
          <strong className="text-strawberry-red">
            This field is required
          </strong>
        )}
      </span>
      <input
        className={`border border-light-gray rounded-md py-3 px-4 font-medium ${outLineStyle}`}
        {...register(fieldName, { required: true })}
      />
    </fieldset>
  );
}

export function Step1({ formId, onSubmit }) {

  const methods = useForm();

  const { name, email, phone } = useStepFormSetting((state) => state.setting);

  return (
    <FormProvider {...methods}>
      <Form
        id={formId}
        title="Personal info"
        description="Please provide your name, email address, and phone number."
        onSubmit={methods.handleSubmit(onSubmit)}
      >
        <section className="flex flex-col gap-4 md:gap-6">
          <Input
            id="name"
            type="text"
            placeholder="e.g. Stephen King"
            fieldName="name"
            defaultValue={name}
          />
          <Input
            id="email-address"
            type="email"
            placeholder="e.g. stephenking@lorem.com"
            fieldName="email"
            defaultValue={email}
          />
          <Input
            id="phone-number"
            type="tel"
            placeholder="e.g. +1 234 567 890"
            fieldName="phone"
            defaultValue={phone}
          />
        </section>
      </Form>
    </FormProvider>
  );
}
