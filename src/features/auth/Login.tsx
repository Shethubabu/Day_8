import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "./schema"
import { z } from "zod"
import { useDispatch } from "react-redux"
import { login } from "./authSlice"
import { useNavigate, Link } from "react-router-dom"

type FormData = z.infer<typeof loginSchema>

export default function Login(){

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm<FormData>({
    resolver:zodResolver(loginSchema)
  })

  const onSubmit=(data:FormData)=>{

    dispatch(login({
      name:"User",
      email:data.email,
      role:"customer"
    }))

    navigate("/")
  }

  return(

    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">

      <h2 className="text-2xl font-bold mb-6">
        Login
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>

          <input
          {...register("email")}
          placeholder="Email"
          className="border w-full p-2 rounded"
          />

          <p className="text-red-500 text-sm">
            {errors.email?.message}
          </p>

        </div>

        <div>

          <input
          type="password"
          {...register("password")}
          placeholder="Password"
          className="border w-full p-2 rounded"
          />

          <p className="text-red-500 text-sm">
            {errors.password?.message}
          </p>

        </div>

        <button
        className="bg-blue-600 text-white w-full p-2 rounded"
        >
          Login
        </button>

      </form>

      <p className="mt-4 text-sm">

        Don't have account ?

        <Link
        to="/signup"
        className="text-blue-600 ml-2"
        >
          Signup
        </Link>

      </p>

    </div>

  )

}