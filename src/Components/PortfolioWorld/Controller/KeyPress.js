import hotkeys from 'hotkeys-js'

/* hotkeys-js needs to have at least 1 event set up in order for its isPressed function to work,
   so we're setting up a dummy keyboard handler here. */

hotkeys(' ', () => {})

export const { isPressed } = hotkeys
