import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { GPUPlan } from "@/components/GPUPlan";
import { MagicCard } from "@/components/ui/magic-card";


interface PricingProps {
  title: string;
  description: string;
  plans: {
    name: string;
    price: string;
    details: string[];
  }[];
}

const pricingSections: PricingProps[] = [
  {
    title: "GPU Cloud Pricing",
    description:
      "Powerful & cost-effective GPUs built to support any workload. GPUs are billed by the minute or hour, providing flexibility and scalability. Choose from a variety of GPU options tailored to your specific needs.",
    plans: [
      // GPU plans are now handled by the GPUPlan component
    ],
  },
  {
    title: "Storage Pricing",
    description:
      "Flexible and cost-effective storage solutions for every workload. Choose between persistent and temporary storage with no ingress/egress fees.",
    plans: [
      {
        name: "Pod Storage",
        price: "$0.10/GB/Month",
        details: ["Running Pods", "Volume", "Container Disk"],
      },
      {
        name: "Persistent Network Storage (Under 1TB)",
        price: "$0.07/GB/Month",
        details: ["Customizable storage volumes", "North America and Europe"],
      },
      {
        name: "Persistent Network Storage (Over 1TB)",
        price: "$0.05/GB/Month",
        details: ["Cost-effective for large-scale workloads"],
      },
    ],
  },
  {
    title: "Serverless Pricing",
    description:
      "Deploy and manage serverless workloads with ease. Pay only for the resources you use, and scale seamlessly as your demand grows. You only pay for what you use on DataFlux, billed by the second. When you don’t run anything, it scales to zero and you don’t pay a thing.",
    plans: [
      {
        name: "Basic Compute",
        price: "$0.02/GB-second",
        details: ["1M requests free per month", "Up to 512MB memory"],
      },
      {
        name: "Advanced Compute",
        price: "$0.06/GB-second",
        details: ["1M requests free per month", "Up to 2GB memory"],
      },
    ],
  },
  {
    title: "Model Charges",
    description:
      "Access a wide range of pre-trained models or fine-tune your own. Pay per request based on the model's usage and performance.",
    plans: [
      {
        name: "H100 NVL Inference",
        price: "$0.01/request",
        details: ["94GB VRAM", "High-speed inference"],
      },
      {
        name: "A100 PCIe Inference",
        price: "$0.005/request",
        details: ["80GB VRAM", "Optimized for cost-efficiency"],
      },
    ],
  },
  {
    title: "Public Models",
    description:
      "Thousands of open-source machine learning models have been contributed by our community and more are added every day. When running or training one of these models, you only pay for the time it takes to process your request.Each model runs on different hardware and takes a different amount of time to run. You’ll find estimates for how much they cost under 'Run time and cost' on the model’s page. For example, for stability-ai/sdxl:This model costs approximately $0.012 to run on DataFlux, but this varies depending on your inputs.Predictions run on Nvidia A40 (Large) GPU hardware, which costs $0.000725 per second. Predictions typically complete within 17 seconds.",
    plans: [
      {
        name: "Stability AI SDXL",
        price: "$0.012/request",
        details: [
          "Runs on Nvidia A40 (Large) GPU",
          "Approx. 17 seconds per prediction",
          "Cost varies based on input complexity",
        ],
      },
      // Add more public models as needed
    ],
  },
  {
    title: "Image Models",
    description:
      "Utilize specialized image models for various applications. Pay per image generated or processed, ensuring you only pay for what you use.",
    plans: [
      {
        name: "Flux 1.1 Pro",
        price: "$0.040 / image",
        details: ["High-quality image generation", "Fast processing time"],
      },
      {
        name: "Flux Canny Pro",
        price: "$0.050 / image",
        details: ["Edge detection", "Professional-grade results"],
      },
      {
        name: "Ideogram v2 Turbo",
        price: "$0.050 / image",
        details: ["Enhanced speed", "Optimized for large batches"],
      },
      // Add more image models as needed
    ],
  },
  {
    title: "Video Models",
    description:
      "DataFlux hosts a selection of video models. These are either priced per video or per second of video generated by the model, allowing you to choose the pricing structure that best fits your project needs.",
    plans: [
      {
        name: "Minimax Video-01",
        price: "$0.500 / video",
        details: ["Standard video processing", "High-resolution output"],
      },
      {
        name: "Haiper Video-2",
        price: "$0.050 / second of video",
        details: ["Real-time video generation", "Optimized for speed"],
      },
      // Add more video models as needed
    ],
  },
  {
    title: "Language Models",
    description:
      "DataFlux hosts a selection of powerful language models, including Llama 3 and Mistral. Pricing is based on the number of tokens processed. A language model processes text by breaking it into tokens, or pieces of words. DataFlux uses the Llama tokenizer to calculate the number of tokens in text inputs and outputs once it's finished.Learn more about how language model pricing works.",
    plans: [
      {
        name: "Granite 20B Code Instruct 8K",
        price: "$0.100 / 1M tokens (input) | $0.500 / 1M tokens (output)",
        details: ["Advanced code assistance", "Handles large inputs"],
      },
      {
        name: "Meta Llama-2-13B Chat",
        price: "$0.100 / 1M tokens (input) | $0.500 / 1M tokens (output)",
        details: ["Conversational AI", "High-quality responses"],
      },
      {
        name: "Mistral 7B Instruct",
        price: "$0.050 / 1M tokens (input) | $0.250 / 1M tokens (output)",
        details: ["Instruction-following", "Efficient performance"],
      },
      // Add more language models as needed
    ],
  },
  {
    title: "Private Models",
    description:
      "You aren’t limited to the public models on DataFlux: you can deploy your own custom models using Cog, our open-source tool for packaging machine learning models.Unlike public models, most private models (with the exception of fast booting models) run on dedicated hardware so you don't have to share a queue with anyone else. This means you pay for all the time instances the model is online: the time it spends setting up; the time it spends idle, waiting for requests; and the time it spends active, processing your requests. If you get a ton of traffic, we automatically scale up and down to handle the demand. For fast booting models, you'll only be billed for the time the model is active and processing your requests, so you won't pay for idle time like with other private models. Fast booting versions of models are labeled as such in the model's version list. As with public models, if you would like more control over how a private model is run, you can use deployments.",
    plans: [
      {
        name: "Standard Private Model",
        price: "Custom Pricing",
        details: [
          "Dedicated hardware",
          "Automatic scaling based on demand",
          "Pay for setup, idle, and active time",
        ],
      },
      {
        name: "Fast Booting Private Model",
        price: "Custom Pricing",
        details: [
          "Only pay for active processing time",
          "No charges for idle time",
          "Ideal for high-traffic applications",
        ],
      },
      // Add more private model options as needed
    ],
  },
  // Add more sections if needed
];

