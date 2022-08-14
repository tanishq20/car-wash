import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { CarCard } from './CarCard/CarCard'
import { carWashes } from '../db'

const Dashboard = ({ auth: { user } }) => {
  return (
    <div style={{ marginTop: '5rem', textAlign: 'center' }}>
      <h1>Welcome, {user && user.name}</h1>
      <div style={{ padding: '0 2rem' }}>
        {carWashes.map((carWash) => {
          return <CarCard key={carWash.id} carWash={carWash} />
        })}
      </div>
    </div>
  )
}
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  auth: state.auth,
})

export default connect(mapStateToProps)(Dashboard)
