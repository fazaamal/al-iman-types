import { EventType, AnnouncementType } from "./types";

function isEventType(object: any): object is EventType {
  return (
    object &&
    typeof object.title === "string" &&
    typeof object.time === "string" &&
    typeof object.id === "string" &&
    typeof object.description === "string" &&
    typeof object.location === "string" &&
    (object.type === "event" || object.type === "class")
  );
}

function isAnnouncementType(object: any): object is AnnouncementType {
  return (
    object &&
    typeof object.title === "string" &&
    typeof object.time === "number" &&
    typeof object.id === "string" &&
    typeof object.description === "string"
  );
}

export default {
  isEventType,
  isAnnouncementType
}