import Image from "next/image";

/**
 * Product screenshot in a browser-chrome frame. Ships a light and a dark
 * capture and lets CSS pick the one matching the active theme.
 */
export function Shot({
  name,
  alt,
  url = "app.geniaops.com",
  priority = false,
  lang = "es",
}: {
  name: string;
  alt: string;
  url?: string;
  priority?: boolean;
  lang?: "es" | "en";
}) {
  const directory = lang === "en" ? "/shots/en" : "/shots";

  return (
    <figure className="shot-frame m-0">
      <div className="shot-bar">
        <span className="shot-dot" />
        <span className="shot-dot" />
        <span className="shot-dot" />
        <span className="shot-url">{url}</span>
      </div>
      <div className="relative">
        <Image
          src={`${directory}/${name}-light.png?v=20260910`}
          alt={alt}
          width={4320}
          height={2700}
          quality={92}
          priority={priority}
          sizes="(max-width: 1100px) 100vw, 1100px"
          className="block h-auto w-full dark:hidden"
        />
        <Image
          src={`${directory}/${name}-dark.png?v=20260910`}
          alt={alt}
          width={4320}
          height={2700}
          quality={92}
          sizes="(max-width: 1100px) 100vw, 1100px"
          className="hidden h-auto w-full dark:block"
        />
      </div>
    </figure>
  );
}
