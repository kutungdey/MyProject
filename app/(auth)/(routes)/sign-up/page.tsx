import { SignUp } from "@clerk/nextjs";
 
const SignUpPage = () => {
  return (
    <div className="flex flex-col items-center">
      <SignUp />
    </div>
  )
}

export default SignUpPage