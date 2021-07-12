import React from 'react'
import PropTypes from 'prop-types'

const Home = ({appState}) => {
    return (
        <>
            <div>
                <h1>Home</h1>
            </div>
        </>
    )
}

Home.propTypes = {
    appState: PropTypes.object.isRequired,
}

export default Home;