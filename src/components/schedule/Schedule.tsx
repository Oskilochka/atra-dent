import React from "react";
import data from './data.json'

type dataType = typeof data

// take appointments [{start: string , duration: number}, ... ]
// return [{start: number in ms, duration: number in ms}, ... ]
const createAppointments = (appointments: Array<any>) => {
    let breakPoints = []

    for (let i = 0; i < appointments.length; i++) {
        let startInMs = new Date(
            '1970-01-01 ' + appointments[i].start + ':00+0000'
        ).getTime()
        let durationInMs = appointments[i].duration * 60000
        breakPoints.push({start: startInMs, duration: durationInMs})
    }
    return breakPoints
}

// take ms: number
// return 'hh:mm': string
const msToHoursMinutes = (ms: number) => {
    let min: any
    min = Math.floor((ms / (1000 * 60)) % 60)
    let hours = Math.floor((ms / (1000 * 60 * 60)) % 24)
    min = String(min) === '0' ? '00' : String(min)
    return String(hours) + ':' + min
}

const getWorkHours = (data: dataType) => {
    const WORK_CELL = 2700000 /* 45 minutes in ms */

    let result: Array<string> = []
    let appointments = createAppointments(data.appointments)

    let startPointInMs = new Date(
        '1970-01-01 ' + data.start + ':00+0000'
    ).getTime()
    let endPointInMs = new Date(
        '1970-01-01 ' + data.end + ':00+0000'
    ).getTime()

    for (
        let i = startPointInMs;
        i < endPointInMs && endPointInMs - i > WORK_CELL;
        i += WORK_CELL
    ) {
        // checking is there appointments on that work-cell
        for (let j = 0; j < appointments.length; j++) {
            let startInMs = appointments[j].start
            let durationInMs = appointments[j].duration

            if (startInMs >= i && startInMs < i + WORK_CELL) {
                i = startInMs + durationInMs
            }
        }
        result.push(msToHoursMinutes(i))
    }
    return result
}

export const Schedule = () => {
    let schedule = getWorkHours(data)

    return (
        <div>
            <h3>Доступні слоти на прийом лікаря</h3>
            <h4>
                {schedule.join(" ")}
            </h4>
        </div>
    )
}
