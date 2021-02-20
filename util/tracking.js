/** @file Tracking/Analytics */

/** Wrapper external tracking library */
let genericTrack = () => {}

try {
  if (typeof window.pa !== 'undefined') {
    genericTrack = pa.track
  } else {
    throw 'TRACKING_SCRIPT_NOT_LOADED'
  }
} catch (err) {
  console.error(err)
}

/**
 * Track events
 * @param {object} trackData - Data to record
 * @param {string} trackData.name - Name of event
 * @param {string} trackData.value - Value of event
 * @param {string} trackData.unit - Unit of `value`
 */
export const track = ({ name, value, unit }) => {
  genericTrack({ name, value, unit })
}
