import { EventType, AnnouncementType, NewEventType, NewAnnouncementType, SlideType, NewSlideType } from "./types";

function isEventType(object: any): object is EventType {
  return (
    object &&
    typeof object.title === "string" &&
    typeof object.time === "string" &&
    typeof object.id === "string" &&
    typeof object.description === "string" &&
    typeof object.location === "string" &&
    typeof object.timeAdded === "number" &&
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
    typeof object.timeAdded === "number" &&
    typeof object.id === "string" &&
    typeof object.description === "string" &&
    (object.imgPath === undefined || typeof object.imgPath === "string")
  );
}

function isNewAnnouncementType(object: any): object is NewAnnouncementType {
  return (
    object &&
    typeof object.title === "string" &&
    typeof object.description === "string" &&
    (object.imgPath === undefined || typeof object.imgPath === "string")
  );
}

function isSlideType(object: any): object is SlideType {
  return (
    object &&
    typeof object.src === "string" &&
    typeof object.alt === "string" &&
    typeof object.title === "string" &&
    typeof object.description === "string" &&
    typeof object.timeAdded === "number" &&
    typeof object.id === "string" &&
    (object.link === undefined || typeof object.link === "string") &&
    (object.fit === undefined || (object.fit === "cover" || object.fit === "contain"))
  );
}

function isNewSlideType(object: any): object is NewSlideType {
  return (
    object &&
    typeof object.src === "string" &&
    typeof object.alt === "string" &&
    typeof object.title === "string" &&
    typeof object.description === "string" &&
    (object.link === undefined || typeof object.link === "string") &&
    (object.fit === undefined || (object.fit === "cover" || object.fit === "contain"))
  );
}

export default {
  isEventType,
  isAnnouncementType,
  isNewEventType,
  isNewAnnouncementType,
  isSlideType,
  isNewSlideType
}