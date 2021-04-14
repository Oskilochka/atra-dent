import React, {useEffect, useState} from "react";
import {Pagination} from "../pagination/Pagination";
import {clinicAPI} from "../../api/api";
import {Doctor} from "./Doctor";
import "./Doctors.scss"
import {Preloader} from "../preloader/Preloader";

export const DoctorsWidget = () => {
    const [doctors, setDoctors] = useState<Array<any>>()
    const limit = 9
    const [currentPage, setPage] = useState(1)
    const [error, setError] = useState<{} | undefined>(undefined);

    const [isFetching, setIsFetching] = useState(false);

    useEffect(() => {
        setIsFetching(true)
        clinicAPI.getDoctorsData(limit, currentPage).then((res: any) => {
            setDoctors(res);
            setIsFetching(false)
            console.log("set ", doctors)
        }).catch((reason) => {
            setError(reason);
            setIsFetching(false);
        })
    }, [currentPage])

    const onPageChange = (currentPage: number) => {
        setPage(currentPage)
    }

    return (
        <div className='doctors'>

            <h1 className='doctors-title'>Our specialists</h1>
            <p className='doctors-text'>Highly qualified AstraDent dentists regularly attend professional master classes
                and train in Ukraine and abroad to keep abreast of all modern trends in dental medicine. Our specialists
                use modern technology from world leaders in the production of dental equipment and use only high-quality
                certified materials from companies of companies.</p>

            <Pagination limit={limit} currentPage={currentPage} doctors={doctors} onPageChange={onPageChange}/>
            {isFetching ? <Preloader/>
                : error
                    ? console.log(error)
                    : <div className='doctors-list'>
                        {doctors && doctors.map((item: any) => <div key={item.id}>
                            <Doctor doctor={item}/>
                        </div>)}
                    </div>
            }
        </div>
    )
}

export type DoctorType = {
    firstName: string,
    lastName: string,
    link: string,
    speciality: Array<string> | string,
    avatar: string,
}
