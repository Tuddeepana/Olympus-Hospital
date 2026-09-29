import { useEffect, useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { DOCTORS } from "@/lib/doctors";
import { SITE, waLink } from "@/lib/site";

const schema = z.object({
  doctor: z.string().min(1, "Please select a doctor"),
  name: z.string().trim().min(2, "Enter your name").max(80),
  age: z.coerce.number().int().min(0).max(120),
  area: z.string().trim().max(80).optional().or(z.literal("")),
  gender: z.enum(["Male", "Female", "Prefer not to say"]).optional(),
  tel: z.string().trim().min(7, "Enter a valid phone").max(20).regex(/^[0-9+\s()-]+$/, "Invalid phone"),
});

export function BookingDialog({
  open,
  onOpenChange,
  defaultDoctor,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
  defaultDoctor?: string;
}) {
  const emptyForm = {
doctor: "",
    name: "",
    age: "",
    area: "",
    gender: "Male" as "Male" | "Female" | "Prefer not to say",
    tel: "",
  };

  const [form, setForm] = useState(emptyForm);

  useEffect(() => {
setForm((current) => ({
  ...current,
  doctor: defaultDoctor ?? current.doctor,
}));
  }, [defaultDoctor]);

  useEffect(() => {
if (!open) {
  setForm(emptyForm);
}
  }, [open]);

  const isDoctorLocked = Boolean(defaultDoctor);

  function submit(e: React.FormEvent) {
e.preventDefault();
const result = schema.safeParse({ ...form, doctor: form.doctor || defaultDoctor || "", age: form.age });
if (!result.success) {
  toast.error(result.error.issues[0]?.message ?? "Please check the form");
  return;
}
const d = result.data;
const areaLine = d.area ? `Area: ${d.area}\n` : "";
const genderLine = d.gender ? `Gender: ${d.gender}\n` : "";
const msg = `Appointment Request - Olympus Hospital

Doctor: ${d.doctor}
Patient Name: ${d.name}
Age: ${d.age}
${areaLine}${genderLine}Tel: ${d.tel}`;
window.open(waLink(msg), "_blank", "noopener,noreferrer");
toast.success("Opening WhatsApp to confirm your appointment…");
onOpenChange(false);
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[480px]">
        <DialogHeader>
          <DialogTitle>Book an Appointment</DialogTitle>
          <DialogDescription>
            Please share the patient name, age and contact number. We&apos;ll send your request via WhatsApp to {SITE.whatsappDisplay}.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={submit} className="grid gap-4">
          {!isDoctorLocked ? (
            <div className="grid gap-2">
              <Label>Doctor</Label>
              <Select value={form.doctor} onValueChange={(v) => setForm((f) => ({ ...f, doctor: v }))}>
                <SelectTrigger><SelectValue placeholder="Select doctor" /></SelectTrigger>
                <SelectContent>
                  {DOCTORS.map((d) => (
                    <SelectItem key={d.id} value={`${d.name} (${d.specialization})`}>
                      {d.name} — {d.specialization}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div className="grid gap-2">
              <Label>Doctor</Label>
              <div className="rounded-md border bg-muted/40 px-3 py-2 text-sm text-foreground">{defaultDoctor}</div>
            </div>
          )}
          <div className="grid gap-2">
            <Label htmlFor="name">Patient Name</Label>
            <Input id="name" value={form.name} onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} maxLength={80} required />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-2">
              <Label htmlFor="age">Age</Label>
              <Input id="age" type="number" min={0} max={120} value={form.age} onChange={(e) => setForm((f) => ({ ...f, age: e.target.value }))} required />
            </div>
            {!isDoctorLocked ? (
              <div className="grid gap-2">
                <Label>Gender</Label>
                <Select value={form.gender} onValueChange={(v) => setForm((f) => ({ ...f, gender: v as typeof form.gender }))}>
                  <SelectTrigger><SelectValue /></SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Male">Male</SelectItem>
                    <SelectItem value="Female">Female</SelectItem>
                    <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ) : null}
          </div>
          {!isDoctorLocked ? (
            <div className="grid gap-2">
              <Label htmlFor="area">Area</Label>
              <Input id="area" value={form.area} onChange={(e) => setForm((f) => ({ ...f, area: e.target.value }))} maxLength={80} />
            </div>
          ) : null}
          <div className="grid gap-2">
            <Label htmlFor="tel">Contact Number</Label>
            <Input id="tel" type="tel" value={form.tel} onChange={(e) => setForm((f) => ({ ...f, tel: e.target.value }))} maxLength={20} required />
          </div>
          <Button type="submit" className="bg-emergency hover:bg-emergency/90 text-emergency-foreground">
            Send via WhatsApp
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
