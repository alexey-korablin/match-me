import React from "react";
import { Button, Link } from "@nextui-org/react";
import { FaRegSmile } from "react-icons/fa";

const MembersPage = () => (
  <div>
    <div>Members page</div>
    <Button
      as={Link}
      href="/"
      color="danger"
      variant="bordered"
      startContent={<FaRegSmile size={20} />}
    >
      Go to root
    </Button>
    <Link href="/">Or go by link</Link>
  </div>
);
export default MembersPage;
