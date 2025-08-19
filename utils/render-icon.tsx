import Image from 'next/image';

export function RenderIcon(icon: TIcon, stroke?: string, strokeWidth?: number) {
  if (typeof icon === 'function') {
    const Icon = icon;

    return (
      <Icon
        width={24}
        height={24}
        stroke={stroke || '#4545FE'}
        strokeWidth={strokeWidth || 1.5}
      />
    );
  }

  return (
    <Image
      src={icon.src}
      alt={icon.alt}
      width={24}
      height={24}
    />
  );
}

export type TIcon =
  | React.ComponentType<React.SVGProps<SVGSVGElement>>
  | { src: string; alt: string };
