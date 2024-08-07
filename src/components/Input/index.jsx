import { forwardRef } from "react"

export const Inputs = forwardRef(({ errors, ...rest }, ref) => {

    return (
        <>
            <input ref={ref} {...rest} />
            {errors ? <p>{errors.message}</p> : null}
        </>
    )
})