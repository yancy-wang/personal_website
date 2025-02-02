import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "raspberrypi",
  "apachekafka",
  "tensorflow",
  "nordicsemiconductor",
  "espressif",
  "edgeimpulse",
  "go",
  "cplusplus",
  "mysql",
  "python",
  "pytorch",
  "kubernetes",
];

export function IconCloudDemo() {
  const images = slugs.map(
    (slug) => `https://cdn.simpleicons.org/${slug}/${slug}`,
  );

  return (
    <div className="center-container ">
    <div className="relative flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-transparent">
      <IconCloud images={images} />
    </div>
    </div>
  );
}