export const Pricing = () => {
  const { theme } = useTheme();

  return (
    <section id="pricing" className="container mx-auto px-4 py-12 sm:py-18">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        Flexible <span className="text-primary">Pricing</span>
      </h2>
      {pricingSections.map((section) => (
        <div key={section.title} className="mt-16 max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">
            {section.title}
          </h3>
          <p className="text-left text-muted-foreground pt-2 whitespace-pre-line">
            {section.description}
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {section.title === "GPU Cloud Pricing" ? (
              <MagicCard
                className={`cursor-pointer flex-col items-center justify-between text-center ${
                  theme === "dark" ? "bg-[#262626]" : "bg-[#D9D9D955]"
                }`}
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
              >
                {/* GPUPlan content adapted to fit MagicCard */}
                <div className="w-full p-4 sm:p-6">
                  <GPUPlan
                    type="Community Cloud"
                    basePrice={1.19}
                    maxGPUs={8}
                    details={{
                      1: ["80GB VRAM", "117GB RAM", "8 vCPUs", "Community Cloud"],
                      2: ["160GB VRAM", "234GB RAM", "16 vCPUs", "Community Cloud"],
                      3: ["240GB VRAM", "351GB RAM", "24 vCPUs", "Community Cloud"],
                      4: ["320GB VRAM", "468GB RAM", "32 vCPUs", "Community Cloud"],
                      5: ["400GB VRAM", "585GB RAM", "40 vCPUs", "Community Cloud"],
                      6: ["480GB VRAM", "702GB RAM", "48 vCPUs", "Community Cloud"],
                      7: ["560GB VRAM", "819GB RAM", "56 vCPUs", "Community Cloud"],
                      8: ["640GB VRAM", "936GB RAM", "64 vCPUs", "Community Cloud"],
                    }}
                  />
                </div>
              </MagicCard>
            ) : (
              section.plans.map((plan) => (
                <MagicCard
                  key={plan.name}
                  className="cursor-pointer flex flex-col items-start justify-between p-4 sm:p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-left"
                  gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                >
                  <div>
                    <h4 className="text-lg font-semibold">{plan.name}</h4>
                    <div className="text-2xl font-bold mt-2">{plan.price}</div>
                  </div>
                  <div className="mt-4">
                    <ul className="space-y-2">
                      {plan.details.map((detail, index) => (
                        <li key={index} className="flex items-center">
                          <Check className="text-green-500 mr-2" /> {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 w-full">
                    <Button className="w-full">Choose Plan</Button>
                  </div>
                </MagicCard>
              ))
            )}
          </div>
        </div>
      ))}
    </section>
  );
};
