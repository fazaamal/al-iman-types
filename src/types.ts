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
};

interface NewEventType extends Omit<EventType, "id"> {};

interface AnnouncementType {
  title: string,
  time: number,
  id: string,
  description: string,
  imgPath?: string,
}

interface NewAnnouncementType extends Omit<AnnouncementType, "id"> {}

export type {
  EventType,
  AnnouncementType,
  NewEventType,
  NewAnnouncementType
}