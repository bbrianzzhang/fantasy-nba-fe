'use client'

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import Header from "./header";

export default function Home() {
  const [selectionType, setSelectionType] = useState('week');
  const [selectedWeek, setSelectedWeek] = useState('1');
  const [date, setDate] = useState<Date>();

  const weeks = Array.from({ length: 24 }, (_, i) => (i + 1).toString());

  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <div className="flex items-center justify-center bg-background p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6">
            <div className="text-center space-y-6">
              <h1 className="text-3xl font-bold">Fantasy Basketball</h1>
              <p>Improve your fantasy basketball team with our stats explorer and other tools!</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
