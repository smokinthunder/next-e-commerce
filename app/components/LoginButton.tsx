"use Client";
import { Button } from "@/components/ui/button";
import { useUser } from "@auth0/nextjs-auth0/client";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function LoginButton() {
  const { user, error, isLoading } = useUser();
  if (isLoading)
    return (
      <Link href={"/api/auth/login"}>
        <Button>Login</Button>
      </Link>
    );
  if (!user)
    return (
      <Link href={"/api/auth/login"}>
        <Button>Login</Button>
      </Link>
    );
  if (error) return <div>{error.message}</div>;
  return (
    user && (
      <DropdownMenu>
        <DropdownMenuTrigger>
          <img
            className="w-12 h-12 rounded-full"
            src={user.picture ?? ""}
            alt={user.name ?? "NOt LOgIN"}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onClick={() => {
              window.location.href = "/api/auth/logout";
            }}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    )
  );
}
