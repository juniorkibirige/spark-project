import React from 'react'
import PropTypes from 'prop-types'
import logo from './../../Assets/drugstore.png'
import NavBar from '../../Components/Navs/navbar'

const Home = ({ appState }) => {
    return (
        <>
            <div>
                <NavBar logo={logo} />
                <div className="container">
                    <div className="row">
                    </div>
                </div>
            </div>
        </>
    )
}

Home.propTypes = {
    appState: PropTypes.object.isRequired,
}

export default Home;