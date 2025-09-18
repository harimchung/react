import { CardProps } from "./types";

export const Card= ({ title, description, children }: CardProps) => {
  return (
    <div className="border rounded-lg p-4 shadow-md">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      {description &&
      <p className="text-gray-600 mb-4">{description}</p>
      }
      <div> 
      {children}
      </div>
    </div>
  );
}