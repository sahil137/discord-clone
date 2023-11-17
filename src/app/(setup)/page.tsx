import { db } from "@/lib/db";
import { initialPrfoile } from "@/lib/initial-profile";
import { redirect } from "next/navigation";

const SetupPage = async () => {
  const profile = await initialPrfoile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (server) return redirect(`/servers/${server.id}`);
  return <div>Create a Server</div>;
};

export default SetupPage;
