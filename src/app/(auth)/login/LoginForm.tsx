"use client";

import { Button, Card, CardBody, CardHeader, Input } from "@nextui-org/react";
import { GiPadlock } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchema } from "@/app/lib/schemas/LoginSchema";
import {
  LABELS,
  LOGIN_FORM_HEADER_CAPTION,
  LOGIN_FORM_HEADER_TITLE,
  SUBMIT_BUTTON_TEXT,
} from "./constants";

const { EMAIL, PASSWORD } = LABELS;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchema) => {
    console.log("data", data);
  };

  return (
    <Card className="w-3/5 mx-auto">
      <CardHeader className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-2 items-center text-default">
          <div className="flex flex-row gap-3 items-center">
            <GiPadlock size={38} />
            <h1 className="text-3xl font-semibold">
              {LOGIN_FORM_HEADER_TITLE}
            </h1>
          </div>
          <p className="text-neutral-500">{LOGIN_FORM_HEADER_CAPTION}</p>
        </div>
      </CardHeader>
      <CardBody>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <Input
              defaultValue=""
              label={EMAIL}
              variant="bordered"
              {...register("email")}
              isInvalid={!!errors.email}
              errorMessage={errors.email?.message as string}
            />
            <Input
              defaultValue=""
              label={PASSWORD}
              variant="bordered"
              type="password"
              {...register("password")}
              isInvalid={!!errors.password}
              errorMessage={errors.password?.message as string}
            />
            <Button
              fullWidth
              color="default"
              type="submit"
              isDisabled={!isValid}
            >
              {SUBMIT_BUTTON_TEXT}
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  );
};

export default LoginForm;
