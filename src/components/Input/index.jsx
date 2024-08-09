import { forwardRef } from "react"

export const Inputs = forwardRef(({ errors, ...rest }, ref) => {

    return (
        <>
            <input ref={ref} {...rest} />
            <span>  {errors ? <p>{errors.message}</p> : null}</span>
        </>
    )
})