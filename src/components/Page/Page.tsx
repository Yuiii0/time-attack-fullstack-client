import { PropsWithChildren } from "react";

interface PageProps {
  middleWidth?: boolean;
}

function Page({ children, middleWidth }: PropsWithChildren<PageProps>) {
  return (
    <main
      className="px-5 lg:px-8 py-6 lg:py-10 mx-auto max-w-screen-lg data-[middle-width=true]:max-w-screen-sm flex flex-col grow w-full items-stretch"
      data-middle-width={middleWidth}
    >
      {children}
    </main>
  );
}

export default Page;
