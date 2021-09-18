import { Images } from "../theme";
import { Route } from "react-router-dom";

export const SAGA_ALERT_TIMEOUT = 500;
export const IMAGE_MAX_WIDTH = 500;
export const IMAGE_MAX_HEIGHT = 500;
export const MILES_LIMIT = 50;

// URLS
export const URL_WEBSITE = "https://www.kiffgo.com";

// Array of week

export const WEEK = {
  SUNDAY: "sunday",
  MONDAY: "monday",
  TUESDAY: "tuesday",
  WEDNESDAY: "wednesday",
  THURSDAY: "thursday",
  FRIDAY: "friday",
  SATURDAY: "saturday",
};

export const strings = {
  CONTACT_FORM_SUCCESS_MESSAGE:
    "We've received your query and we will contact you soon",
  NOTIFY_SUCCESS_MESSAGE:
    "We'll inform you by email once the page will get ready",
  EMAIL_IS_REQUIRED: "Email is required",
  PRIVACY_POLICY: "Privacy Policy",
  INVALID_NUMBER: "Invalid number",
  INVALID_EMAIL_ERROR: "Invalid email",
  INVALID_PHONE_NUMBER: "Invalid phone number",
  INVALID_FIELD: "Invalid data",
  NUMBER_IS_REQUIRED: "Number is required",
  NAME_IS_REQUIRED: "Name is required",
  INVALID_EMAIL: "Invalid email",
  INVALID_ADDRESS: "Invalid address",
  EMAIL: "E-mail",
  SOMETHING_WENT_WRONG: "Something went wrong",
  NUMBER: "Number:",
  CANCEL: "Cancel",
  ARE_U_SURE: "Are you sure?",
  INTERNET_ERROR: "Please connect to the working internet",
  SESSION_EXPIRED_ERROR: "Session expired, Please login again",
  SOMETHING_WRONG: "Something went wrong",
  FAILED_TO_FETCH: "Failed to fetch, try to refresh the page",
  BANK_DETAILS: {
    name: "HSBC",
    sortCode: "40 07 04",
    accountNumber: "71828835",
    accountName: "Enaikidigha Ltd (trading as Health BJ-UK)",
    paymentReference:
      "Your surname and date you received the service e.g. J. Kane23/06/18.)",
    IBAN: "GB83HBUK40070471828835",
    SWIFT: "HBUKGB4142V",
  },
  PHONE_IS_REQUIRED: "Phone is required",
  ADDRESS_IS_REQUIRED: "Address is required",
  TIME_SLOT_IS_REQUIRED: "Time slot is required",
  IS_REQUIRED_ERROR: "This field is required",
  INVALID_FULLNAME_ERROR: "Invalid full name",
};

// date time formats
export const DATE_FORMAT1 = "Do MMMM YYYY, HH:mm";
export const DATE_FORMAT2 = "Do MMM";
export const DATE_FORMAT3 = "Do MMM YYYY";
export const DATE_FORMAT4 = "DD/MM/YYYY";
export const DATE_TIME_FORMAT1 = "YYYY-MM-DD HH:mm";
export const DATE_TIME_FORMAT2 = "MMM D HH A";
export const DATE_TIME_FORMAT3 = "HH:mm DD-MM-YYYY";
export const DATE_TIME_FORMAT4 = "dddd Do MMM, YYYY @ HH:mm";
export const DATE_TIME_FORMAT5 = "dddd Do MMM, YYYY @ hh: mm a";
export const DATE_TIME_FORMAT6 = "D MMM YYYY at HH: mm";
export const DATE_TIME_FORMAT7 = "HH:mm (DD MMM)";
export const DATE_TIME_FORMAT_BULK = "DD/MM/YYYY HH:mm";

export const TIME_FORMAT1 = "HH:mm";
export const TIME_FORMAT2 = "H [h] : mm [min]";
export const TIME_FORMAT3 = "hh A";
export const TIME_FORMAT4 = "hh:mm A";
export const TIME_DAY_FORMAT3 = "ddd - HH:mm";
export const TIME_ZONE = (-1 * new Date().getTimezoneOffset()) / 60;
export const SERVER_TIME_ZONE = "Europe/London";

// Messages

export const MIGRATION_COMPLETED = "Migration is completed.";
export const SAME_VEHICLE_ERROR =
  "All selected driver must have same vehicles.";
export const TASK_REQUIRED_ERROR = "No task provided.";
export const DRIVER_REQUIRED_ERROR = "Please select driver.";
export const DRIVER_SCHEDULE_INCOMPLETE_TIME = "Incomplete time.";
export const DRIVER_SCHEDULE_INVALID_TIME_RANGE = "Invalid time range.";
export const DRIVER_SCHEDULE_INVALID_TIME = "Invalid time.";
export const DRIVER_SCHEDULE_INVALID_TIME_ERROR_ON_SUBMIT =
  "You have entered invalid time for ";
export const SERVICE_TIME_ERROR = "Service time must be number greater than 1.";
export const MAX_OPTIMIZATION_DELAY_ERROR =
  "Max allowed delay time must be number greater than 0.";
export const MAX_TASKS_PER_DRIVER_ERROR =
  "Max tasks per driver must be number greater than 0 and less then 200.";
export const LOCATION_OPTIMIZATION_REQUIRED_ERROR =
  "Start or End location is missing.";
