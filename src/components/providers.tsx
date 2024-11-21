"use client";
import React, { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/react";

export type ProvidersProps = {
  children: ReactNode;
};

export const Providers = ({ children }: ProvidersProps) => (
  <NextUIProvider>{children}</NextUIProvider>
);
