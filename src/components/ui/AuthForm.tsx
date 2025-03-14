"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { Loader2, User } from "lucide-react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./form";
import { Input } from "./input";
import CustomInput from "./CustomInput";
import { useRouter } from "next/navigation";
import { authFormSchema } from "@/lib/utils";
// import { Button } from "./button";
import { Button } from "@/components/ui/button"


// import { signUp } from "@/lib/actions/user.actions";

function AuthForm({ type }: { type: string }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isloading, setisLoading] = useState(false);

  const formSchema = z.object({
    username: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
  });

  //   define form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    setisLoading(true);
    try {
      // sign up with appwrite and create a plaid link toke
      // if (type === "sign-up"){
      //    const newUser = await signUp(data)
      //    setUser(newUser)

      // }
      if (type === "sign-in") {
        // const response = await signIn({
        //     email: data.email,
        //     password: data.password
        // })
        // if (response){
        //     router.push("/")
        // }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  };
  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href={"/"} className="flex cursor-pointer items-center gap-1">
          <Image
            src="/icons/logo.svg"
            width={34}
            height={34}
            alt="Horizon logo"
          />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4 md:gap-8">{/* {plaidLink} */}</div>
      ) : (
        <>
          {" "}
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === "sign-up" && (
                <>
                  <div className="flex gap-4 ">
                    <CustomInput
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="Enter your first name"
                    />
                    <CustomInput
                      control={form.control}
                      name="lastName"
                      label="First Name"
                      placeholder="Enter your last name"
                    />
                  </div>

                  <CustomInput
                    control={form.control}
                    name="address1"
                    label="Address"
                    placeholder="Enter your specific address"
                  />
                  <CustomInput
                    control={form.control}
                    name="city"
                    label="city"
                    placeholder="Enter your City"
                  />
                  <div className="flex gap-4 ">
                    <CustomInput
                      control={form.control}
                      name="state"
                      label="state"
                      placeholder="example NY"
                    />

                    <CustomInput
                      control={form.control}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="example 11011"
                    />
                  </div>

                  <div className="flex gap-4 ">
                    <CustomInput
                      control={form.control}
                      name="dateOfBirth"
                      label="Date of Birth"
                      placeholder="YYYY-MM-DD "
                    />

                    <CustomInput
                      control={form.control}
                      name="ssn"
                      label="SSN"
                      placeholder="example 1234"
                    />
                  </div>
                </>
              )}

              <CustomInput
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your Email"
              />

              <CustomInput
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your Password"
              />

              <div className="flex flex-col gap-4">
                <Button className="form-btn" type="submit" disabled={isloading}>
                  {isloading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      isLoading...
                    </>
                  ) : type === "sign-in" ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1 ">
            <p className="text-14 font-normal text-gray-600">
              {type === "sign-in"
                ? "Don't have an account?"
                : "Already have an account?"}{" "}
            </p>
            <Link
              className="form-link"
              href={type === "sign-in" ? "/sign-up" : "/sign-in"}
            >
              {type === "sign-in" ? "Sign up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
}

export default AuthForm;
