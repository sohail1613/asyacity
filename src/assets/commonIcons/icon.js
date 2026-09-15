export const LeftArrowIcon = ({ size, stroke }) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={stroke ? stroke : "1.5"} stroke="currentColor" className="size-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
    )
}

export const ArrowUpRight = ({ stroke }) => {
    return (<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={stroke ? stroke : "1.5"} stroke="currentColor" class="size-4">
        <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
    )
}