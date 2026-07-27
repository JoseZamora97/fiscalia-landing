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
}: {
  name: string;
  alt: string;
  url?: string;
  priority?: boolean;
}) {
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
          src={`/shots/${name}-light.png`}
          alt={alt}
          width={2880}
          height={1800}
          quality={92}
          priority={priority}
          sizes="(max-width: 1100px) 100vw, 1100px"
          className="block h-auto w-full dark:hidden"
        />
        <Image
          src={`/shots/${name}-dark.png`}
          alt={alt}
          width={2880}
          height={1800}
          quality={92}
          sizes="(max-width: 1100px) 100vw, 1100px"
          className="hidden h-auto w-full dark:block"
        />
      </div>
    </figure>
  );
}
