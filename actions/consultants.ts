'use server';

import prisma from '@/lib/prisma';
import { revalidatePath } from 'next/cache';

export const addConsultant = async (data: any) => {
  const consultant = await prisma.consultant.create({
    data,
  });

  if (!consultant) {
    return { success: false, error: "상담원 추가 오류입니다." };
  }

  revalidatePath("/admin");

  return { success: true };
};

export const updateConsultant = async ({consultantId, data}: {consultantId: number, data: any}) => {
  const consultant = await prisma.consultant.update({
    where: { id: consultantId },
    data,
  });

  if (!consultant) {
    return { success: false, error: "상담원 수정 오류입니다." };
  }

  revalidatePath("/admin");

  const firstActiveConsultant = await prisma.consultant.findFirst({
    where: {active: true},
    orderBy: {id: 'asc'}
  });

  (global as any).nextConsultant = firstActiveConsultant?.id;

  return { success: true };
};


export const deleteConsultant = async (id: number) => {
  const consultant = await prisma.consultant.delete({
    where: { id },
  });

  if (!consultant) {
    return { success: false, error: "상담원 삭제 오류입니다." };
  }
  revalidatePath("/admin");
  return { success: true };
};
