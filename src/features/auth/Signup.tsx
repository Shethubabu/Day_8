import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema } from "./schema"
import { z } from "zod"
import { useDispatch } from "react-redux"
import { login } from "./authSlice"
import { useNavigate, Link } from "react-router-dom"

type FormData = z.infer<typeof signupSchema>

export default function Signup(){

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState:{errors}
  } = useForm<FormData>({
    resolver:zodResolver(signupSchema)
  })

  const onSubmit=(data:FormData)=>{

    dispatch(login(data))

    navigate("/")
  }

  return(

    <div className="max-w-md mx-auto bg-white p-6 rounded shadow">

      <h2 className="text-2xl font-bold mb-6">
        Signup
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <input
          {...register("name")}
          placeholder="Name"
          className="border w-full p-2 rounded"
          />
          <p className="text-red-500 text-sm">
            {errors.name?.message}
          </p>
        </div>

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

        <div>

          <select
          {...register("role")}
          className="border w-full p-2 rounded"
          >

            <option value="customer">
              Customer
            </option>

            <option value="seller">
              Seller
            </option>

            <option value="admin">
              Admin
            </option>

          </select>

        </div>

        <button
        className="bg-blue-600 text-white w-full p-2 rounded"
        >
          Signup
        </button>

      </form>

      <p className="mt-4 text-sm">

        Already have account ?

        <Link
        to="/login"
        className="text-blue-600 ml-2"
        >
          Login
        </Link>

      </p>

    </div>

  )

}