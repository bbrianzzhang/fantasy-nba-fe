'use client'

import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Calendar } from '@/components/ui/calendar';
import Header from "../header";

export default function WeekSelector() {
  const [selectionType, setSelectionType] = useState('week');
  const [selectedWeek, setSelectedWeek] = useState('1');
  const [date, setDate] = useState<Date>();

  const weeks = Array.from({ length: 24 }, (_, i) => (i + 1).toString());

  return (
    <Card className="max-w-md">
        <CardContent className="pt-6">
        <div className="space-y-6">
            <div className="space-y-4">
            <h2 className="text-lg font-semibold">Select View Type</h2>
            
            <RadioGroup
                value={selectionType}
                onValueChange={setSelectionType}
                className="flex gap-4"
            >
                <div className="flex items-center space-x-2">
                <RadioGroupItem value="week" id="week" />
                <Label htmlFor="week">Week Number</Label>
                </div>
                
                <div className="flex items-center space-x-2">
                <RadioGroupItem value="date" id="date" />
                <Label htmlFor="date">Date Select</Label>
                </div>
            </RadioGroup>
            </div>

            {selectionType === 'week' ? (
            <div className="space-y-2">
                <Label htmlFor="week-select">Select Week</Label>
                <Select value={selectedWeek} onValueChange={setSelectedWeek}>
                <SelectTrigger>
                    <SelectValue placeholder="Select a week" />
                </SelectTrigger>
                <SelectContent>
                    {weeks.map((week) => (
                    <SelectItem key={week} value={week}>
                        Week {week}
                    </SelectItem>
                    ))}
                </SelectContent>
                </Select>
            </div>
            ) : (
            <div className="space-y-2">
                <Label>Select Date</Label>
                <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                className="rounded-md border"
                />
            </div>
            )}
        </div>
        </CardContent>
    </Card>
  );
}
