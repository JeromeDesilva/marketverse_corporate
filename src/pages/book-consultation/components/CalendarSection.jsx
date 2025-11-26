import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Icon from '../../../components/AppIcon';


const CalendarSection = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedPlatform, setSelectedPlatform] = useState('google-meet');

  // Generate available time slots for the selected date
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 9; // 9 AM
    const endHour = 17; // 5 PM
    
    for (let hour = startHour; hour < endHour; hour++) {
      for (let minute of [0, 30]) {
        const time = `${hour?.toString()?.padStart(2, '0')}:${minute?.toString()?.padStart(2, '0')}`;
        const displayTime = new Date(2024, 0, 1, hour, minute)?.toLocaleTimeString('en-US', {
          hour: 'numeric',
          minute: '2-digit',
          hour12: true
        });
        slots?.push({ value: time, display: displayTime });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

  const platforms = [
    {
      id: 'google-meet',
      name: 'Google Meet',
      icon: 'Video',
      description: 'Simple browser-based meeting'
    },
    {
      id: 'zoom',
      name: 'Zoom',
      icon: 'Video',
      description: 'Feature-rich video conferencing'
    }
  ];

  // Disable past dates
  const isDateDisabled = ({ date }) => {
    const today = new Date();
    today?.setHours(0, 0, 0, 0);
    return date < today;
  };

  return (
    <div>
      <div className="text-center mb-12">
        <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Select Your Preferred Date & Time
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Choose a date and time that works best for you. All times are in your local timezone.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="bg-card rounded-xl border border-border p-6">
          <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
            <Icon name="Calendar" size={24} className="text-primary" />
            Pick a Date
          </h3>
          
          <div className="calendar-wrapper">
            <Calendar
              onChange={setSelectedDate}
              value={selectedDate}
              minDate={new Date()}
              tileDisabled={isDateDisabled}
              className="border-0 w-full"
            />
          </div>

          {selectedDate && (
            <div className="mt-4 p-4 bg-primary/10 rounded-lg">
              <p className="text-sm font-medium text-primary">
                Selected Date: {selectedDate?.toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
          )}
        </div>

        {/* Time Slots and Platform Selection */}
        <div className="space-y-6">
          {/* Platform Selection */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Icon name="Monitor" size={24} className="text-primary" />
              Choose Meeting Platform
            </h3>
            
            <div className="grid grid-cols-2 gap-4">
              {platforms?.map((platform) => (
                <button
                  key={platform?.id}
                  onClick={() => setSelectedPlatform(platform?.id)}
                  className={`p-4 rounded-lg border-2 transition-all text-left ${
                    selectedPlatform === platform?.id
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <Icon 
                    name={platform?.icon} 
                    size={24} 
                    className={selectedPlatform === platform?.id ? 'text-primary' : 'text-muted-foreground'}
                  />
                  <h4 className="font-semibold text-foreground mt-2">{platform?.name}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{platform?.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* Time Slots */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
              <Icon name="Clock" size={24} className="text-primary" />
              Available Time Slots
            </h3>
            
            <div className="grid grid-cols-3 gap-2 max-h-80 overflow-y-auto">
              {timeSlots?.map((slot) => (
                <button
                  key={slot?.value}
                  onClick={() => setSelectedTime(slot?.value)}
                  className={`p-3 rounded-lg border-2 transition-all text-center ${
                    selectedTime === slot?.value
                      ? 'border-primary bg-primary text-primary-foreground'
                      : 'border-border hover:border-primary/50 text-foreground'
                  }`}
                >
                  <span className="text-sm font-medium">{slot?.display}</span>
                </button>
              ))}
            </div>

            {selectedTime && (
              <div className="mt-4 p-4 bg-primary/10 rounded-lg">
                <p className="text-sm font-medium text-primary">
                  Selected Time: {timeSlots?.find(s => s?.value === selectedTime)?.display}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarSection;