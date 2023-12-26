"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/Button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";



const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  set: z.string().min(2, {
    message: "Set must be at least 2 characters.",
  }),
  foil: z.boolean(),
  quantity: z.string().min(1, {
    message: "Quantity must be greater than zero.",
  }),
});

export type AddCardFormProps = {
    name:string,
    setDefault:string,
    sets: string[]
}

export function AddCardForm({name, setDefault}: AddCardFormProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: name,
      set: setDefault,
      foil: false,
      quantity:"0",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <>
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            </>
          )}
        />
        <FormField
        control={form.control}
        name="set"
        render={({ field }) => (
            <FormItem>
            <FormLabel>Set</FormLabel>
            <FormControl>
              <Input placeholder="Set" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
        />
       <FormField
       control={form.control}
       name="foil"
       render={({ field }) => (
        <FormItem>
          <FormLabel>Foil</FormLabel>
          <Select >
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="False" />
            </SelectTrigger>
            <SelectContent >
              <SelectGroup {...field}>
                <SelectItem value="true">True</SelectItem>
                <SelectItem value="false">False</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormItem>
        )}
       />
       <FormField
       control={form.control}
       name="quantity"
       render={({ field }) => (
        <FormItem>
        <FormLabel>Quantity</FormLabel>
        <FormControl>
          <Input type="number" placeholder="Quantity" min={0} {...field} />
        </FormControl>
        <FormMessage />
      </FormItem>
       )}
       />
       
      

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
