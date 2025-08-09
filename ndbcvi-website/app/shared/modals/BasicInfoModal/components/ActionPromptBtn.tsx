"use client";

import React from 'react'

interface ActionPromptBtnProps {
    title: string;
    url: string
  }
export const ActionPromptBtn = ({ title, url }: ActionPromptBtnProps) => {
  return (
    <a href={url} target='_blank'>
        <button
            type="button"
            className="bg-[#1D1841] text-white text-[14px] px-[24px] py-[8x] font-[500] py-2 px-6 rounded-[100px] text-nowrap">
            {title}
        </button>
    </a>
  )
}
