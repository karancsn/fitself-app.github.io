/**
 * @license
 * Copyright (c) 2014, 2022, Oracle and/or its affiliates.
 * Licensed under The Universal Permissive License (UPL), Version 1.0
 * as shown at https://oss.oracle.com/licenses/upl/
 * @ignore
 */
define(["exports","ojs/ojlogger","ojs/ojconfig","ojs/ojlocaledata","ojs/ojconverterutils-i18n","ojs/ojtranslation","ojs/ojcore-base","ojs/ojcalendarutils","ojs/ojoratimezone","ojs/ojconverter-preferences"],function(e,t,a,r,n,s,o,i,l,d){"use strict";o=o&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o;class h{}h._YEAR_AND_DATE_REGEXP=/(\d{1,4})\D+?(\d{1,4})/g,h._YMD_REGEXP=/(\d{1,4})\D+?(\d{1,4})\D+?(\d{1,4})/g,h._TIME_REGEXP=/(\d{1,2})(?:\D(\d{1,2}))?(?:\D(\d{1,2}))?(?:\D(\d{1,3}))?/g,h._TIME_FORMAT_REGEXP=/h|H|K|k/g,h._YEAR_REGEXP=/y{1,4}/,h._MONTH_REGEXP=/M{1,5}/,h._DAY_REGEXP=/d{1,2}/,h._WEEK_DAY_REGEXP=/E{1,5}/,h._HOUR_REGEXP=/h{1,2}|k{1,2}/i,h._MINUTE_REGEXP=/m{1,2}/,h._SECOND_REGEXP=/s{1,2}/,h._FRACTIONAL_SECOND_REGEXP=/S{1,3}/,h._AMPM_REGEXP=/a{1,2}/,h._WORD_REGEXP="(\\D+?\\s*)",h._ESCAPE_REGEXP=/([\^$.*+?|\[\](){}])/g,h._TOKEN_REGEXP=/ccccc|cccc|ccc|cc|c|EEEEE|EEEE|EEE|EE|E|dd|d|MMMMM|MMMM|MMM|MM|M|LLLLL|LLLL|LLL|LL|L|yyyy|yy|y|hh|h|HH|H|KK|K|kk|k|mm|m|ss|s|aa|a|SSS|SS|S|zzzz|zzz|zz|z|v|ZZZ|ZZ|Z|XXX|XX|X|VV|GGGGG|GGGG|GGG|GG|G/g,h._ZULU="zulu",h._LOCAL="local",h._AUTO="auto",h._INVARIANT="invariant",h._OFFSET="offset",h._ALNUM_REGEXP="(\\D+|\\d\\d?\\D|\\d\\d?|\\D+\\d\\d?)",h._NON_DIGIT_REGEXP="(\\D+|\\D+\\d\\d?)",h._NON_DIGIT_OPT_REGEXP="(\\D*)",h._STR_REGEXP="(.+?)",h._TWO_DIGITS_REGEXP="(\\d\\d?)",h._THREE_DIGITS_REGEXP="(\\d{1,3})",h._FOUR_DIGITS_REGEXP="(\\d{1,4})",h._SLASH_REGEXP="(\\/)",h._PROPERTIES_MAP={MMM:{token:"months",style:"format",mLen:"abbreviated",matchIndex:0,key:"month",value:"short",regExp:h._ALNUM_REGEXP},MMMM:{token:"months",style:"format",mLen:"wide",matchIndex:0,key:"month",value:"long",regExp:h._ALNUM_REGEXP},MMMMM:{token:"months",style:"format",mLen:"narrow",matchIndex:0,key:"month",value:"narrow",regExp:h._ALNUM_REGEXP},LLL:{token:"months",style:"stand-alone",mLen:"abbreviated",matchIndex:1,key:"month",value:"short",regExp:h._ALNUM_REGEXP},LLLL:{token:"months",style:"stand-alone",mLen:"wide",matchIndex:1,key:"month",value:"long",regExp:h._ALNUM_REGEXP},LLLLL:{token:"months",style:"stand-alone",mLen:"narrow",matchIndex:1,key:"month",value:"narrow",regExp:h._ALNUM_REGEXP},E:{token:"days",style:"format",dLen:"abbreviated",matchIndex:0,key:"weekday",value:"short",regExp:h._NON_DIGIT_REGEXP},EE:{token:"days",style:"format",dLen:"abbreviated",matchIndex:0,key:"weekday",value:"short",regExp:h._NON_DIGIT_REGEXP},EEE:{token:"days",style:"format",dLen:"abbreviated",matchIndex:0,key:"weekday",value:"short",regExp:h._NON_DIGIT_REGEXP},EEEE:{token:"days",style:"format",dLen:"wide",matchIndex:0,key:"weekday",value:"long",regExp:h._NON_DIGIT_REGEXP},EEEEE:{token:"days",style:"format",dLen:"narrow",matchIndex:0,key:"weekday",value:"narrow",regExp:h._NON_DIGIT_REGEXP},c:{token:"days",style:"stand-alone",dLen:"abbreviated",matchIndex:1,key:"weekday",value:"short",regExp:h._NON_DIGIT_REGEXP},cc:{token:"days",style:"stand-alone",dLen:"abbreviated",matchIndex:1,key:"weekday",value:"short",regExp:h._NON_DIGIT_REGEXP},ccc:{token:"days",style:"stand-alone",dLen:"abbreviated",matchIndex:1,key:"weekday",value:"short",regExp:h._NON_DIGIT_REGEXP},cccc:{token:"days",style:"stand-alone",dLen:"wide",matchIndex:1,key:"weekday",value:"long",regExp:h._NON_DIGIT_REGEXP},ccccc:{token:"days",style:"stand-alone",dLen:"narrow",matchIndex:1,key:"weekday",value:"narrow",regExp:h._NON_DIGIT_REGEXP},h:{token:"time",timePart:"hour",start1:0,end1:11,start2:1,end2:12,key:"hour",value:"numeric",regExp:h._TWO_DIGITS_REGEXP},hh:{token:"time",timePart:"hour",start1:0,end1:11,start2:1,end2:12,key:"hour",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},K:{token:"time",timePart:"hour",start1:0,end1:12,start2:0,end2:12,key:"hour",value:"numeric",regExp:h._TWO_DIGITS_REGEXP},KK:{token:"time",timePart:"hour",start1:0,end1:12,start2:0,end2:12,key:"hour",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},H:{token:"time",timePart:"hour",start1:0,end1:23,start2:0,end2:23,key:"hour",value:"numeric",regExp:h._TWO_DIGITS_REGEXP},HH:{token:"time",timePart:"hour",start1:0,end1:23,start2:0,end2:23,key:"hour",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},k:{token:"time",timePart:"hour",start1:0,end1:24,start2:0,end2:24,key:"hour",value:"numeric",regExp:h._TWO_DIGITS_REGEXP},kk:{token:"time",timePart:"hour",start1:0,end1:24,start2:0,end2:24,key:"hour",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},m:{token:"time",timePart:"minute",start1:0,end1:59,start2:0,end2:59,key:"minute",value:"numeric",regExp:h._TWO_DIGITS_REGEXP},mm:{token:"time",timePart:"minute",start1:0,end1:59,start2:0,end2:59,key:"minute",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},s:{token:"time",timePart:"second",start1:0,end1:59,start2:0,end2:59,key:"second",value:"numeric",regExp:h._TWO_DIGITS_REGEXP},ss:{token:"time",timePart:"second",start1:0,end1:59,start2:0,end2:59,key:"second",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},S:{token:"time",timePart:"millisec",start1:0,end1:999,start2:0,end2:999,key:"millisecond",value:"numeric",regExp:h._THREE_DIGITS_REGEXP},SS:{token:"time",timePart:"millisec",start1:0,end1:999,start2:0,end2:999,key:"millisecond",value:"numeric",regExp:h._THREE_DIGITS_REGEXP},SSS:{token:"time",timePart:"millisec",start1:0,end1:999,start2:0,end2:999,key:"millisecond",value:"numeric",regExp:h._THREE_DIGITS_REGEXP},d:{token:"dayOfMonth",key:"day",value:"numeric",getPartIdx:2,regExp:h._TWO_DIGITS_REGEXP},dd:{token:"dayOfMonth",key:"day",value:"2-digit",getPartIdx:2,regExp:h._TWO_DIGITS_REGEXP},M:{token:"monthIndex",key:"month",value:"numeric",getPartIdx:1,regExp:h._TWO_DIGITS_REGEXP},MM:{token:"monthIndex",key:"month",value:"2-digit",getPartIdx:1,regExp:h._TWO_DIGITS_REGEXP},L:{token:"monthIndex",key:"month",value:"numeric",getPartIdx:1,regExp:h._TWO_DIGITS_REGEXP},LL:{token:"monthIndex",key:"month",value:"2-digit",getPartIdx:1,regExp:h._TWO_DIGITS_REGEXP},y:{token:"year",key:"year",value:"numeric",regExp:h._FOUR_DIGITS_REGEXP},yy:{token:"year",key:"year",value:"2-digit",regExp:h._TWO_DIGITS_REGEXP},yyyy:{token:"year",key:"year",value:"numeric",regExp:h._FOUR_DIGITS_REGEXP},a:{token:"ampm",key:"dayPeriod",value:void 0,regExp:h._WORD_REGEXP},z:{token:"tzAbbrev",key:"timeZoneName",value:"short",regExp:h._STR_REGEXP},v:{token:"tzAbbrev",key:"timeZoneName",value:"short",regExp:h._STR_REGEXP},zz:{token:"tzAbbrev",key:"timeZoneName",value:"short",regExp:h._STR_REGEXP},zzz:{token:"tzAbbrev",key:"timeZoneName",value:"short",regExp:h._STR_REGEXP},zzzz:{token:"tzFull",key:"timeZoneName",value:"long",regExp:h._STR_REGEXP},Z:{token:"tzhm",key:"tzhm",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},ZZ:{token:"tzhm",key:"tzhm",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},ZZZ:{token:"tzhm",key:"tzhm",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},X:{token:"tzh",key:"tzh",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},XX:{token:"tzhm",key:"tzhm",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},XXX:{token:"tzhsepm",key:"tzhsepm",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},VV:{token:"tzid",key:"tzid",value:"short",regExp:h._STR_REGEXP,type:"tzOffset"},G:{token:"era",key:"era",value:"eraAbbr",regExp:h._NON_DIGIT_REGEXP},GG:{token:"era",key:"era",value:"eraAbbr",regExp:h._NON_DIGIT_REGEXP},GGG:{token:"era",key:"era",value:"eraAbbr",regExp:h._NON_DIGIT_REGEXP},GGGG:{token:"era",key:"era",value:"eraName",regExp:h._NON_DIGIT_REGEXP},GGGGG:{token:"era",key:"era",value:"eraNarrow",regExp:h._NON_DIGIT_REGEXP},"/":{token:"slash",regExp:h._SLASH_REGEXP}},h.FRACTIONAL_SECOND_MAP={a:{key:"dayPeriod",token:"dayPeriod",value:"narrow"},SSS:{key:"fractionalSecondDigits",token:"fractionalSecond",value:3},SS:{key:"fractionalSecondDigits",token:"fractionalSecond",value:2},S:{key:"fractionalSecondDigits",token:"fractionalSecond",value:1}},h._tokenMap={era:{short:"GGG",long:"GGGG",narrow:"GGGGG"},month:{short:"MMM",long:"MMMM",narrow:"MMMMM",numeric:"M","2-digit":"MM"},weekday:{short:"EEE",long:"EEEE",narrow:"EEEEE"},year:{numeric:"y","2-digit":"yy"},day:{numeric:"d","2-digit":"dd"},hour:{numeric:"h","2-digit":"hh"},minute:{numeric:"m","2-digit":"mm"},second:{numeric:"s","2-digit":"ss"},fractionalSecond:{1:"S",2:"SS",3:"SSS"},timeZoneName:{short:"z",long:"zzzz"}},h._dateTimeFormats={dateStyle:{full:{year:"y",month_s:"MM",month_m:"MMMM",weekday:"EEEE",day:"d"},long:{year:"y",month_s:"MM",month_m:"MMMM",day:"d"},medium:{year:"y",month_s:"MM",month_m:"MMM",day:"d"},short:{year:"y",month_s:"M",month_m:"MMM",day:"d"}},timeStyle:{full:{hour:"h",minute:"mm",second:"ss",timeZoneName:"zzzz"},long:{hour:"h",minute:"mm",second:"ss",timeZoneName:"z"},medium:{hour:"h",minute:"mm",second:"ss"},short:{hour:"h",minute:"mm"}}},h._ALPHA_REGEXP=/([a-zA-Z]+)/,h._HOUR12_REGEXP=/h/g,h._hourCycleMap={h12:"h",h23:"H",h11:"K",h24:"k"},h._zh_tw_locales=["zh-TW","zh-Hant","zh-Hant-TW"],h._zh_tw_pm_symbols=["中午","下午","晚上"];const m=n.IntlConverterUtils;class _{static processError(e,t,a){let r,n=e.errorInfo,i="",l="",d="";if(n){var h=n.errorCode,_=n.parameterMap||{};o.Assert.assertObject(_);var c=_.propertyName;c=s.getTranslatedString("oj-converter.datetime.datetimeOutOfRange."+c),_.propertyName=c,e instanceof RangeError?"datetimeOutOfRange"===h?(i=s.getTranslatedString("oj-converter.datetime.datetimeOutOfRange.summary",{propertyName:c,value:_.value}),l=s.getTranslatedString("oj-converter.datetime.datetimeOutOfRange.detail",{minValue:_.minValue,maxValue:_.maxValue}),r=m.__getConverterError(i,l)):"isoStringOutOfRange"===h&&(i=s.getTranslatedString("oj-converter.datetime.invalidISOString.invalidRangeSummary",{isoStr:_.isoString,propertyName:c,value:_.value}),l=s.getTranslatedString("oj-converter.datetime.datetimeOutOfRange.detail",{minValue:_.minValue,maxValue:_.maxValue}),r=m.__getConverterError(i,l)):e instanceof SyntaxError?"optionValueInvalid"===h&&(r=m.__getConverterOptionError(h,_)):e instanceof Error&&("dateFormatMismatch"===h?d="oj-converter.datetime.dateFormatMismatch.summary":"timeFormatMismatch"===h?d="oj-converter.datetime.timeFormatMismatch.summary":"datetimeFormatMismatch"===h?d="oj-converter.datetime.datetimeFormatMismatch.summary":"nonExistingTime"===h?d="oj-converter.datetime.nonExistingTime.summary":"dateToWeekdayMismatch"===h?(i=s.getTranslatedString("oj-converter.datetime.dateToWeekdayMismatch.summary",{date:_.date,weekday:_.weekday}),l=s.getTranslatedString("oj-converter.datetime.dateToWeekdayMismatch.detail"),r=m.__getConverterError(i,l)):"invalidISOString"===h&&(i=s.getTranslatedString("oj-converter.datetime.invalidISOString.summary",{isoStr:_.isoStr}),l=s.getTranslatedString("oj-converter.datetime.invalidISOString.detail"),r=m.__getConverterError(i,l)),d&&(i=s.getTranslatedString(d,{value:t||_.value,format:_.format}),l=s.getTranslatedString("oj-converter.hint.detail",{exampleValue:a}),r=m.__getConverterError(i,l)))}return r||(i=e.message,l=e.message,r=m.__getConverterError(i,l)),r}}const c=n.OraI18nUtils;const u=n.OraI18nUtils;class E{constructor(e){this.intlFormatter=null,this.pattern=null,this.inputTimeZone=!1,this.intlFormatter=new Intl.DateTimeFormat(a.getLocale(),e);let t=e||{};this.resOptions=this.intlFormatter.resolvedOptions(),this.resOptions.isoStrFormat=t.isoStrFormat||"auto",this.resOptions.twoDigitYearStart=t.twoDigitYearStart||1950,this.resOptions.lenientParse=t.lenientParse||"full",t.timeZone&&(this.inputTimeZone=!0)}format(e){const t=this.normalizeIsoString(e);return this.intlFormatter.format(new Date(t))}parse(e){if(null==e||""===e){throw new Error("input value of the parse method cannot be empty")}const n=i.CalendarUtils.getCalendar(a.getLocale(),this.resOptions.calendar),s=r.__getBundle();try{const a=class{static parseImpl(e,t,a,r,n){const s=a.numberingSystem;void 0!==s&&"latn"!==s&&(e=c.getLatnDigits(e,s));let o,i=0,l="",d=null;return!0===c._ISO_DATE_REGEXP.test(e)?(l=e,i=this._isoStrDateTimeStyle(e)):(i=this._dateTimeStyle(a),o=this._parseExact(e,t,a,r,n),l=o.value),d=c.getISOStrFormatInfo(l),void 0!==a.timeZone&&d.format!==h._LOCAL&&this._adjustHours(d,a,r),l=this._createParseISOStringFromDate(i,d,a,r),void 0===o?o={value:l,warning:null}:(o.value=l,o.warning=null),o}static _appendPreOrPostMatch(e,t){let a=0,r=!1;for(let n=0,s=e.length;n<s;n++){const s=e.charAt(n);switch(s){case"'":r?t.push("'"):a+=1,r=!1;break;case"\\":r&&t.push("\\"),r=!r;break;default:t.push(s),r=!1}}return a}static _validateRange(e){if(e.value<e.low||e.value>e.high){const t=e.displayValue+" is out of range.  Enter a value between "+e.displayLow+" and "+e.displayHigh+" for "+e.name;let a=new RangeError(t);const r={errorCode:"datetimeOutOfRange",parameterMap:{value:e.displayValue,minValue:e.displayLow,maxValue:e.displayHigh,propertyName:e.name}};throw a.errorInfo=r,a}}static _throwInvalidDateFormat(e,t,a){const r=void 0!==t.year||void 0!==t.month||void 0!==t.weekday||void 0!==t.day,n=void 0!==t.hour||void 0!==t.minute||void 0!==t.second;let s="";s=r&&n?"MM/dd/yy hh:mm:ss a":r?"MM/dd/yy":"hh:mm:ss a";let o=new SyntaxError("Unexpected character(s) "+a+' encountered in the pattern "'+e+' An example of a valid pattern is "'+s+'".');const i={errorCode:"optionValueInvalid",parameterMap:{propertyName:"pattern",propertyValue:e,"propertyValueHint ":s}};throw o.errorInfo=i,o}static _throwWeekdayMismatch(e,t){let a=new Error("The weekday "+e+" does not match the date "+t);const r={errorCode:"dateToWeekdayMismatch",parameterMap:{weekday:e,date:t}};throw a.errorInfo=r,a}static _throwDateFormatMismatch(e,t,a){let r="",n="";2===a?(r='The value "'+e+'" does not match the expected date-time format "'+t+'"',n="datetimeFormatMismatch"):0===a?(r='The value "'+e+'" does not match the expected date format "'+t+'"',n="dateFormatMismatch"):(r='The value "'+e+'" does not match the expected time format "'+t+'"',n="timeFormatMismatch");let s=new Error(r);const o={errorCode:n,parameterMap:{value:e,format:t}};throw s.errorInfo=o,s}static _getTimeZone(e,t){return l.OraTimeZone.getInstance().getZone(e,t)}static _parseZone(e,t,a,r,n){const s=Date.UTC(t[0],t[1]-1,t[2],t[3],t[4],t[5]);return e.parse(s,a,r,n)}static _parseTimezoneOffset(e){let t=e.split(":"),a=new Array(2);return 2===t.length?(a[0]=parseInt(t[0],10),a[1]=parseInt(t[1],10)):2===e.length||3===e.length?(a[0]=parseInt(e,10),a[1]=0):(a[0]=parseInt(e.substr(0,3),10),a[1]=parseInt(e.substr(3),10)),a}static _expandYear(e,t){if((t=Number(t))<100){const a=e%100;t+=100*Math.floor(e/100)+(t<a?100:0)}return t}static _arrayIndexOfMonthOrDay(e,t){let a=c.toUpper(t);a=c.trim(a),a=a.replace(/\.$/,"");const r=Object.keys(e);for(let t=0;t<r.length;t++){let n=r[t];if(n=c.toUpper(e[n]),n=c.trim(n),n=n.replace(/\.$/,""),a==n)return t}return-1}static _getDayIndex(e,t,a){let r=0,n=[];const s=e.days.format,o=e.days["stand-alone"];n=[s.abbreviated,s.wide,o.abbreviated,o.wide];for(let e=0;e<n.length;e++)if(r=this._arrayIndexOfMonthOrDay(n[e],t),-1!==r)return r;return r}static _getMonthIndex(e,t,a){let r=-1;const n=e.months.format,s=e.months["stand-alone"],o=[n.wide,n.abbreviated,s.wide,s.abbreviated];for(let e=0;e<o.length;e++)if(r=this._arrayIndexOfMonthOrDay(o[e],t),-1!==r)return r;return r}static _getParseRegExp(e,t){const a=e.replace(h._ESCAPE_REGEXP,"\\\\$1");let r=["^"],n=[],s=0,o=0,i=h._TOKEN_REGEXP.exec(a);for(;null!==i;){const l=a.slice(s,i.index);if(s=h._TOKEN_REGEXP.lastIndex,o+=this._appendPreOrPostMatch(l,r),o%2)r.push(i[0]);else{const a=i[0];let s="";void 0!==h._PROPERTIES_MAP[a]?s=h._PROPERTIES_MAP[a].regExp:this._throwInvalidDateFormat(e,t,a),s&&r.push(s),n.push(i[0])}i=h._TOKEN_REGEXP.exec(a)}this._appendPreOrPostMatch(a.slice(s),r),r.push("$");return{regExp:r.join("").replace(/\s+/g,"\\s+"),groups:n}}static _getTokenIndex(e,t){for(let a=0;a<e.length;a++)if(void 0!==e[a][t])return a;return 0}static _parseLenienthms(e,t,a,r,n){h._TIME_REGEXP.lastIndex=0;let s,o,i=0,l=0,d=0,m=0,_=h._TIME_REGEXP.exec(t);switch(null===_&&this._throwDateFormatMismatch(t,a,r),void 0!==_[1]&&(i=parseInt(_[1],10)),void 0!==_[2]&&(l=parseInt(_[2],10)),void 0!==_[3]&&(d=parseInt(_[3],10)),void 0!==_[4]&&(m=parseInt(_[4],10)),h._TIME_FORMAT_REGEXP.lastIndex=0,_=h._TIME_FORMAT_REGEXP.exec(a),_[0]){case"h":12===i&&(i=0),o={name:"hour",value:i,low:0,high:11,displayValue:i,displayLow:1,displayHigh:12},this._validateRange(o),s=this._matchPMSymbol(n,t),s&&i<12&&(i+=12);break;case"K":o={name:"hour",value:i,low:0,high:11,displayValue:i,displayLow:0,displayHigh:11},this._validateRange(o),s=this._matchPMSymbol(n,t),s&&i<12&&(i+=12);break;case"H":o={name:"hour",value:i,low:0,high:23,displayValue:i,displayLow:0,displayHigh:23},this._validateRange(o);break;case"k":24===i&&(i=0),o={name:"hour",value:i,low:0,high:23,displayValue:i,displayLow:1,displayHigh:24}}o={name:"minute",value:l,low:0,high:59,displayValue:l,displayLow:0,displayHigh:59},this._validateRange(o),o={name:"second",value:d,low:0,high:59,displayValue:d,displayLow:0,displayHigh:59},this._validateRange(o),o={name:"farctionalSecond",value:m,low:0,high:999,displayValue:m,displayLow:0,displayHigh:999},this._validateRange(o),e.setHours(i,l,d,m)}static _getWeekdayName(e,t){const a=t.days.format,r=t.days["stand-alone"],n=[a.wide,a.abbreviated,r.wide,r.abbreviated];for(let t=0;t<n.length;t++){const a=Object.keys(n[t]);for(let r=0;r<a.length;r++){const s=n[t][a[r]];if(new RegExp(s+"\\b","i").test(e))return s}}return null}static _parseLenientyMEd(e,t,a,r,n){h._YMD_REGEXP.lastIndex=0;let s=h._YMD_REGEXP.exec(e),o=0;null===s&&(o=n?2:0,this._throwDateFormatMismatch(e,t,o));let i=[{y:t.indexOf("y")},{M:t.indexOf("M")},{d:t.indexOf("d")}];i.sort(function(e,t){let a=Object.keys(e)[0],r=Object.keys(t)[0];return e[a]-t[r]});let l=0,d=0,m=0,_=0,u=0,E=0,p=this._getTokenIndex(i,"d"),g=!1,y=!1;for(E=1;E<=3;E++){let e=s[E],t=parseInt(e);(e.length>2||t>31)&&(l=t,g=!0,_=E-1)}for(g||(_=this._getTokenIndex(i,"y"),l=s[this._getTokenIndex(i,"y")+1]),E=0;E<3;E++)if(E!==_&&s[E+1]>12){m=s[E+1],y=!0,u=E;break}if(y){for(E=0;E<3;E++)if(E!==u&&E!==_){d=s[E+1];break}void 0===d&&(d=s[this._getTokenIndex(i,"M")+1])}else _===this._getTokenIndex(i,"d")?(m=s[this._getTokenIndex(i,"y")+1],d=s[this._getTokenIndex(i,"M")+1]):_===this._getTokenIndex(i,"M")?(m=s[this._getTokenIndex(i,"d")+1],d=s[this._getTokenIndex(i,"y")+1]):(m=s[this._getTokenIndex(i,"d")+1],d=s[this._getTokenIndex(i,"M")+1]);d-=1;let v,T=c._getDaysInMonth(l,d);y&&p!==u&&d>12&&(v={name:"month",value:m,low:0,high:11,displayValue:m,displayLow:1,displayHigh:12},this._validateRange(v)),v={name:"month",value:d,low:0,high:11,displayValue:d+1,displayLow:1,displayHigh:12},this._validateRange(v),v={name:"day",value:m,low:1,high:T,displayValue:m,displayLow:1,displayHigh:T},this._validateRange(v);const k=a.twoDigitYearStart||1950;l=this._expandYear(k,l),v={name:"year",value:l,low:0,high:9999,displayValue:l,displayLow:0,displayHigh:9999},this._validateRange(v);let f=new Date(l,d,m),I=this._getWeekdayName(e,r);if(null!==I){const e=this._getDayIndex(r,I,0);f.getDay()!==e&&this._throwWeekdayMismatch(I,f.getDate())}if(n){const a=e.substr(h._YMD_REGEXP.lastIndex);0===a.length?f.setHours(0,0,0,0):this._parseLenienthms(f,a,t,2,r)}return{value:c.dateToLocalIso(f),warning:"lenient parsing was used"}}static _parseLenientyMMMEd(e,t,a,r,n){let s=e;e=c.toUpper(e);const o=r.months.format,i=r.months["stand-alone"];let l=[o.wide,o.abbreviated,i.wide,i.abbreviated],d=!1,m=[],_=0,u="";for(_=0;_<l.length;_++){m=[];const t=Object.keys(l[_]);let a=0;for(a=0;a<t.length;a++)u=c.toUpper(l[_][t[a]]),m.unshift({idx:a,name:u});for(m.sort(function(e,t){return t.idx-e.idx}),a=0;a<m.length;a++)if(u=m[a].name,-1!==e.indexOf(u)){d=!0,e=e.replace(u,"");break}if(d)break}if(!d)return this._parseLenientyMEd(s,t,a,r,n);const E=this._getMonthIndex(r,u,2);let p={name:"month",value:E,low:0,high:11,displayValue:E,displayLow:1,displayHigh:12};this._validateRange(p);const g=this._getWeekdayName(s,r),y=new RegExp(g+"\\W","i");null!==g&&(e=e.replace(y,"")),h._YEAR_AND_DATE_REGEXP.lastIndex=0;const v=h._YEAR_AND_DATE_REGEXP.exec(e);if(null===v){const e=n?2:0;this._throwDateFormatMismatch(s,t,e)}let T=[{y:t.indexOf("y")},{d:t.indexOf("d")}];T.sort(function(e,t){const a=Object.keys(e)[0],r=Object.keys(t)[0];return e[a]-t[r]});let k=0,f=0,I=0,O=!1;for(_=1;_<=2;_++){const e=v[_],t=parseInt(e);(e.length>2||t>31)&&(k=t,O=!0,I=_-1)}O||(I=this._getTokenIndex(T,"y"),k=parseInt(v[this._getTokenIndex(T,"y")+1],10)),f=I===this._getTokenIndex(T,"d")?parseInt(v[this._getTokenIndex(T,"y")+1],10):parseInt(v[this._getTokenIndex(T,"d")+1],10);const P=a.twoDigitYearStart||1950;k=this._expandYear(P,k),p={name:"year",value:k,low:0,high:9999,displayValue:k,displayLow:0,displayHigh:9999},this._validateRange(p);const S=new Date(k,E,f);if(null!==g){const e=this._getDayIndex(r,g,0);S.getDay()!==e&&this._throwWeekdayMismatch(g,S.getDate())}const R=c._getDaysInMonth(k,E);if(p={name:"day",value:f,low:1,high:R,displayValue:f,displayLow:1,displayHigh:R},this._validateRange(p),n){const a=e.substr(h._YEAR_AND_DATE_REGEXP.lastIndex);0===a.length?S.setHours(0,0,0,0):this._parseLenienthms(S,a,t,2,r)}return{value:c.dateToLocalIso(S),warning:"lenient parsing was used"}}static _parseLenient(e,t,a,r){let n;switch(this._dateTimeStyle(a)){case 0:n=this._parseLenientyMMMEd(e,t,a,r,!1);break;case 1:const s=new Date;this._parseLenienthms(s,e,t,1,r);n={value:c.dateToLocalIso(s),warning:"lenient parsing was used"};break;case 2:n=this._parseLenientyMMMEd(e,t,a,r,!0);break;default:n={value:"",warning:"lenient parsing was used"}}const s=c._IsoStrParts(n.value),o=[s[0],s[1],s[2]],i=n.value.split("T");return n.value=c.padZeros(o[0],4)+"-"+c.padZeros(o[1],2)+"-"+c.padZeros(o[2],2)+"T"+i[1],n}static _getNameIndex(e,t,a,r,n,s,o,i,l,d,h){let m=0;const _=e[t][n];let c;m="months"===t?this._getMonthIndex(e,a,s):this._getDayIndex(e,a,s);const u=_[r][l],E=_[r][d];return c={name:h,value:m,low:o,high:i,displayValue:parseInt(a),displayLow:u,displayHigh:E},this._validateRange(c),m}static _validateTimePart(e,t,a,r){let n=t;n[a.timePart]=e,"h"===r||"hh"===r?12===e&&(n[a.timePart]=0):"k"===r||"kk"===r?(n.htoken=r,24===e&&(n[a.timePart]=0)):"K"!==r&&"KK"!==r||12===e&&(n[a.timePart]=0);const s={name:a.timePart,value:n[a.timePart],low:a.start1,high:a.end1,displayValue:e,displayLow:a.start2,displayHigh:a.end2};this._validateRange(s)}static _dateTimeStyle(e){const t=void 0!==e.hour||void 0!==e.minute||void 0!==e.second||void 0!==e.fractionalSecondDigits,a=void 0!==e.year||void 0!==e.month||void 0!==e.day||void 0!==e.weekday;return a&&t?2:t?1:a?0:void 0!==e.dateStyle&&void 0!==e.timeStyle?2:void 0!==e.timeStyle?1:0}static _getStdOffset(e,t){const a=this._parseZone(e,t,!1,!0,!1),r=e.ofset(a),n=e.ofset(a+1);return Math.max(r,n)}static _matchPMSymbol(e,t){const a=e.locale;let r=!1,n=0;if(h._zh_tw_locales.includes(a)){const e=h._zh_tw_pm_symbols;for(n=0;n<e.length;n++){const a=e[n];if(-1!==t.indexOf(a))return!0}}else{const a=e.dayPeriods.format.wide.pm;r=-1!==c.toUpper(t).indexOf(c.toUpper(a))}return r}static _parseExact(e,t,a,r,n){const s=n.eras.eraAbbr[1],o=c.trimNumber(s);e=e.replace(s,o);const i=c.getGetOption(a,"NativeDateTimeConverter.parse")("lenientParse","string",["none","full"],"full"),l=this._dateTimeStyle(a),d=this._getParseRegExp(t,a),m=new RegExp(d.regExp).exec(e);if(null===m){if("full"===i)return this._parseLenient(e,t,a,n);this._throwDateFormatMismatch(e,t,l)}const _=d.groups;let u,E=null,p=null,g=null,y=null,v="",T=null,k=void 0,f="",I={hour:0,minute:0,second:0,millisec:0,htoken:""};const O=a.twoDigitYearStart||1950;for(let r=0,s=_.length;r<s;r++){const s=m[r+1];if(s){const o=_[r],l=parseInt(s,10),d=h._PROPERTIES_MAP[o];switch(d.token){case"months":p=this._getNameIndex(n,d.token,s,d.mLen,d.style,d.matchIndex,0,11,"1","12","month name");break;case"days":f=s,y=this._getNameIndex(n,d.token,s,d.dLen,d.style,d.matchIndex,0,6,"sun","sat","weekday");break;case"time":this._validateTimePart(l,I,d,o);break;case"dayOfMonth":g=l;break;case"monthIndex":if(p=l-1,p>11&&"full"===i)try{return this._parseLenient(e,t,a,n)}catch(e){u={name:"month",value:p,low:0,high:11,displayValue:p+1,displayLow:1,displayHigh:12},this._validateRange(u)}break;case"year":E=this._expandYear(O,l);break;case"ampm":k=this._matchPMSymbol(n,s);break;case"tzhm":v=s.substr(-2),v=s.substr(0,3)+":"+v;break;case"tzhsepm":v=s;break;case"tzh":v=s+":00";break;case"tzid":T=s}}}const P=new Date;null===E&&(E=P.getFullYear()),null===p&&null===g?(p=P.getMonth(),g=P.getDate()):null===g&&(g=1),P.setFullYear(E,p,g);const S=c._getDaysInMonth(E,p);u={name:"day",value:g,low:1,high:S,displayValue:g,displayLow:1,displayHigh:S},this._validateRange(u),1==k&&I.hour<12&&(I.hour+=12),0!=k||12!=I.hour||"k"!=I.htoken&&"kk"!=I.htoken||(I.hour=0);let R=[E,p+1,g];R[3]=I.hour,R[4]=I.minute,R[5]=I.second,R[6]=I.millisec;let M=c.partsToIsoString(R);if(null!==T){const e=this._getTimeZone(T,r),t=this._parseZone(e,R,!1,!0,!0),a=-e.ofset(t);v=c.getTimeStringFromOffset("",a,!1,!0)}""!==v&&(M+=v),u={name:"year",value:E,low:0,high:9999,displayValue:E,displayLow:0,displayHigh:9999},this._validateRange(u),u={name:"month",value:p,low:0,high:11,displayValue:p+1,displayLow:1,displayHigh:12},this._validateRange(u);const G=c._getDaysInMonth(R[0],R[1]-1);if(u={name:"day",value:R[2],low:1,high:G,displayValue:R[2],displayLow:1,displayHigh:G},this._validateRange(u),null!==y){const e=c.isoToLocalDate(M);e.getDay()!==y&&this._throwWeekdayMismatch(f,e.getDate())}return{value:M}}static _isoStrDateTimeStyle(e){const t=e.indexOf("T");return-1===t?0:t>0?2:1}static _adjustHours(e,t,a){let r=e.isoStrParts;const n=e.format,s=t.timeZone,o=this._getTimeZone(s,a);let i=null,l=0,d=0,m=0;switch(i=Date.UTC(r[0],r[1]-1,r[2],r[3],r[4],r[5]),n){case h._OFFSET:let t=this._parseTimezoneOffset(e.timeZone);const a=t[0],r=t[1];l=60*a+(a<0?-r:r);break;case h._ZULU:l=0}d=this._getStdOffset(o,r),i-=6e4*(d+l);const _=c.getGetOption(t,"NativeDateTimeConverter")("dst","boolean",[!0,!1],!1),u=0===e.dateTime.indexOf("T");m=o.parse(i,_,!u,!1),d=-o.ofset(m),d-=l;let E=new Date(Date.UTC(r[0],r[1]-1,r[2],r[3],r[4],r[5]));const p=E.getUTCMinutes()+d;E.setUTCHours(E.getUTCHours()+(p/60<<0),p%60),r[0]=E.getUTCFullYear(),r[1]=E.getUTCMonth()+1,r[2]=E.getUTCDate(),r[3]=E.getUTCHours(),r[4]=E.getUTCMinutes(),r[5]=E.getUTCSeconds()}static _createISOStrParts(e,t){let a=0,r="";switch(e){case 0:r=c.padZeros(t[0],4)+"-"+c.padZeros(t[1],2)+"-"+c.padZeros(t[2],2);break;case 1:r="T"+c.padZeros(t[3],2)+":"+c.padZeros(t[4],2)+":"+c.padZeros(t[5],2),a=t[6],a>0&&(r+="."+c.trimRightZeros(a));break;default:r=c.padZeros(t[0],4)+"-"+c.padZeros(t[1],2)+"-"+c.padZeros(t[2],2)+"T"+c.padZeros(t[3],2)+":"+c.padZeros(t[4],2)+":"+c.padZeros(t[5],2),a=t[6],a>0&&(r+="."+c.trimRightZeros(a))}return r}static _getParseISOStringOffset(e,t,a,r,n,s){const o=this._getTimeZone(e,n),i=this._parseZone(o,t,a,r,s),l=o.ofset(i);return c.getTimeStringFromOffset("",l,!0,!0)}static _createParseISOStringFromDate(e,t,a,r){let n=null,s=0,o="",i=[];const l=c.getGetOption(a,"NativeDateTimeConverter.parse"),d=l("isoStrFormat","string",[h._ZULU,h._OFFSET,h._INVARIANT,h._LOCAL,h._AUTO],h._AUTO),m=l("dst","boolean",[!0,!1],!1);let _=!0;const u=t.isoStrParts,E=t.timeZone,p=a.timeZone,g=t.format,y=a.isoStrFormat;let v=this._createISOStrParts(e,u);if(0===e||y===h._LOCAL)return v;if(1===e&&y===h._AUTO)return v;switch(1===e&&(_=!1),d){case h._OFFSET:void 0===p&&g===h._OFFSET?v+=E:void 0===p&&g===h._LOCAL?v+="":void 0===p&&g===h._ZULU?v+="+00:00":void 0!==p&&(o=this._getParseISOStringOffset(p,u,m,_,r,!0),v+=o);break;case h._ZULU:let t=0;if(void 0===p)if(g===h._OFFSET){i=this._parseTimezoneOffset(E);const e=parseInt(i[0],10),a=parseInt(i[1],10);t=60*e+(e<0?-a:a),t=-t}else t=new Date(u[0],u[1]-1,u[2],u[3],u[4],u[5]).getTimezoneOffset();else n=this._getTimeZone(p,r),s=this._parseZone(n,u,m,_,!0),t=n.ofset(s);if(0!==t){const a=new Date(Date.UTC(u[0],u[1]-1,u[2],u[3],u[4],u[5],u[6]));t=a.getUTCMinutes()+t,a.setUTCHours(a.getUTCHours()+(t/60<<0),t%60),u[0]=a.getUTCFullYear(),u[1]=a.getUTCMonth()+1,u[2]=a.getUTCDate(),u[3]=a.getUTCHours(),u[4]=a.getUTCMinutes(),u[5]=a.getUTCSeconds(),v=this._createISOStrParts(e,u)}v+="Z";break;case h._AUTO:void 0!==p?(o=this._getParseISOStringOffset(p,u,m,_,r,!0),v+=o):(o=E,o&&(v+=o))}return v}}.parseImpl(e,this._getPatternFromOptions(this.resOptions),this.resOptions,s,n),r=a.value;return r&&a.warning&&t.warn("The value "+e+" was leniently parsed to represent a date "+r),r}catch(t){throw _.processError(t,e,this.getHintValue())}}resolvedOptions(){return this.resOptions.patternFromOptions||(this.resOptions.patternFromOptions=this._getPatternFromOptions(this.resOptions)),this.resOptions}getTimeZoneOffset(e,t,a){let n=0;const s=u._IsoStrParts(e);if(this.inputTimeZone){const e=r.__getBundle(),a=l.OraTimeZone.getInstance().getZone(t,e),o=Date.UTC(s[0],s[1]-1,s[2],s[3],s[4],s[5]),i=a.parse(o,!1,!0,!0);n=a.ofset(i)}else n=new Date(s[0],s[1]-1,s[2],s[3],s[4],s[5]).getTimezoneOffset();const o=-n;return a?u.getTimeStringFromOffset("",o,!1,!0):o}normalizeIsoString(e){if(null==e||""===e){throw new Error("input value of the format method cannot be empty")}e.startsWith("T")?e="2021-01-10"+e:-1===e.indexOf("T")&&(e+="T00:00:00");if(!u._ISO_DATE_REGEXP.exec(e)){const t=new Error(""),a={errorCode:"invalidISOString",parameterMap:{isoStr:e}};t.errorInfo=a;throw _.processError(t,"","")}let t=e.substring(e.indexOf("T"));if(-1===t.indexOf("Z")&&-1===t.indexOf("+")&&-1===t.indexOf("-")&&this.inputTimeZone){e+=this.getTimeZoneOffset(e,this.resOptions.timeZone,!0)}return e=e.replace(/(T.*?[+-]..$)/,"$1:00")}getHintValue(){let e="";try{e=this.format("1998-11-29T15:45:31")}catch(t){e=""}return e}static getPatternFromOptionsImpl(e,t){const a=new Date("2000-01-02T00:00:00");let r="",n="",s=null,o=null,i=null,l=!1,d=!1;void 0!==t.dateStyle&&(o=h._dateTimeFormats.dateStyle,o=o[t.dateStyle],l=!0),void 0!==t.timeStyle&&(i=h._dateTimeFormats.timeStyle,i=i[t.timeStyle],d=!0);let m=h._tokenMap;return e.formatToParts(a).map(({type:e,value:a})=>{switch(e){case"literal":s=a.replace(h._ALPHA_REGEXP,"'$1'");break;case"dayPeriod":s="a";break;case"hour":d?s=i[e]:(n=t[e],s=m[e][n]);let r=t.hour12;void 0===r&&(r=!1),t.hourCycle&&(s=s.replace(h._HOUR12_REGEXP,h._hourCycleMap[t.hourCycle])),!0===r&&(s=s.replace(h._HOUR12_REGEXP,"h"));break;case"month":l?s=isNaN(+a)?o.month_m:o.month_s:(n=t[e],s=m[e][n]);break;case"year":case"day":case"weekday":l?s=o[e]:(n=t[e],s=m[e][n]);break;case"minute":case"second":case"timeZoneName":d?s=i[e]:(n=t[e],s=m[e][n]);break;case"era":n=t[e]||"short",s=m[e][n];break;case"fractionalSecond":s=t.fractionalSecondDigits,s=m[e][s]}r+=s}),r}_getPatternFromOptions(e){return this.pattern||(this.pattern=E.getPatternFromOptionsImpl(this.intlFormatter,e)),this.pattern}}const p=n.OraI18nUtils;class g extends E{constructor(e){const t=g._processOptions(e);super(t.opts),this.formatTokens=t.formatTokens,this.pattern=e.pattern,this.timeZone=this.resOptions.timeZone}format(e){const t=this.normalizeIsoString(e);var a=new Date(t);return this.intlFormatter.formatToParts(a).map(({type:e,value:t})=>{if("literal"!==e){const a=this.formatTokens.tokensIndexes[e];void 0!==a&&(this.formatTokens.tokensArray[a]=t)}}),this._formatTimeZoneTokens(t,this.timeZone),this.formatTokens.tokensArray.join("")}resolvedOptions(){return this.resOptions.patternFromOptions||(this.resOptions.patternFromOptions=this.pattern),this.resOptions}static _processOptions(e){const t=g._getOptionsFromPattern(e.pattern);return e.timeZone&&(t.opts.timeZone=e.timeZone),e.hour12&&(t.opts.hour12=e.hour12),t.opts.numberingSystem="latn",t.opts.calendar="gregory",t.opts.isoStrFormat=e.isoStrFormat||"auto",t.opts.twoDigitYearStart=e.twoDigitYearStart||1950,t.opts.lenientParse=e.lenientParse||"full",t}_formatTimeZoneTokens(e,t){const a=this.formatTokens;for(var r=0;r<a.tzOffsetsArray.length;r++){const s=a.tzOffsetsArray[r],o=a.tokensIndexes[s];if("tzid"===s){a.tokensArray[o]=t;continue}const i=this.getTimeZoneOffset(e,t,!1);var n="";if(0!==i){switch(s){case"tzhm":n=(i<=0?"-":"+")+p.padZeros(Math.floor(Math.abs(i/60)),2)+p.padZeros(Math.floor(Math.abs(i%60)),2);break;case"tzhsepm":n=(i<=0?"-":"+")+p.padZeros(Math.floor(Math.abs(i/60)),2)+":"+p.padZeros(Math.floor(Math.abs(i%60)),2);break;case"tzh":n=(i<=0?"-":"+")+p.padZeros(Math.floor(Math.abs(i/60)),2)}a.tokensArray[o]=n}else a.tokensArray[o]="UTC"}}static _appendPreOrPostMatch(e,t,a){let r=0,n=!1;for(var s=0,o=e.length;s<o;s++){var i=e.charAt(s);switch(i){case"'":n?(a.push("'"),t.count++):r+=1,n=!1;break;case"\\":n&&(a.push("\\"),t.count++),n=!n;break;default:a.push(i),n=!1,t.count++}}return r}static _getOptionsFromPattern(e){let t=0,a={count:0},r=0,n={},s=[],o={},i=[];for(h._TOKEN_REGEXP.lastIndex=0;;){let l=h._TOKEN_REGEXP.lastIndex;const d=h._TOKEN_REGEXP.exec(e),m=e.slice(l,d?d.index:e.length);if(t+=g._appendPreOrPostMatch(m,a,s),!d)break;if(t%2)s.push(d[0]),a.count++;else{s.push(null);let e=d[0];if(void 0===h._PROPERTIES_MAP[e])break;{const t=h._PROPERTIES_MAP[e].key,s=h._PROPERTIES_MAP[e].type;void 0!==t&&("millisecond"===t?(o[h.FRACTIONAL_SECOND_MAP[e].key]=h.FRACTIONAL_SECOND_MAP[e].value,n[h.FRACTIONAL_SECOND_MAP[e].token]=a.count++):"tzOffset"===s?(i[r]=t,n[t]=a.count++,r++):(o[t]=h._PROPERTIES_MAP[e].value,n[t]=a.count++)),"KK"===e||"K"===e?o.hourCycle="h11":"kk"===e||"k"===e?o.hourCycle="h24":"HH"===e||"H"===e?o.hourCycle="h23":"hh"!==e&&"h"!==e||(o.hourCycle="h12")}}}return{opts:o,formatTokens:{tokensArray:s,tzOffsetsArray:i,tokensIndexes:n}}}}class y{static getPreferencesMergedWithConverterOptions(e){let t=y._getPreferencesPatternAndTimezone(e),a={};return Object.assign(a,t,e),a}static _getPreferencesPatternAndTimezone(e){const t=d.getDateTimePreferences();if(!t||0===Object.keys(t).length)return{};let a={};if(!e||0===Object.keys(e).length){const e=y._getUserPrefPattern("short",null,t);e&&(a.pattern=e)}else if(e.dateStyle||e.timeStyle){const r=y._getUserPrefPattern(e.dateStyle,e.timeStyle,t);r&&(a.pattern=r)}return t.timeZone&&(a.timeZone=t.timeZone),a}static _getUserPrefPattern(e,t,a){var r,n,s,o,i,l,d,h;if(!e&&!t||!a)return null;let m=null,_=null;return"short"===e?m=null!==(n=null===(r=a.dateStyle)||void 0===r?void 0:r.short)&&void 0!==n?n:null:"medium"===e&&(m=null!==(o=null===(s=a.dateStyle)||void 0===s?void 0:s.medium)&&void 0!==o?o:null),"short"===t?_=null!==(l=null===(i=a.timeStyle)||void 0===i?void 0:i.short)&&void 0!==l?l:null:"medium"===t&&(_=null!==(h=null===(d=a.timeStyle)||void 0===d?void 0:d.medium)&&void 0!==h?h:null),y._combinePatternsWithSpace(m,_)}static _combinePatternsWithSpace(e,t){let a;return a=e&&t?`${e} ${t}`:t||(e||null),a}}e.DateTimePreferencesUtils=y,e.NativeDateTimeConverter=E,e.NativeDateTimePatternConverter=g,Object.defineProperty(e,"__esModule",{value:!0})});
//# sourceMappingURL=ojconverter-nativedatetime.js.map