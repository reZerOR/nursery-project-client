import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface EmptyStateProps {
  buttonText: string;
  navigateTo: string;
  title: string;
  description: string;
  IconComponent: React.ElementType;
}

const NotFound = ({
  buttonText,
  navigateTo,
  title,
  description,
  IconComponent, // Default icon component
}: EmptyStateProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center bg-background text-foreground p-4">
      <div className="text-center">
        <IconComponent
          className="mx-auto h-24 w-24 text-primary1 mb-6"
          aria-hidden="true"
        />
        <h1 className="text-2xl font-bold mb-2">{title}</h1>
        <p className="text-muted-foreground text-sm max-w-lg mb-6">
          {description}
        </p>
        <Button
          onClick={() => navigate(navigateTo)}
          className="flex items-center justify-center mx-auto gap-1"
        >
          {buttonText} <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
