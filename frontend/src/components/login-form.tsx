import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import axios from "axios"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useRef } from "react"
import { BACKEND_URL } from "@/config/config"
import { useNavigate } from "react-router-dom"

// Define a type for the component's props
interface LoginFormProps extends React.ComponentPropsWithoutRef<"div"> {
  sign: boolean;
  title: string;
}

export function LoginForm({
  sign,
  title,
  className,
  ...props
}: LoginFormProps) {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  async function handleFormSubmit(event: React.FormEvent) {
    event.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (email && password) {
      try {
        if (title.toLowerCase() === "sign in") {
          // Assuming you have a sign-in endpoint
          const response= await axios.post(BACKEND_URL + "/api/v1/signin", {
            username:email,
            password
          });
          localStorage.setItem("token",response.data.token);
          navigate("/dashboard");
          alert("You have signed in!");
        } else {
          // Handle signup
          await axios.post(BACKEND_URL + "/api/v1/signup", {
            username:email,
            password
          });
          navigate("/signin");
          alert("You have signed up!");
        }
      } catch (error) {
        console.error("Operation failed:", error);
        alert("Operation failed. Please try again.");
      }
    } else {
      alert("Please fill in both fields.");
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center mb-2">{title}</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleFormSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  ref={emailRef}
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" type="password" required ref={passwordRef} />
              </div>
              <Button type="submit" className="w-full">
                {title}
              </Button>
            </div>

            {!sign && (
              <div className="mt-4 text-center text-sm">
                Don&apos;t have an account?{" "}
                <a href="/signup" className="underline underline-offset-4">
                  Sign up
                </a>
              </div>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
