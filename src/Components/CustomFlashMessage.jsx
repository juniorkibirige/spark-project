import React, { useCallback, useEffect, useState } from 'react'
import { node, number, bool } from 'prop-types'

const CustomFlashMessage = (props) => {
    const [visible, setVisible] = useState(true);
    const [remaining, setRemaining] = useState();
    const [timer, setTimer] = useState(new Date())
    const [startTime, setStartTime] = useState()
    const hide = () => {
        setVisible(false)
    }

    const resumeTimer = useCallback(() => {
        window.clearTimeout(timer)

        setStartTime(new Date())
        let t1 = setTimeout(hide, remaining)
        setTimer(t1)
    }, [remaining, timer])

    const pauseTimer = () => {
        const { persistOnHover } = props
        if (persistOnHover) {
            clearTimeout(timer)

            setRemaining(remaining - (new Date() - startTime))
        }
    }

    useEffect(() => {
        const { duration } = props
        setRemaining(duration)
        resumeTimer()

        return () => clearTimeout(timer)
    }, [props, resumeTimer, timer])
    const { children } = props

    return (
        visible ? (
            <div onMouseEnter={pauseTimer} onMouseLeave={resumeTimer}>
                {children}
            </div>
        ) : <div></div>
    )
}

CustomFlashMessage.defaultProps = {
    duration: 5000,
    children: null,
    persistOnHover: true,
}

CustomFlashMessage.propTypes = {
    children: node,
    duration: number,
    persistOnHover: bool,
}

export default CustomFlashMessage