export const LOCATION_PERMISSION_DENIED_ERROR2 =
  "Location permission required, please go to app settings to allow access";
export const INVALID_NAME_ERROR = "Invalid name";
export const INVALID_ADDRESS_ERROR = "Invalid address";
export const INVALID_EMAIL_ERROR = "Invalid email";
export const INVALID_PASSWORD = "Use 6 characters or more for your password";
export const CONFRIM_PASSWORD_MISMATCH_ERROR = "Confirm password mismatch";
export const INTERNET_ERROR = "Please connect to the working internet";
export const SESSION_EXPIRED_ERROR = "Session expired, Please login again";
export const SOMETHING_WRONG = "Something went wrong";
export const LOCATION_POSTCODE_REQUIRED =
  "Select an address which includes an exact street address";
export const BOOKING_CANCEL_SUCCESSFUL = "Booking Cancel Successfully";
export const START_JOB_CONFIRMATION_MESSAGE =
  "Are you sure you want to start this job?";
export const NOTIFICATION_PERMISSION_DENIED_ERROR =
  "Please allow notifications and get notified timely";
export const LOADING_ANOTHER_LOCATION = "Now loading at another location";
export const CARGO_MILES_LIMIT_MESSAGE =
  "Cargo bike can not travel more than 50 miles.";
export const CARGO_ASAP_TIME_LIMIT =
  "Cargo bike only available between 7am to 6pm";
export const CARGO_SCHEDULE_TIME_LIMIT =
  "Please book for after half hour from current time";
export const NON_CARGO_SCHEDULE_TIME_LIMIT =
  "Please book for after one hour from current time";
export const INVALID_POSTCODE_ERROR = "Invalid post code";
export const INVALID_WEBSITE_ERROR = "Invalid website";
export const NOT_AVAILABLE_IN_AREA =
  "We only operate in Central London for Cargo bikes. Please change vehicle type";
export const PASSWORD_RESET_SUCCESS_MSG =
  "Your password has been reset successfully. Use this new password to get logged-in again and enjoy our hassle free services.";
export const IS_REQUIRED_ERROR = "This field is required";
export const PHONE_IS_REQUIRED_ERROR = "Phone field is required";
export const NAME_IS_REQUIRED_ERROR = "Name field is required";
export const LATITUDE_IS_REQUIRED_ERROR = "Latitude field is required";
export const LONGITUDE_IS_REQUIRED_ERROR = "Longitude field is required";
export const ADDRESS_IS_REQUIRED_ERROR = "Address field is required";
export const TIME_ERROR = "Complete before must not be before creation time";
export const INVALID_PHONE_ERROR = "Invalid phone number";
export const SIGNUP_SUCCESS_MSG = "Welcome to Kiffgo.";
export const LOCATION_DETAIL_FROM_ERROR =
  "There is an invalid data in location form";
export const PASSED_TIME_ERROR = "You cannot select past date or time";
export const DRIVER_ALLOCATED_SUCCESS_MESSAGE = "Driver Allocated Successfully";
export const COPIED_TO_CLIPBOARD_MESSAGE = "Copied to Clipboard";
export const DRIVER_VERIFIED_SUCCESSFULLY = "Driver Verified Successfully";
export const SEND_INVOICE_SUCCESSFULLY = "Invoice sent successfully";
export const TRACKING_LINK_SENT_SUCCESSFULLY =
  "Tracking link sent successfully";
export const BOOKED_SUCCESSFULLY = "Booked Successfully";
export const ARE_YOU_SURE = "Are you sure?";
export const CONFIRM_DELETE_TASK = "Task will be deleted permanently";
export const CONFIRM_CLONE_TASK = "Do you want to clone this task?";
export const CONFIRM_DELETE_DRIVER = "Driver will be deleted permanently";
export const CONFIRM_DELETE_API_KEY = "Api Key will be deleted permanently";
export const CONFIRM_DELETE_HUB = "Hub will be deleted permanently";
export const INVALID_LAT = "Invalid latitude";
export const INVALID_LNG = "Invalid longitude";
export const FAILED_TO_FETCH = "Failed to fetch, try to refresh the page";

export const DEV_ENV = true;
export const PROD_ENV = "prod";
export const MAX_ADDITIONAL_LOCATION = 31;
export const MAX_IMAGES_PER_LOCATION = 3;
export const MIN_LOADING_TIME_IN_MINUTES = 10;
export const MAX_LOADING_TIME_IN_MINUTES = 180;
export const CENTRAL_LONDON = { lat: 51.509099, lng: -0.126541 };
export const DM_MODULE_UPDATE_TIMEOUT_IN_MINUTES = 20;

export const ROUTES = {
  HOME: "/",
  WAIT_LIST: "/admin/waitlist",
  ADMIN_DASHBOARD: "/admin/dashboard",
  DOCTORS: "/admin/doctors",
  // CLIENT_PROFILE: "/admin/client-profile",
  CLIENT_PROFILE: "/admin/client-profile",
  DEPARTMENTS: "/admin/departments",
  PERSONAL_DETAIL: "/admin/personal-detail",
  PATIENTS: "/admin/patients",
  PAYMENTS: "/admin/payments",
  HELP: "/admin/help",
};

// Message types
export const MESSAGE_TYPES = {
  INFO: "info",
  ERROR: "error",
  SUCCESS: "success",
};
