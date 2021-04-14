import React, {FC} from "react";
import "./Doctors.scss"
import {DoctorType} from "./DoctorsWidget";

type PropsType = {
    doctor: DoctorType
}

export const Doctor: FC<PropsType> = ({doctor}) => {
    return (
        <div>
            <a href={doctor.link} className='doctor-link'>
                <div className='doctor'>
                    <img className='doctor-avatar' src={doctor.avatar} alt='Doctor image'/>
                    <h3 className='doctor-name'>
                        {doctor.firstName + ' ' + doctor.lastName}
                    </h3>
                    <h5 className='doctor-speciality'> {typeof doctor.speciality === "string" ? doctor.speciality : doctor.speciality.join(" • ")}</h5>
                </div>
            </a>
        </div>
    )
}
