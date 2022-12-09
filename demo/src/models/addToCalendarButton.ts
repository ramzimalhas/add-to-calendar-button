export enum Status {
  TENTATIVE = 'Tentative',
  CONFIRMED = 'Confirmed',
  CANCELLED = 'Cancelled',
}

export enum Availability {
  BUSY = 'Busy',
  FREE = 'Free',
}

export enum Option {
  APPLE = 'Apple',
  GOOGLE = 'Google',
  ICAL = 'iCal',
  MICROSOFT365 = 'Microsoft365',
  MICROSOFT_TEAMS = 'MicrosoftTeams',
  OUTLOOK = 'Outlook.com',
  YAHOO = 'Yahoo',
}

export enum ListStyle {
  DROPDOWN = 'dropdown',
  DROPDOWN_STATIC = 'dropdown-static',
  OVERLAY = 'overlay',
  MODAL = 'modal',
}

export enum ButtonStyle {
  DEFAULT = 'default',
  '3D' = '3d',
  FLAT = 'flat',
  ROUND = 'round',
  NEUMORPHISM = 'neumorphism',
  TEXT = 'text',
  DATE = 'date',
  CUSTOM = 'custom',
  NONE = 'none',
}

export const DefaultButtonStyle = ButtonStyle.DEFAULT;

export enum Trigger {
  HOVER = 'hover',
  CLICK = 'click',
}

export const DefaultTrigger = Trigger.HOVER;

export enum LightMode {
  SYSTEM = 'system',
  DARK = 'dark',
  LIGHT = 'light',
  BODY_SCHEME = 'bodyScheme',
}

export const DefaultLightMode = LightMode.BODY_SCHEME;

export const Size = {
  default: 6,
  min: 0,
  max: 10,
};