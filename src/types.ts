interface EventType {
  title: string,
  time: string,
  id: string,
  description: string,
  location: string,
  type: "event" | "class"
  imgPath?: string,
  conductor?: string,
  contact?: string,
  timeAdded: number
};

interface NewEventType extends Omit<EventType, "id" | "timeAdded"> {};

interface AnnouncementType {
  title: string,
  id: string,
  description: string,
  imgPath?: string,
  timeAdded: number
}

interface NewAnnouncementType extends Omit<AnnouncementType, "id" | 'timeAdded'> {}

interface SlideType {
  id: string
  src: string;
  alt: string;
  title: string; 
  description: string;
  link? : string;
  fit?: 'cover' | 'contain';
  timeAdded: number;
}

interface NewSlideType extends Omit<SlideType, "id" | "timeAdded"> {}


export type {
  EventType,
  AnnouncementType,
  NewEventType,
  NewAnnouncementType,
  SlideType,
  NewSlideType
}