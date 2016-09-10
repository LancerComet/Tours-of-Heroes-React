/*
 *  EventBus By LancerComet at 17:07, 2016/9/10.
 *  # Carry Your World #
 *  ---
 *  EventBus System For React.
 */

const eventStore = {}

export default {
  $on (eventName, eventFunc) {
    if (!eventStore[eventName]) {
      eventStore[eventName] = eventFunc
    }
  },

  $emit (eventName, value, context = this) {
    if (eventStore[eventName]) {
      eventStore[eventName].call(context, value)
    }
  }
}