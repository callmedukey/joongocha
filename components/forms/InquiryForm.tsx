"use client";
import Image from "next/image";
import Consultant from "@/public/consultant.png";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import formSchema from "@/description/zod";
import { submitInquiry } from "@/actions/submit";
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const InquiryForm = ({
  className,
  disableId,
  outer,
}: {
  className?: string;
  disableId?: boolean;
  outer?: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      car: "",
      phone: "010",
      agreement: true,
    },
  });
  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    if (!data.agreement) {
      return alert("개인 정보 수집/이용 동의를 해야 합니다.");
    }
    const result = await submitInquiry(data);

    if (result.message) {
      alert(result.message);
      form.reset();
      setIsLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form
        className={cn(
          outer
            ? "max-w-4xl mx-auto form-outer form-inner rounded-2xl bg-white border-[#444444] isolate relative xl:px-40 border-[3px]"
            : "max-w-4xl mx-auto form-outer form-inner rounded-2xl bg-white isolate relative lg:px-24 xl:px-40 lg:py-20",
          className
        )}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div
          className={cn(
            !outer &&
              "flex flex-col bg-white p-8 border-[#444444] rounded-lg border-[3px] w-full max-w-lg lg:max-w-xl mx-auto md:ml-0 md:mr-auto"
          )}
        >
          <p className="flex flex-col gap-4 leading-none text-center mb-[1rem] z-10">
            <span className="thirty-fixed font-bold">
              중고차수출 <span className="text-primary">무료 상담</span>
            </span>
            <span className="font-normal">
              1:1 실시간 상담으로 쉽고 빠른 내차시세조회
            </span>
          </p>
          <div className="max-w-2xl w-full self-start space-y-2">
            <FormField
              control={form.control}
              name="car"
              render={({ field }) => (
                <FormItem className="flex items-center relative">
                  <Image
                    src="/car.png"
                    alt="차량"
                    width={72}
                    height={72}
                    className="absolute"
                  />
                  <label
                    htmlFor={field.name}
                    ref={field.ref}
                    className={cn(
                      "absolute left-20 top-0 text-24 flex flex-col gap-2",
                      field.value && "sr-only"
                    )}
                  >
                    <span>차량명</span>
                    <span className="text-primary">ex) K5</span>
                  </label>
                  <FormControl>
                    <Input
                      className="!mt-0 h-[4.5rem] rounded-none bg-inputBg pl-20 placeholder:invisible"
                      placeholder="ex) K5"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem className="flex items-center gap-8">
                  <FormLabel className="h-full font-medium !twenty min-w-[3rem] sr-only">
                    연락처
                  </FormLabel>
                  <FormControl>
                    <Input
                      className="!mt-0 h-[4.5rem] rounded-none bg-inputBg pl-6"
                      placeholder="010"
                      {...field}
                      onChange={(e) => {
                        let value = e.target.value.replace(/\D/g, "");
                        if (value.length > 3 && value.length <= 7) {
                          value = `${value.slice(0, 3)}-${value.slice(3)}`;
                        } else if (value.length > 7) {
                          value = `${value.slice(0, 3)}-${value.slice(
                            3,
                            7
                          )}-${value.slice(7, 11)}`;
                        }
                        field.onChange(value.slice(0, 13));
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="agreement"
              render={({ field }) => (
                <FormItem className="flex flex-row items-center justify-between gap-4 !my-[2rem]">
                  <div className="flex items-center gap-2">
                    <FormControl>
                      <Checkbox
                        className="size-6 rounded-full border-black"
                        checked={field.value}
                        onCheckedChange={field.onChange}
                      />
                    </FormControl>
                    <FormLabel className="text-base font-bold">
                      개인정보 수집/이용 동의
                    </FormLabel>
                  </div>
                  <Link
                    href="/terms"
                    target="_blank"
                    className="font-notoSans font-normal text-footerColor py-0 !my-0"
                  >
                    {`
                [내용보기]
                  `}
                  </Link>
                </FormItem>
              )}
            />
          </div>

          <div className="w-full flex justify-center !mt-0">
            <Button
              type="submit"
              disabled={isLoading}
              className="sm:twenty w-full font-notoSans font-normal text-sm flex items-center mx-auto py-3 xl:pr-8 h-full leading-relaxed xl:leading-none flex-wrap relative hover:-translate-y-2 transition-all duration-300 gap-2"
            >
              <Image
                src="/car_icon.png"
                alt="클릭"
                width={36}
                height={36}
                className="float-left"
              />
              <span>1분만에 내차 시세 조회 click!</span>
            </Button>
          </div>
        </div>
        <Image
          src={Consultant}
          alt="상담원"
          width={350}
          quality={100}
          priority
          className="absolute bottom-0 right-0 lg:right-[10%] xl:right-[10%] 2xl:right-[15%] -z-10 hidden md:block self-start"
        />
      </form>
    </Form>
  );
};

export default InquiryForm;
