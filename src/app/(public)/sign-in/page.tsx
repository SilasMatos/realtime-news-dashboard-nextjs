'use client'

import { useForm } from 'react-hook-form'
import { useLogin } from '@/hooks/useMutation'
import { LoginMutation } from '@/types/mutations-types'
import { useRouter } from 'next/navigation'
import { Mail, Lock, LogIn, GanttChartSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function SignInPage() {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginMutation>()

  const { mutate, isPending, isError, error } = useLogin({
    onSuccess: () => {
      alert('Login realizado com sucesso!')
      router.push('/')
    },
    onError: err => console.error('Erro ao fazer login:', err)
  })

  const onSubmit = (data: LoginMutation) => {
    mutate(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-col items-center mb-8">
            <GanttChartSquare className="h-12 w-12 text-purple-600 mb-3" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Bem-vindo de volta
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Faça login para acessar sua conta
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="email"
                  {...register('email', { required: 'Email é obrigatório' })}
                  placeholder="seuemail@exemplo.com"
                  className="w-full py-2 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Senha
                </label>
                <a
                  href="/forgot-password"
                  className="text-xs text-purple-600 hover:text-purple-800"
                >
                  Esqueceu a senha?
                </a>
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="password"
                  {...register('password', { required: 'Senha é obrigatória' })}
                  placeholder="Digite sua senha"
                  className="w-full py-2 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
              />
              <label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-700"
              >
                Lembrar-me
              </label>
            </div>
            <Button type="submit" disabled={isPending}>
              {isPending ? (
                'Entrando...'
              ) : (
                <>
                  <LogIn className="w-4 h-4 mr-2" />
                  Entrar
                </>
              )}
            </Button>
          </form>

          {isError && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md mt-4 text-sm">
              <p>Erro: {(error as Error).message}</p>
            </div>
          )}

          <p className="text-center text-sm mt-6">
            Não possui uma conta?{' '}
            <a
              href="/register"
              className="text-purple-600 font-medium hover:text-purple-800"
            >
              Cadastre-se gratuitamente
            </a>
          </p>
        </div>

        <div className="hidden md:block md:w-1/2 bg-purple-600">
          <div className="h-full flex items-center justify-center p-12">
            <div className="text-white max-w-sm">
              <h2 className="text-3xl font-bold mb-4">Olá novamente!</h2>

              <div className="p-4 bg-purple-500 bg-opacity-30 rounded-lg">
                <h3 className="font-medium mb-2">Precisa de ajuda?</h3>
                <p className="text-sm text-purple-100">
                  Se tiver alguma dúvida, entre em contato com nosso suporte
                  através do email{' '}
                  <span className="font-medium">suporte@exemplo.com</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
