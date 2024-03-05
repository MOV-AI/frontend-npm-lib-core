import { LogLevel, LogTag, TimestampQuery } from "../../../models";
import { SERVICE_LIST } from "../../Utils/constants";

//========================================================================================
/*                                                                                      *
 *                                   Private Functions                                  *
 *                                                                                      */
//========================================================================================

/**
 * @private Get date disconsidering seconds
 * Xparam date : Date to parse
 * @returns Timestamp of date without seconds
 */
function getDateWithoutSeconds(date: number): number {
  return (date / 1000) | 0;
}

//========================================================================================
/*                                                                                      *
 *                                   Public Functions                                   *
 *                                                                                      */
//========================================================================================

/**
 * Converts the levels in the state for the string for the request
 *  Input: ["INFO", "DEBUG"]
 *  Output: "level=info,debug"
 * Xparam {Array<string>} selectedLevels : Selected levels from filter
 * Xparam {Array<string>} levelsList : All levels list available
 * @returns {string} Request query param string for levels
 */
export function getRequestLevels(
  selectedLevels: Array<string>,
  levelsList: Array<LogLevel> = []
): string {
  if (
    Array.isArray(selectedLevels) &&
    (selectedLevels.length === levelsList.length || selectedLevels.length === 0)
  ) {
    return "";
  }

  try {
    const level = selectedLevels.map(el => el.toLowerCase()).join();
    return `&level=${level}`;
  } catch (error) {
    console.warn("Error Requesting Level", error);
    return "";
  }
}

/**
 * Converts array of selected services into request param
 * Xparam selectedService : Array of selected services
 * @returns {string} Request query param string for services
 */
export function getRequestService(selectedService: Array<string> = []): string {
  if (
    (Array.isArray(selectedService) &&
      selectedService.length === SERVICE_LIST.length) ||
    selectedService.length === 0
  ) {
    return "";
  }

  try {
    const services = selectedService.map(el => el.toLowerCase()).join();
    return `&services=${services}`;
  } catch (error) {
    console.warn("Error Requesting Service", error);
    return "";
  }
}

/**
 * Convert date timestamp into request query params
 * Xparam selectedFromDate : Logs "From" date
 * Xparam selectedToDate : Logs "To" date
 * @returns {string} Request query param string for dates
 */
export function getRequestDate(
  selectedFromDate: TimestampQuery | undefined,
  selectedToDate: TimestampQuery | undefined
): string {
  let res = "";
  try {
    if (selectedFromDate) {
      res += `&fromDate=${getDateWithoutSeconds(selectedFromDate)}`;
    }
    if (selectedToDate) {
      res += `&toDate=${getDateWithoutSeconds(selectedToDate) + 59}`;
    }
    return res;
  } catch (error) {
    console.warn("Error Requesting Data", error);
    return "";
  }
}

/**
 * Converts the levels in the state for the string for the request
 *  Input: [{ key: 0, label: "ui" }, { key: 1, label: "tasks" }]
 *  Output: "&tags=ui,tasks"
 * Xparam selectedTags : Array with selected tags
 * @returns {string} Request query param string for tags
 */
export function getRequestTags(selectedTags: Array<LogTag> = []): string {
  // Return empty string if no tag is added
  if (!selectedTags.length) {
    return "";
  }
  // Format tags to URL parameter
  const tags = selectedTags.map(el => el.label).join();
  return `&tags=${tags}`;
}

/**
 * Convert array of selected robots into query param string
 * Xparam {Array<string>} selectedRobots : Selected robot names
 * @returns {string} Request query param string for robots
 */
export function getRequestRobots(selectedRobots: Array<string> = []): string {
  // Return empty string if no tag is added
  if (!selectedRobots.length) {
    return "";
  }
  // Format tags to URL parameter
  const robots = selectedRobots.join();
  return `&robots=${robots}`;
}

// Converts the levels in the state for the string for the request
//  Input: "r'started\.$"
//  Output: "&message=r'started\.$"
/**
 * Converts the levels in the state for the string for the request
 *  Input: "r'started\.$"
 *  Output: "&message=r'started\.$"
 * Xparam {string} message : Search message
 * @returns {string} Request query param string for message
 */
export function getRequestMessage(message: string = ""): string {
  if (!message || message === "") {
    return "";
  }
  // Parse message to URL and return
  const parsedMessageToUrl = message.replace(/ /g, "+");
  return `&message=${parsedMessageToUrl}`;
}
