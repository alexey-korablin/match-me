"use client";

import {
  registerSchema,
  RegisterSchema,
} from "@/app/lib/schemas/RegisterSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { GiPadlock } from "react-icons/gi";
import { BUTTON_TEXT, HEADER_TEXT } from "./constants";

const { REGISTER_FORM_HEADER_TITLE, REGISTER_FORM_HEADER_CAPTION } =
  HEADER_TEXT;

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors, isSubmitting },
  } = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    mode: "onTouched",
  });

  const onSubmit = (data: RegisterSchema) => {
    console.log("register data", data);
  };

  return (
    <Card className="w-3/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-default">
          <div className="flex flex-row gap-3 items-center">
            <GiPadlock size={38} />
            <h1 className="text-3xl font-semibold">
              {REGISTER_FORM_HEADER_TITLE}
            </h1>
          </div>
          <p className="text-neutral-500">{REGISTER_FORM_HEADER_CAPTION}</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              defaultValue=""
              label="Name"
              variant="bordered"
              {...register("name")}
              isInvalid={!!errors.name}
              errorMessage={errors.name?.message}
            />
            <Input
              defaultValue=""
              label="Email"
              variant="bordered"
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message}
            />
            <Input
              defaultValue=""
              label="Password"
              type="password"
              variant="bordered"
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message}
            />
            <Button
              isLoading={isSubmitting}
              isDisabled={!isValid}
              fullWidth
              color="default"
              type="submit"
            >
              {BUTTON_TEXT}
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default RegisterForm;
