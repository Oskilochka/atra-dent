import React, {FC} from "react";
import './Pagination.scss'
import {DoctorType} from "../doctorsWidget/DoctorsWidget";

type PropsType = {
    limit: number,
    currentPage: number,
    doctors: Array<DoctorType> | undefined,
    onPageChange: (value: any) => void
}

export const Pagination: FC<PropsType> = ({currentPage, doctors, limit, onPageChange}) => {

    const prevPage = () => {
        onPageChange(currentPage - 1)
    }
    const nextPage = () => {
        onPageChange(currentPage + 1)
    }
    return (
        <div className='pagination'>
            {currentPage > 1 && (
                <button onClick={() => prevPage()} className='pagination_btn'>
                    &#9668;
                </button>
            )}
            {doctors && doctors.length === limit &&
            <button onClick={() => nextPage()} className='pagination_btn'>
                &#9658;
            </button>
            }
        </div>
    )
}

