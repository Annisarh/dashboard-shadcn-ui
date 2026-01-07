import { Card } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import { Popover, PopoverContent } from "../ui/popover";
import { PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { Calendar1 } from "lucide-react";
import { useState } from "react";
import { format } from "date-fns";
import { Calendar } from "../ui/calendar";

const AppTodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div>
      <h1 className="text-lg font-medium mb-6">ToDo List</h1>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full">
            <Calendar1 />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            className="rounded-md shadow-sm"
            captionLayout="dropdown"
          />
        </PopoverContent>
      </Popover>
      {/* list */}
      <ScrollArea className="max-h-125 mt-4 overflow-y-auto rounded-md p-4">
        <div className="flex flex-col gap-4">
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item1" checked />
              <label htmlFor="item1" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item2" />
              <label htmlFor="item2" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item3" />
              <label htmlFor="item3" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item4" />
              <label htmlFor="item4" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item5" />
              <label htmlFor="item5" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item6" />
              <label htmlFor="item6" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item7" />
              <label htmlFor="item7" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item8" />
              <label htmlFor="item8" className="text-sm text-muted-foreground">
                Lorem ipsum dolor sit amet.
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};

export default AppTodoList;
