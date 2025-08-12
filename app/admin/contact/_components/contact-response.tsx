"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Trash2, Eye, MailCheck, MailX } from "lucide-react";
import { IContact } from "@/types/contact";
import {
  deleteContact,
  markAsReadContact,
  markAsUnReadContact,
} from "@/actions/contact";
import { toast } from "sonner";

const ContactsContent = ({ contacts }: { contacts: IContact[] }) => {
  const [selected, setSelected] = useState<IContact | null>(null);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleDelete = async (id: string) => {
    try {
      console.log("Form submitted:");
      setLoading(true);
      const response = await deleteContact(id);
      if (response.success) {
        toast.success(response.message);
      } else {
        toast.error(response.message);
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (id: string, status: "read" | "unread") => {
    try {
      console.log("Form submitted:");
      setLoading(true);
      if (status == "read") {
        const response = await markAsReadContact(id);
        if (response.success) {
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      } else if (status == "unread") {
        const response = await markAsUnReadContact(id);
        if (response.success) {
          toast.success(response.message);
        } else {
          toast.error(response.message);
        }
      }
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-2xl font-bold">Contacts</h2>
        <div className="flex gap-2 w-full sm:w-auto">
          <div className="flex-1 sm:w-64">
            <Input
              placeholder="Search contacts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>
          {/* <Button variant="outline" onClick={refreshFromStorage}>
            <RefreshCcw className="h-4 w-4 mr-2" />
            Refresh
          </Button> */}
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Submissions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="relative w-full overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Phone</TableHead>
                  <TableHead>Service</TableHead>
                  <TableHead>Submitted</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contacts.length === 0 ? (
                  <TableRow>
                    <TableCell
                      colSpan={7}
                      className="text-center text-muted-foreground"
                    >
                      No submissions yet.
                    </TableCell>
                  </TableRow>
                ) : (
                  contacts.map((s) => (
                    <TableRow key={s.id}>
                      <TableCell className="font-medium">{s.name}</TableCell>
                      <TableCell>{s.email || "-"}</TableCell>
                      <TableCell>{s.phone}</TableCell>
                      <TableCell>{s.service}</TableCell>
                      <TableCell>
                        {new Date(s.createdAt).toLocaleString()}
                      </TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            s.status === "Read" ? "secondary" : "default"
                          }
                        >
                          {s.status || "New"}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right space-x-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => setSelected(s)}
                        >
                          <Eye className="h-4 w-4 mr-1" />
                        </Button>
                        {s.status != "Read" ? (
                          <Button
                            disabled={loading}
                            size="sm"
                            variant="ghost"
                            onClick={() => markAsRead(s.id, "read")}
                          >
                            <MailCheck size={24} color="green" />
                          </Button>
                        ) : (
                          <Button
                            disabled={loading}
                            size="sm"
                            variant="ghost"
                            onClick={() => markAsRead(s.id, "unread")}
                          >
                            <MailX size={24} color="red" />
                          </Button>
                        )}
                        <Button
                          size="sm"
                          variant="destructive"
                          onClick={() => handleDelete(s.id)}
                        >
                          <Trash2 className="h-4 w-4 " />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Dialog
        open={!!selected}
        onOpenChange={(open) => !open && setSelected(null)}
      >
        <DialogContent className="max-w-xl">
          <DialogHeader>
            <DialogTitle>Contact Details</DialogTitle>
          </DialogHeader>
          {selected && (
            <div className="space-y-3">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p className="font-medium">{selected.name}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">{selected.email || "-"}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">{selected.phone}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Service</p>
                  <p className="font-medium">{selected.service}</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Message</p>
                <p className="mt-1 whitespace-pre-wrap">{selected.message}</p>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>
                  Submitted: {new Date(selected.createdAt).toLocaleString()}
                </span>
                <span>Status: {selected.status || "New"}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ContactsContent;
