import AuthButton from "@/components/AuthButton";
export default function LoginForm() {
  return (
    <>
      <form action="">
        <div className="pb-5">
          <label className="block text-sm font-bold text-gray-500">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="mt-1 w-full px-4 p-2  h-13 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
          />
        </div>

        <div  className="pb-5">
          <label className="block text-sm font-bold text-gray-500">
            Password
          </label>
          <input
            type="password"
            placeholder="Your Password"
            className="mt-1 w-full px-4 p-2  h-13 rounded-md border border-gray-200 bg-white text-sm text-gray-700"
          />
        </div>

        <div className="pb-5">
            <p className="text-md text-end text-blue-400">Forgot Password?</p>
        </div>

        <div>
          <AuthButton type="login" loading={false} />
        </div>
      </form>
    </>
  );
}
