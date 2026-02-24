import { useMutation } from "@tanstack/react-query"
import type { UseMutationOptions } from "@tanstack/react-query"
import { login, register, logout } from "@/http/mutations"
import type { RegisterMutation, LoginMutation } from "@/types/mutations-types"

export function useLogin(
  options?: UseMutationOptions<unknown, Error, LoginMutation>
) {
  return useMutation({
    mutationKey: ["login"],
    mutationFn: (payload: LoginMutation) => login(payload),
    retry: 0,
    ...options,
  })
}

export function useRegister(
  options?: UseMutationOptions<unknown, Error, RegisterMutation>
) {
  return useMutation({
    mutationKey: ["register"],
    mutationFn: (payload: RegisterMutation) => register(payload),
    retry: 0,
    ...options,
  })
}

export function useLogout(
  options?: UseMutationOptions<unknown, Error>
) {
  return useMutation({
    mutationKey: ["logout"],
    mutationFn: () => logout(),
    retry: 0,
    ...options,
  })
}

