"use client";
import Button from "@/components/button/Button";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "@/components/input/Input";
import styles from "./contactForm.module.css";

type Inputs = {
  name: string;
  email: string;
  phone?: string;
  message: string;
};

const phoneNumberRegex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
const contactSchema = {
  name: string().trim().required().min(3).max(40),
  email: string()
    .email()
    .required()
    .matches(/@[^.]*\./),
  phone: string().matches(phoneNumberRegex, "Is not a number"),
  message: string().trim().required().min(3),
};

function ContactForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(object().shape(contactSchema)),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
    router.replace("/services/modalwindow");
  };
  return (
    <form className={styles.contactform} onSubmit={handleSubmit(onSubmit)}>
      <Input
        type={"text"}
        placeholder={"Введіть Ваше імя"}
        name={"name"}
        register={register}
        label={"Імя та побатькові:"}
        required={true}
        errors={errors}
      />

      <Input
        type={"email"}
        placeholder={"Введіть Ваш email"}
        name={"email"}
        register={register}
        label={"Введіть email:"}
        required={true}
        errors={errors}
      />

      <Input
        type={"text"}
        placeholder={"Введіть Ваш телефон"}
        name={"phone"}
        register={register}
        label={"Введіть номер телефону:"}
        required={true}
        errors={errors}
      />

      <textarea
        placeholder="Ваше повідомлення"
        {...register("message", { required: true })}
        className={styles.textarea}
      />

      {errors.message?.message && (
        <div style={{ color: "red" }}>Введіть повідомлення</div>
      )}
      <Button type={"submit"}>Надіслати</Button>
    </form>
  );
}

export default ContactForm;
