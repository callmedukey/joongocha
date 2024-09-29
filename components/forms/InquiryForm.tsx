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
  smallLabel,
}: {
  className?: string;
  smallLabel?: boolean;
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      car: "",
      phone: "",
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
        id="inquiry-form"
        className={cn(
          "max-w-4xl mx-auto form-outer form-inner rounded-2xl bg-[#FFF1E8] border isolate relative flex flex-col items-center xl:px-40",
          className
        )}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <p className="flex flex-col gap-4 leading-none text-center lg:text-left lg:ml-24 mb-[var(--mb)] z-10 lg:self-start">
          <span className="thirty-fixed font-bold">중고차수출 무료 상담</span>
          <span>1:1 실시간 상담으로 쉽고 빠른 내차시세조회</span>
        </p>
        <div className="max-w-2xl w-full self-start">
          <FormField
            control={form.control}
            name="car"
            render={({ field }) => (
              <FormItem className="flex items-center gap-8 mb-[var(--mb)] mx-auto lg:mx-0 max-w-lg">
                <FormLabel className="text-base sm:text-xl">차량명</FormLabel>
                <FormControl>
                  <Input
                    placeholder="차량을 입력해 주세요 예. K5"
                    {...field}
                    className="bg-white z-10 relative"
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
              <FormItem className="flex items-center gap-8 mb-[var(--mb-half)] mx-auto lg:mx-0 max-w-lg">
                <FormLabel className="text-base sm:text-xl">핸드폰</FormLabel>
                <FormControl>
                  <Input
                    placeholder="010"
                    className="bg-white z-10 relative"
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
              <FormItem className="flex items-center gap-2 sm:gap-4 mb-[var(--mb-half)] mx-auto lg:mx-0 max-w-lg">
                <FormControl>
                  <Checkbox
                    className="size-4 rounded-none"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel
                  className={cn(
                    "text-base !mt-0 translate-y-0.5 text-left",
                    smallLabel && "text-sm"
                  )}
                >
                  개인 정보 수집/이용 동의
                </FormLabel>
                <Link
                  href="/terms"
                  target="_blank"
                  className={cn(
                    "text-base !ml-6 !mt-0 translate-y-0.5",
                    smallLabel && "text-sm"
                  )}
                >
                  내용보기
                </Link>
              </FormItem>
            )}
          />
        </div>

        <div className="w-full flex justify-center mt-[var(--mb)]">
          <Button
            type="submit"
            disabled={isLoading}
            className="mx-auto flex items-center gap-2"
          >
            1분만에 내차 최고가 시세 조회 click!
            <Image
              src="/click.svg"
              alt="클릭"
              width={24}
              height={24}
              priority
              quality={100}
            />
          </Button>
        </div>
        <Image
          src={Consultant}
          alt="상담원"
          width={350}
          quality={100}
          priority
          className="absolute bottom-0 right-[10%] xl:right-[20%] -z-10 hidden lg:block self-start"
        />
      </form>
    </Form>
  );
};

export default InquiryForm;
