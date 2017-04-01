import keycode from 'keycode';

export const features = {
  FULLSCREEN: 'FULLSCREEN',
  DOWN_PANEL: 'DOWN_PANEL',
  LEFT_PANEL: 'LEFT_PANEL',
  SHORTCUTS_HELP: 'SHORTCUTS_HELP',
  ESCAPE: 'ESCAPE',
  NEXT_STORY: 'NEXT_STORY',
  PREV_STORY: 'PREV_STORY',
  SEARCH: 'SEARCH',
  DOWN_PANEL_IN_RIGHT: 'DOWN_PANEL_IN_RIGHT',
  NEXT_KIND: 'NEXT_KIND',
  PREV_KIND: 'PREV_KIND',
};

export function isModifierPressed(e) {
  return (e.ctrlKey || e.keyCode === 91 || e.metaKey) && e.shiftKey;
}

function focusInInput(e) {
  return /input|textarea/i.test(e.target.tagName) ||
    e.target.getAttribute('contenteditable') !== null;
}

export default function handle(e) {
  if (e.keyCode === keycode('escape')) {
    // We don't need to preventDefault escape.
    // Just getting the event is enough for us.
    return features.ESCAPE;
  }
  if (focusInInput(e)) {
    // if we're focused in an element that accepts input,
    // then we shouldn't perform a shortcut action
    return false;
  }

  if (!isModifierPressed(e)) return false;

  switch (e.keyCode) {
    case keycode('F'):
      e.preventDefault();
      return features.FULLSCREEN;
    case keycode('D'):
      e.preventDefault();
      return features.DOWN_PANEL;
    case keycode('L'):
      e.preventDefault();
      return features.LEFT_PANEL;
    case keycode('right'):
      e.preventDefault();
      return features.NEXT_STORY;
    case keycode('left'):
      e.preventDefault();
      return features.PREV_STORY;
    case keycode('P'):
      e.preventDefault();
      return features.SEARCH;
    case keycode('J'):
      e.preventDefault();
      return features.DOWN_PANEL_IN_RIGHT;
    default:
      return false;
  }
}
