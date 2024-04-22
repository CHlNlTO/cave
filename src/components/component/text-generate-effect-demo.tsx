"use client";
import { TextGenerateEffect } from "@/components/component/text-generate-effect";

const words = `At Cave Technologies, our mission is to empower small and medium-sized service-based local businesses by providing them with high-quality templated or customized websites that enhances their online presence and enable them to thrive in the digital landscape. We are committed to delivering innovative solutions, exceptional service, and ongoing support to help our clients achieve their goals and succeed in their respective industries.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
