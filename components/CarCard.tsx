"use client"

import { CarProps } from "@/types";

interface CarCardProps{
    car:CarProps;
}
const CarCard = ( {car} : CarCardProps ) => {
    return (
        <div> 
            CarCard
        </div>
    )
}

export default CarCard