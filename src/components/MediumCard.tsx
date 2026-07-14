import { ReactNode } from 'react';

type MediumCardProps = {
  title: string;
  content: ReactNode;
};

export const MediumCard = ({ title, content }: MediumCardProps) => {
  return (
    <div className="h-full border-1 border-gray-300 rounded-3xl p-4">
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};
