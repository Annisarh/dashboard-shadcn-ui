import CartList from "@/components/Cart-list/CartList";
import EditUser from "@/components/Edit-user";
import { AppLineChart } from "@/components/Line-chart/AppLineChart";
import Layout from "@/components/templates/Layout";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Progress } from "@/components/ui/progress";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { BadgeCheck, Candy, Citrus, Shield } from "lucide-react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  const { id } = useParams();
  return (
    <Layout>
      <main className="px-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/user">User</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>{id}</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* container */}
        <div className="mt-8 flex flex-col xl:flex-row gap-8">
          {/* left */}
          <div className="w-full xl:w-1/3 space-y-6">
            <div className="bg-primary-foreground p-4 rounded-lg">
              <h1 className="text-xl font-semibold mb-4">User Badges</h1>
              <div className="flex gap-4 mt-4">
                <HoverCard>
                  <HoverCardTrigger className="flex gap-4 items-center">
                    <BadgeCheck
                      size={36}
                      className="rounded-full bg-blue-500/30 border border-blue-500/50"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="font-bold mb-2">Verified User</h1>
                    <p className="text-sm text-muted-foreground">
                      This user has been verified by the admin.
                    </p>
                  </HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger>
                    <Shield
                      size={36}
                      className="rounded-full bg-green-800/30 border-1 border-green-800/50 p-2"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="font-bold mb-2">Admin</h1>
                    <p className="text-sm text-muted-foreground">
                      Admin users have access to all features and can manage
                      users.
                    </p>
                  </HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger>
                    <Candy
                      size={36}
                      className="rounded-full bg-yellow-500/30 border-1 border-yellow-500/50 p-2"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="font-bold mb-2">Awarded</h1>
                    <p className="text-sm text-muted-foreground">
                      This user has been awarded for their contributions.
                    </p>
                  </HoverCardContent>
                </HoverCard>
                <HoverCard>
                  <HoverCardTrigger>
                    <Citrus
                      size={36}
                      className="rounded-full bg-orange-500/30 border-1 border-orange-500/50 p-2"
                    />
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <h1 className="font-bold mb-2">Popular</h1>
                    <p className="text-sm text-muted-foreground">
                      This user has been popular in the community.
                    </p>
                  </HoverCardContent>
                </HoverCard>
              </div>
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">User Information</h1>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button>Edit User</Button>
                  </SheetTrigger>
                  <EditUser />
                </Sheet>
              </div>
              <div className="space-y-4 mt-4">
                <div className="flex flex-col gap-2 mb-8">
                  <p className="text-sm text-muted-foreground">
                    Profile completion
                  </p>
                  <Progress value={33} />
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">Username :</span>
                  <span>John.doe</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">Email :</span>
                  <span>john.doe@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">Phone :</span>
                  <span>+62 8546 9075</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">Location :</span>
                  <span>Caracas, Venezuela</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-bold">Role :</span>
                  <Badge>Admin</Badge>
                </div>
                <p className="text-sm text-muted-foreground">
                  Joined on 2025.01.01
                </p>
              </div>
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg">
              <CartList title="Recent Transactions" />
            </div>
          </div>
          {/* right */}
          <div className="w-full xl:w-2/3 space-y-6">
            <div className="bg-primary-foreground p-4 rounded-lg">
              <div className="flex items-center gap-2">
                <Avatar className="size-12">
                  <AvatarImage src="https://avatars.githubusercontent.com/Annisarh" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <h1 className="text-xl font-semibold">John Doe</h1>
              </div>
            </div>
            <div className="bg-primary-foreground p-4 rounded-lg">
              <h1 className="text-lg font-semibold mb-4">User Activity</h1>
              <AppLineChart />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default UserDetail;
