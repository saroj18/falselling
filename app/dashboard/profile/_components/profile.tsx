"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useSession } from "next-auth/react";
import { getSingleUser, updateUserInfo } from "@/actions/user";
import { toast } from "sonner";
import { Session } from "next-auth";

export default function ProfileSection({ session }: { session: Session }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    if (!form.email || !form.firstName || !form.lastName || !form.phone) {
      toast.error("please fill all field");
    }
    const response = await updateUserInfo((session?.user as any)?.id, form);
    if (response.success) {
      toast.success(response.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    async function getInfo() {
      const info = await getSingleUser((session?.user as any)?.id);
      if (info.success && info.data) {
        setForm({
          lastName: info.data?.lastname,
          firstName: info.data?.firstname,
          email: info.data?.email,
          phone: info.data?.phone,
        });
      }
    }
    getInfo();
  }, []);

  return (
    <div className="space-y-6 w-full max-w-xl mx-auto">
      <div>
        <h2 className="text-3xl font-bold text-foreground">Profile Settings</h2>
        <p className="text-muted-foreground mt-2">
          Manage your personal information and preferences
        </p>
      </div>

      {/* Profile Card */}
      <Card>
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
          <CardDescription>Update your personal details here</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form className="grid gap-4" onSubmit={handleSubmit}>
            <div className="grid gap-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                value={form.firstName}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" value={form.phone} onChange={handleChange} />
            </div>
            <Button disabled={loading} className="w-full" type="submit">
              {loading ? "Updating...." : "Update Profile"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
