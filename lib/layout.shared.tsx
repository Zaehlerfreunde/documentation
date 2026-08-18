import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { Link } from 'lucide-react';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <Image
            src="/zaehlerfreunde-icon-small.png"
            alt=""
            width={24}
            height={24}
            className="size-6 shrink-0"
          />
          <span>Zählerfreunde</span>
        </>
      ),
    },
    githubUrl: 'https://github.com/Zaehlerfreunde/documentation',
    links: [
      {
        type: 'icon',
        text: 'Website',
        label: 'Website',
        url: 'https://www.zaehlerfreunde.de',
        icon: <Link />,
        on: 'menu',
        external: true,
      },
    ],
  };
}
