'use client'

import { useForm } from 'react-hook-form'
import { useRegister } from '@/hooks/useMutation'
import { useRouter } from 'next/navigation'
import {
  User,
  Mail,
  Phone,
  Lock,
  Calendar,
  GanttChartSquare
} from 'lucide-react'

type RegisterMutation = {
  name: string
  email: string
  password: string
  confirmpassword: string
  birthdate?: string
  role?: string
  phone?: string
  username?: string
  typeuser?: string
}

const RegisterPage = () => {
  const router = useRouter()
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterMutation>()

  const { mutate, isPending, isError, error } = useRegister({
    onSuccess: () => {
      alert('Registro realizado com sucesso!')
      router.push('/login')
    },
    onError: err => console.error('Erro ao registrar:', err)
  })

  const onSubmit = (data: RegisterMutation) => {
    mutate(data)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
      <div className="w-full max-w-4xl flex bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full md:w-1/2 p-8">
          <div className="flex flex-col items-center mb-6">
            <GanttChartSquare className="h-10 w-10 text-purple-600 mb-2" />
            <h2 className="text-2xl font-semibold text-gray-800">
              Criar conta
            </h2>
            <p className="text-sm text-gray-500">
              Preencha os dados abaixo para se registrar
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nome completo
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  {...register('name', { required: 'Nome é obrigatório' })}
                  placeholder="Digite seu nome completo"
                  className="w-full py-2 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

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
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Telefone
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="tel"
                  {...register('phone')}
                  placeholder="+55 (99) 99999-9999"
                  className="w-full py-2 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Data de nascimento
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="date"
                  {...register('birthdate')}
                  className="w-full py-2 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Senha
              </label>
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirmar senha
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="password"
                  {...register('confirmpassword', {
                    required: 'Confirme a senha'
                  })}
                  placeholder="Confirme sua senha"
                  className="w-full py-2 px-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                />
              </div>
              {errors.confirmpassword && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.confirmpassword.message}
                </p>
              )}
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-3 mt-6">
              <button
                type="button"
                onClick={() => router.push('/login')}
                className="w-full md:w-1/2 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isPending}
                className="w-full md:w-1/2 bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center justify-center"
              >
                {isPending ? 'Registrando...' : 'Criar conta'}
              </button>
            </div>

            {isError && (
              <p className="text-red-500 text-sm mt-2 text-center">
                {(error as Error).message}
              </p>
            )}

            <p className="text-center text-sm mt-4">
              Já possui uma conta?{' '}
              <a
                href="/login"
                className="text-purple-600 font-medium hover:text-purple-800"
              >
                Entrar
              </a>
            </p>
          </form>
        </div>

        <div className="hidden md:block md:w-1/2 bg-purple-600">
          <div className="h-full flex items-center justify-center p-12">
            <div className="text-white max-w-sm">
              <h2 className="text-3xl font-bold mb-4">
                Bem-vindo à nossa plataforma
              </h2>
              <p className="text-purple-100">
                Crie sua conta para acessar todos os recursos e benefícios
                disponíveis para nossos usuários.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
