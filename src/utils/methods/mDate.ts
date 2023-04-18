import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
dayjs.extend(relativeTime);

const DEFAULT_FORMAT = 'MM/DD/YYYY';
const FORMAT_DATETIME = 'MM/DD/YYYY H:mm:ss';
const FORMAT_JOINED_DATE = 'MMM YYYY';
const STANDARD_DATE_FORMAT = 'YYYY-MM-DD';
const FORMAT_DATE_NOTIFICATION = 'MMM DD, YYYY - H:mm';
const FORMAT_DATE_WALLET = 'MMM DD, YYYY';
const FORMAT_DATE_REVIEW = 'HH:mm A - MM/DD/YYYY';

const localeKeys: { [key: string]: string } = {
  en: 'en',
  vi: 'vi',
};

export type IDate = Date | number | string;

const toMomentLocale = (locale: string): string => <string>localeKeys?.[locale];

const getCurrent = () => {
  return dayjs().format(DEFAULT_FORMAT);
};

const getCurrentHour = () => {
  return dayjs().hour();
};

const formatDatetime = (date?: IDate) => {
  if (!date) {
    return dayjs().format(FORMAT_DATETIME);
  }
  return dayjs(date).format(FORMAT_DATETIME);
};

const formatDate = (date?: IDate, format?: string) => {
  if (!date) {
    return '';
  }
  return dayjs(date).format(format ?? DEFAULT_FORMAT);
};

const getDateFromNow = (date?: IDate) => {
  if (dayjs(date).isValid()) {
    return dayjs(date).fromNow();
  }
  return date;
};

const getTitleGroupByDate = (date?: IDate) => {
  const diff = dayjs().diff(dayjs(date), 'day');
  if (dayjs().isValid()) {
    if (diff === 0) {
      return 'Today';
    } else if (diff === 1) {
      return 'Yesterday';
    } else {
      return date;
    }
  }
  return date;
};

const formatDateWithName = (date: IDate) => {
  return dayjs(date).format('MMM D, YYYY');
};

const formatStandard = (date?: IDate): Date => {
  return dayjs(dayjs(date ?? undefined).format(STANDARD_DATE_FORMAT)).toDate();
};

const convertDateToStandard = (date?: string) => {
  if (!date) {
    return '';
  }
  const spt = date.split('/');
  return `${spt[2]}-${spt[0]}-${spt[1]}`;
};

const getDuration = (t: number) => {
  const hTos = 3600;
  const mTos = 60;

  if (!t) {
    return { hour: 0, minute: 0, second: 0 };
  }
  const h = Math.floor(t / hTos);
  const m = Math.floor((t - Math.floor(h * hTos)) / mTos);
  const s = t - h * hTos - m * mTos;
  return { hour: h, minute: m, second: s };
};

export default {
  formatDate,
  getCurrent,
  formatDatetime,
  getDateFromNow,
  DEFAULT_FORMAT,
  FORMAT_DATETIME,
  FORMAT_JOINED_DATE,
  FORMAT_DATE_NOTIFICATION,
  getTitleGroupByDate,
  toMomentLocale,
  formatDateWithName,
  formatStandard,
  convertDateToStandard,
  getCurrentHour,
  FORMAT_DATE_WALLET,
  getDuration,
  FORMAT_DATE_REVIEW,
};
