interface EventType {
  title: string,
  time: string,
  id: string,
  description: string,
  imgPath?: string,
  conductor?: string,
  location: string,
  contact?: string,
  type: "event" | "class"
};

interface AnnouncementType {
  title: string,
  time: number,
  id: string,
  description: string,
  imgPath?: string,
}

export type {
  EventType,
  AnnouncementType
}