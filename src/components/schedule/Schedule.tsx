import React from "react";

const data = {
    start: '10:00',
    appointments: [
        {
            start: '10:45',
            duration: 45,
        },
        {
            start: '13:50',
            duration: 20,
        },
    ],
    end: '15:00',
}

export const Schedule = () => {

    let arr: Array<object> = []
    const interval = 2700000 // 45 minutes in ms

    const expectedResult = '[10:00, 11:30, 12:15, 13:00, 14:10]'

    return (
        <div>
            {expectedResult}
        </div>
    )
}
