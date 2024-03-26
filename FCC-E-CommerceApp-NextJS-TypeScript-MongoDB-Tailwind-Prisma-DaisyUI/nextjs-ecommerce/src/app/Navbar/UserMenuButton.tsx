"use client";

import { Session } from "next-auth";

interface UserMenuButtonProps {
  session: Session | null;
}

export default function UserMenuButton({session}: UserMenuButtonProps) {
    const user = session?.user;

  return (<div className="dropdown dropdown-end">
    <label tabIndex={0} className="btn btn-ghost btn-circle">
        {user ?
        <Image /> : 
        }
    </label>
  </div>);
}
