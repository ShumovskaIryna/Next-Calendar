"use client"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'

export default function Home() {
  return (
    <>
      <nav className="flex justify-between mb-2 border-b border-violet-100">
        <h1 className="font-bold text-2xl text-gray-700">Calendar</h1>
      </nav>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <div className="grid grid-cols-8">
          <div className="col-span-8">
            <FullCalendar
              plugins={[
                dayGridPlugin,
                interactionPlugin,
                timeGridPlugin
              ]}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek'
              }}
              events={{}}
              nowIndicator={true}
              editable={true}
              droppable={true}
              selectable={true}
              selectMirror={true}
            />
          </div>
        </div>
      </main >
    </>
  )
}
