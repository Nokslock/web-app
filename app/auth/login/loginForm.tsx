import AuthButton from "@/components/AuthButton";
export default function LoginForm() {
  return (
    <>
      <form action="">
        <div>
          <label>Email</label>
          <input type="email" placeholder="Your Email" />
        </div>

        <div>
            <label>Password</label>
            <input type="password" placeholder="Your Password"/>
        </div>

        <div>
            <AuthButton type="login" loading={false} />
        </div>
      </form>
    </>
  );
}
