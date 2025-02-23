'use client'

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import Header from "../header";
import WeekSelector from "./weekSelector";

export default function Schedule() {
  const [selectionType, setSelectionType] = useState('week');
  const [selectedWeek, setSelectedWeek] = useState('1');
  const [date, setDate] = useState<Date>();

  const weeks = Array.from({ length: 24 }, (_, i) => (i + 1).toString());

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="container mx-auto p-8">
        <h1 className="text-4xl font-bold mb-8">Fantasy Basketball Stats</h1>
          <div className="flex">
          <WeekSelector/>
          <Card className="max-w-md">
            <CardContent>
              Select a week to get started, or use the date selector to pick a range of dates!
            </CardContent>
          </Card>
          </div>
      </main>
    </div>
  );
}
