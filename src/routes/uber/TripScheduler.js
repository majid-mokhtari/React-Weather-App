/**
 * Schedules a new Uber ride.
 *
 * - Each Uber ride takes 3 seconds to complete.
 * - Concurrent trips size is based on the number of drivers
 * - Any addional trips are added to the queue
 * - When a trip is completed, the next one in queue starts
 **/
const DRIVERS_ONLINE = 2

class TripScheduler extends React.Component {
  constructor () {
    super()
    const driversMap = {}
    for (let i = 0; i < DRIVERS_ONLINE; i++) {
      driversMap[i] = undefined
    }
    this.state = {
      onGoing: 0,
      completed: 0,
      waitingInQueue: 0,
      driversMap
    }
    this.scheduleRide = this.scheduleRide.bind(this)
  }

  finishRide (key) {
    const { driversMap, waitingInQueue, completed, onGoing } = this.state
    driversMap[key] = clearInterval(driversMap[key])
    let queue = 0
    let goings = onGoing
    goings--
    if (waitingInQueue > 0) {
      let rideMatched = this.findAvailableDriver()
      if (rideMatched) {
        queue = waitingInQueue - 1
        goings++
      }
    }
    this.setState({
      completed: completed + 1,
      onGoing: goings,
      driversMap,
      waitingInQueue: queue
    })
  }

  findAvailableDriver () {
    const { driversMap } = this.state
    const availableCar = Object.keys(driversMap).find(
      key => driversMap[key] === undefined
    )
    if (availableCar) {
      driversMap[availableCar] = setInterval(
        () => this.finishRide(availableCar),
        3000
      )
      return true
    }
    return false
  }

  scheduleRide () {
    const { onGoing, waitingInQueue } = this.state
    let rideMatched = this.findAvailableDriver()
    if (rideMatched) {
      this.setState({
        onGoing: onGoing + 1
      })
    } else {
      this.setState({
        waitingInQueue: waitingInQueue + 1
      })
    }
  }

  render () {
    const { onGoing, completed, waitingInQueue } = this.state
    return (
      <div>
        <button className='schedule-button' onClick={this.scheduleRide}>
          Schedule an Uber ride
        </button>
        <div className='completed'> Completed: {completed}</div>
        <div className='on-going'> On-going: {onGoing}</div>
        <div className='queue'> Waiting in queue: {waitingInQueue}</div>
      </div>
    )
  }
}

export default TripScheduler
