import { useMutation } from "@tanstack/react-query";
import { signin } from "./axios";
export const useSignin = () => {
  return useMutation({
    mutationFn: signin,
  });
};
