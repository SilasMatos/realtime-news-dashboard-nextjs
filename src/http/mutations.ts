import { apiClient } from "@/http/api-client"
import type { LoginMutation, RegisterMutation } from "@/types/mutations-types"

export async function login(payload: LoginMutation) {
  const response = await apiClient.post("/auth/login", payload)
  return response.data
}

export async function register(payload: RegisterMutation) {
  const response = await apiClient.post("/auth/register", payload)
  return response.data
}

export async function logout() {
  const response = await apiClient.post("/auth/logout")
  return response.data
}
