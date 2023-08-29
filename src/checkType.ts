import { EventType, AnnouncementType, NewEventType, NewAnnouncementType } from "./types";

function isEventType(object: any): object is EventType {
  return (
    object &&
    typeof object.title === "string" &&
    typeof object.time === "string" &&
    typeof object.id === "string" &&
    typeof object.description === "string" &&
    typeof object.location === "string" &&
    (object.type === "event" || object.type === "class") && 
    (object.imgPath === undefined || typeof object.imgPath === "string") &&
    (object.conductor === undefined || typeof object.conductor === "string") &&
    (object.contact === undefined || typeof object.contact === "string")
  );
}

function isNewEventType(object: any): object is NewEventType {
  return (
    object &&
    typeof object.title === "string" &&
    typeof object.time === "string" &&
    typeof object.description === "string" &&
    typeof object.location === "string" &&
    (object.type === "event" || object.type === "class") && 
    (object.imgPath === undefined || typeof object.imgPath === "string") &&
    (object.conductor === undefined || typeof object.conductor === "string") &&
    (object.contact === undefined || typeof object.contact === "string")
  );
}

function isAnnouncementType(object: any): object is AnnouncementType {
  return (
    object &&
    typeof object.title === "string" &&
    typeof object.time === "number" &&
    typeof object.id === "string" &&
    typeof object.description === "string" &&
    (object.imgPath === undefined || typeof object.imgPath === "string")
  );
}

function isNewAnnouncementType(object: any): object is NewAnnouncementType {
  return (
    object &&
    typeof object.title === "string" &&
    typeof object.time === "number" &&
    typeof object.description === "string" &&
    (object.imgPath === undefined || typeof object.imgPath === "string")
  );
}


export default {
  isEventType,
  isAnnouncementType,
  isNewEventType,
  isNewAnnouncementType
}