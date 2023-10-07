"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/supports-color";
exports.ids = ["vendor-chunks/supports-color"];
exports.modules = {

/***/ "(action-browser)/./node_modules/supports-color/index.js":
/*!**********************************************!*\
  !*** ./node_modules/supports-color/index.js ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst os = __webpack_require__(/*! os */ \"os\");\nconst hasFlag = __webpack_require__(/*! has-flag */ \"(action-browser)/./node_modules/has-flag/index.js\");\nconst env = process.env;\nlet forceColor;\nif (hasFlag(\"no-color\") || hasFlag(\"no-colors\") || hasFlag(\"color=false\")) {\n    forceColor = false;\n} else if (hasFlag(\"color\") || hasFlag(\"colors\") || hasFlag(\"color=true\") || hasFlag(\"color=always\")) {\n    forceColor = true;\n}\nif (\"FORCE_COLOR\" in env) {\n    forceColor = env.FORCE_COLOR.length === 0 || parseInt(env.FORCE_COLOR, 10) !== 0;\n}\nfunction translateLevel(level) {\n    if (level === 0) {\n        return false;\n    }\n    return {\n        level,\n        hasBasic: true,\n        has256: level >= 2,\n        has16m: level >= 3\n    };\n}\nfunction supportsColor(stream) {\n    if (forceColor === false) {\n        return 0;\n    }\n    if (hasFlag(\"color=16m\") || hasFlag(\"color=full\") || hasFlag(\"color=truecolor\")) {\n        return 3;\n    }\n    if (hasFlag(\"color=256\")) {\n        return 2;\n    }\n    if (stream && !stream.isTTY && forceColor !== true) {\n        return 0;\n    }\n    const min = forceColor ? 1 : 0;\n    if (process.platform === \"win32\") {\n        // Node.js 7.5.0 is the first version of Node.js to include a patch to\n        // libuv that enables 256 color output on Windows. Anything earlier and it\n        // won't work. However, here we target Node.js 8 at minimum as it is an LTS\n        // release, and Node.js 7 is not. Windows 10 build 10586 is the first Windows\n        // release that supports 256 colors. Windows 10 build 14931 is the first release\n        // that supports 16m/TrueColor.\n        const osRelease = os.release().split(\".\");\n        if (Number(process.versions.node.split(\".\")[0]) >= 8 && Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 10586) {\n            return Number(osRelease[2]) >= 14931 ? 3 : 2;\n        }\n        return 1;\n    }\n    if (\"CI\" in env) {\n        if ([\n            \"TRAVIS\",\n            \"CIRCLECI\",\n            \"APPVEYOR\",\n            \"GITLAB_CI\"\n        ].some((sign)=>sign in env) || env.CI_NAME === \"codeship\") {\n            return 1;\n        }\n        return min;\n    }\n    if (\"TEAMCITY_VERSION\" in env) {\n        return /^(9\\.(0*[1-9]\\d*)\\.|\\d{2,}\\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;\n    }\n    if (env.COLORTERM === \"truecolor\") {\n        return 3;\n    }\n    if (\"TERM_PROGRAM\" in env) {\n        const version = parseInt((env.TERM_PROGRAM_VERSION || \"\").split(\".\")[0], 10);\n        switch(env.TERM_PROGRAM){\n            case \"iTerm.app\":\n                return version >= 3 ? 3 : 2;\n            case \"Apple_Terminal\":\n                return 2;\n        }\n    }\n    if (/-256(color)?$/i.test(env.TERM)) {\n        return 2;\n    }\n    if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {\n        return 1;\n    }\n    if (\"COLORTERM\" in env) {\n        return 1;\n    }\n    if (env.TERM === \"dumb\") {\n        return min;\n    }\n    return min;\n}\nfunction getSupportLevel(stream) {\n    const level = supportsColor(stream);\n    return translateLevel(level);\n}\nmodule.exports = {\n    supportsColor: getSupportLevel,\n    stdout: getSupportLevel(process.stdout),\n    stderr: getSupportLevel(process.stderr)\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFjdGlvbi1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9zdXBwb3J0cy1jb2xvci9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBLE1BQU1BLEtBQUtDLG1CQUFPQSxDQUFDO0FBQ25CLE1BQU1DLFVBQVVELG1CQUFPQSxDQUFDO0FBRXhCLE1BQU1FLE1BQU1DLFFBQVFELEdBQUc7QUFFdkIsSUFBSUU7QUFDSixJQUFJSCxRQUFRLGVBQ1hBLFFBQVEsZ0JBQ1JBLFFBQVEsZ0JBQWdCO0lBQ3hCRyxhQUFhO0FBQ2QsT0FBTyxJQUFJSCxRQUFRLFlBQ2xCQSxRQUFRLGFBQ1JBLFFBQVEsaUJBQ1JBLFFBQVEsaUJBQWlCO0lBQ3pCRyxhQUFhO0FBQ2Q7QUFDQSxJQUFJLGlCQUFpQkYsS0FBSztJQUN6QkUsYUFBYUYsSUFBSUcsV0FBVyxDQUFDQyxNQUFNLEtBQUssS0FBS0MsU0FBU0wsSUFBSUcsV0FBVyxFQUFFLFFBQVE7QUFDaEY7QUFFQSxTQUFTRyxlQUFlQyxLQUFLO0lBQzVCLElBQUlBLFVBQVUsR0FBRztRQUNoQixPQUFPO0lBQ1I7SUFFQSxPQUFPO1FBQ05BO1FBQ0FDLFVBQVU7UUFDVkMsUUFBUUYsU0FBUztRQUNqQkcsUUFBUUgsU0FBUztJQUNsQjtBQUNEO0FBRUEsU0FBU0ksY0FBY0MsTUFBTTtJQUM1QixJQUFJVixlQUFlLE9BQU87UUFDekIsT0FBTztJQUNSO0lBRUEsSUFBSUgsUUFBUSxnQkFDWEEsUUFBUSxpQkFDUkEsUUFBUSxvQkFBb0I7UUFDNUIsT0FBTztJQUNSO0lBRUEsSUFBSUEsUUFBUSxjQUFjO1FBQ3pCLE9BQU87SUFDUjtJQUVBLElBQUlhLFVBQVUsQ0FBQ0EsT0FBT0MsS0FBSyxJQUFJWCxlQUFlLE1BQU07UUFDbkQsT0FBTztJQUNSO0lBRUEsTUFBTVksTUFBTVosYUFBYSxJQUFJO0lBRTdCLElBQUlELFFBQVFjLFFBQVEsS0FBSyxTQUFTO1FBQ2pDLHNFQUFzRTtRQUN0RSwwRUFBMEU7UUFDMUUsMkVBQTJFO1FBQzNFLDZFQUE2RTtRQUM3RSxnRkFBZ0Y7UUFDaEYsK0JBQStCO1FBQy9CLE1BQU1DLFlBQVluQixHQUFHb0IsT0FBTyxHQUFHQyxLQUFLLENBQUM7UUFDckMsSUFDQ0MsT0FBT2xCLFFBQVFtQixRQUFRLENBQUNDLElBQUksQ0FBQ0gsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssS0FDL0NDLE9BQU9ILFNBQVMsQ0FBQyxFQUFFLEtBQUssTUFDeEJHLE9BQU9ILFNBQVMsQ0FBQyxFQUFFLEtBQUssT0FDdkI7WUFDRCxPQUFPRyxPQUFPSCxTQUFTLENBQUMsRUFBRSxLQUFLLFFBQVEsSUFBSTtRQUM1QztRQUVBLE9BQU87SUFDUjtJQUVBLElBQUksUUFBUWhCLEtBQUs7UUFDaEIsSUFBSTtZQUFDO1lBQVU7WUFBWTtZQUFZO1NBQVksQ0FBQ3NCLElBQUksQ0FBQ0MsQ0FBQUEsT0FBUUEsUUFBUXZCLFFBQVFBLElBQUl3QixPQUFPLEtBQUssWUFBWTtZQUM1RyxPQUFPO1FBQ1I7UUFFQSxPQUFPVjtJQUNSO0lBRUEsSUFBSSxzQkFBc0JkLEtBQUs7UUFDOUIsT0FBTyxnQ0FBZ0N5QixJQUFJLENBQUN6QixJQUFJMEIsZ0JBQWdCLElBQUksSUFBSTtJQUN6RTtJQUVBLElBQUkxQixJQUFJMkIsU0FBUyxLQUFLLGFBQWE7UUFDbEMsT0FBTztJQUNSO0lBRUEsSUFBSSxrQkFBa0IzQixLQUFLO1FBQzFCLE1BQU00QixVQUFVdkIsU0FBUyxDQUFDTCxJQUFJNkIsb0JBQW9CLElBQUksRUFBQyxFQUFHWCxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtRQUV6RSxPQUFRbEIsSUFBSThCLFlBQVk7WUFDdkIsS0FBSztnQkFDSixPQUFPRixXQUFXLElBQUksSUFBSTtZQUMzQixLQUFLO2dCQUNKLE9BQU87UUFFVDtJQUNEO0lBRUEsSUFBSSxpQkFBaUJILElBQUksQ0FBQ3pCLElBQUkrQixJQUFJLEdBQUc7UUFDcEMsT0FBTztJQUNSO0lBRUEsSUFBSSw4REFBOEROLElBQUksQ0FBQ3pCLElBQUkrQixJQUFJLEdBQUc7UUFDakYsT0FBTztJQUNSO0lBRUEsSUFBSSxlQUFlL0IsS0FBSztRQUN2QixPQUFPO0lBQ1I7SUFFQSxJQUFJQSxJQUFJK0IsSUFBSSxLQUFLLFFBQVE7UUFDeEIsT0FBT2pCO0lBQ1I7SUFFQSxPQUFPQTtBQUNSO0FBRUEsU0FBU2tCLGdCQUFnQnBCLE1BQU07SUFDOUIsTUFBTUwsUUFBUUksY0FBY0M7SUFDNUIsT0FBT04sZUFBZUM7QUFDdkI7QUFFQTBCLE9BQU9DLE9BQU8sR0FBRztJQUNoQnZCLGVBQWVxQjtJQUNmRyxRQUFRSCxnQkFBZ0IvQixRQUFRa0MsTUFBTTtJQUN0Q0MsUUFBUUosZ0JBQWdCL0IsUUFBUW1DLE1BQU07QUFDdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wbGFtb25hLWRlcGxveS8uL25vZGVfbW9kdWxlcy9zdXBwb3J0cy1jb2xvci9pbmRleC5qcz83YmI5Il0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcbmNvbnN0IG9zID0gcmVxdWlyZSgnb3MnKTtcbmNvbnN0IGhhc0ZsYWcgPSByZXF1aXJlKCdoYXMtZmxhZycpO1xuXG5jb25zdCBlbnYgPSBwcm9jZXNzLmVudjtcblxubGV0IGZvcmNlQ29sb3I7XG5pZiAoaGFzRmxhZygnbm8tY29sb3InKSB8fFxuXHRoYXNGbGFnKCduby1jb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj1mYWxzZScpKSB7XG5cdGZvcmNlQ29sb3IgPSBmYWxzZTtcbn0gZWxzZSBpZiAoaGFzRmxhZygnY29sb3InKSB8fFxuXHRoYXNGbGFnKCdjb2xvcnMnKSB8fFxuXHRoYXNGbGFnKCdjb2xvcj10cnVlJykgfHxcblx0aGFzRmxhZygnY29sb3I9YWx3YXlzJykpIHtcblx0Zm9yY2VDb2xvciA9IHRydWU7XG59XG5pZiAoJ0ZPUkNFX0NPTE9SJyBpbiBlbnYpIHtcblx0Zm9yY2VDb2xvciA9IGVudi5GT1JDRV9DT0xPUi5sZW5ndGggPT09IDAgfHwgcGFyc2VJbnQoZW52LkZPUkNFX0NPTE9SLCAxMCkgIT09IDA7XG59XG5cbmZ1bmN0aW9uIHRyYW5zbGF0ZUxldmVsKGxldmVsKSB7XG5cdGlmIChsZXZlbCA9PT0gMCkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB7XG5cdFx0bGV2ZWwsXG5cdFx0aGFzQmFzaWM6IHRydWUsXG5cdFx0aGFzMjU2OiBsZXZlbCA+PSAyLFxuXHRcdGhhczE2bTogbGV2ZWwgPj0gM1xuXHR9O1xufVxuXG5mdW5jdGlvbiBzdXBwb3J0c0NvbG9yKHN0cmVhbSkge1xuXHRpZiAoZm9yY2VDb2xvciA9PT0gZmFsc2UpIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGlmIChoYXNGbGFnKCdjb2xvcj0xNm0nKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPWZ1bGwnKSB8fFxuXHRcdGhhc0ZsYWcoJ2NvbG9yPXRydWVjb2xvcicpKSB7XG5cdFx0cmV0dXJuIDM7XG5cdH1cblxuXHRpZiAoaGFzRmxhZygnY29sb3I9MjU2JykpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdGlmIChzdHJlYW0gJiYgIXN0cmVhbS5pc1RUWSAmJiBmb3JjZUNvbG9yICE9PSB0cnVlKSB7XG5cdFx0cmV0dXJuIDA7XG5cdH1cblxuXHRjb25zdCBtaW4gPSBmb3JjZUNvbG9yID8gMSA6IDA7XG5cblx0aWYgKHByb2Nlc3MucGxhdGZvcm0gPT09ICd3aW4zMicpIHtcblx0XHQvLyBOb2RlLmpzIDcuNS4wIGlzIHRoZSBmaXJzdCB2ZXJzaW9uIG9mIE5vZGUuanMgdG8gaW5jbHVkZSBhIHBhdGNoIHRvXG5cdFx0Ly8gbGlidXYgdGhhdCBlbmFibGVzIDI1NiBjb2xvciBvdXRwdXQgb24gV2luZG93cy4gQW55dGhpbmcgZWFybGllciBhbmQgaXRcblx0XHQvLyB3b24ndCB3b3JrLiBIb3dldmVyLCBoZXJlIHdlIHRhcmdldCBOb2RlLmpzIDggYXQgbWluaW11bSBhcyBpdCBpcyBhbiBMVFNcblx0XHQvLyByZWxlYXNlLCBhbmQgTm9kZS5qcyA3IGlzIG5vdC4gV2luZG93cyAxMCBidWlsZCAxMDU4NiBpcyB0aGUgZmlyc3QgV2luZG93c1xuXHRcdC8vIHJlbGVhc2UgdGhhdCBzdXBwb3J0cyAyNTYgY29sb3JzLiBXaW5kb3dzIDEwIGJ1aWxkIDE0OTMxIGlzIHRoZSBmaXJzdCByZWxlYXNlXG5cdFx0Ly8gdGhhdCBzdXBwb3J0cyAxNm0vVHJ1ZUNvbG9yLlxuXHRcdGNvbnN0IG9zUmVsZWFzZSA9IG9zLnJlbGVhc2UoKS5zcGxpdCgnLicpO1xuXHRcdGlmIChcblx0XHRcdE51bWJlcihwcm9jZXNzLnZlcnNpb25zLm5vZGUuc3BsaXQoJy4nKVswXSkgPj0gOCAmJlxuXHRcdFx0TnVtYmVyKG9zUmVsZWFzZVswXSkgPj0gMTAgJiZcblx0XHRcdE51bWJlcihvc1JlbGVhc2VbMl0pID49IDEwNTg2XG5cdFx0KSB7XG5cdFx0XHRyZXR1cm4gTnVtYmVyKG9zUmVsZWFzZVsyXSkgPj0gMTQ5MzEgPyAzIDogMjtcblx0XHR9XG5cblx0XHRyZXR1cm4gMTtcblx0fVxuXG5cdGlmICgnQ0knIGluIGVudikge1xuXHRcdGlmIChbJ1RSQVZJUycsICdDSVJDTEVDSScsICdBUFBWRVlPUicsICdHSVRMQUJfQ0knXS5zb21lKHNpZ24gPT4gc2lnbiBpbiBlbnYpIHx8IGVudi5DSV9OQU1FID09PSAnY29kZXNoaXAnKSB7XG5cdFx0XHRyZXR1cm4gMTtcblx0XHR9XG5cblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0aWYgKCdURUFNQ0lUWV9WRVJTSU9OJyBpbiBlbnYpIHtcblx0XHRyZXR1cm4gL14oOVxcLigwKlsxLTldXFxkKilcXC58XFxkezIsfVxcLikvLnRlc3QoZW52LlRFQU1DSVRZX1ZFUlNJT04pID8gMSA6IDA7XG5cdH1cblxuXHRpZiAoZW52LkNPTE9SVEVSTSA9PT0gJ3RydWVjb2xvcicpIHtcblx0XHRyZXR1cm4gMztcblx0fVxuXG5cdGlmICgnVEVSTV9QUk9HUkFNJyBpbiBlbnYpIHtcblx0XHRjb25zdCB2ZXJzaW9uID0gcGFyc2VJbnQoKGVudi5URVJNX1BST0dSQU1fVkVSU0lPTiB8fCAnJykuc3BsaXQoJy4nKVswXSwgMTApO1xuXG5cdFx0c3dpdGNoIChlbnYuVEVSTV9QUk9HUkFNKSB7XG5cdFx0XHRjYXNlICdpVGVybS5hcHAnOlxuXHRcdFx0XHRyZXR1cm4gdmVyc2lvbiA+PSAzID8gMyA6IDI7XG5cdFx0XHRjYXNlICdBcHBsZV9UZXJtaW5hbCc6XG5cdFx0XHRcdHJldHVybiAyO1xuXHRcdFx0Ly8gTm8gZGVmYXVsdFxuXHRcdH1cblx0fVxuXG5cdGlmICgvLTI1Nihjb2xvcik/JC9pLnRlc3QoZW52LlRFUk0pKSB7XG5cdFx0cmV0dXJuIDI7XG5cdH1cblxuXHRpZiAoL15zY3JlZW58Xnh0ZXJtfF52dDEwMHxednQyMjB8XnJ4dnR8Y29sb3J8YW5zaXxjeWd3aW58bGludXgvaS50ZXN0KGVudi5URVJNKSkge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKCdDT0xPUlRFUk0nIGluIGVudikge1xuXHRcdHJldHVybiAxO1xuXHR9XG5cblx0aWYgKGVudi5URVJNID09PSAnZHVtYicpIHtcblx0XHRyZXR1cm4gbWluO1xuXHR9XG5cblx0cmV0dXJuIG1pbjtcbn1cblxuZnVuY3Rpb24gZ2V0U3VwcG9ydExldmVsKHN0cmVhbSkge1xuXHRjb25zdCBsZXZlbCA9IHN1cHBvcnRzQ29sb3Ioc3RyZWFtKTtcblx0cmV0dXJuIHRyYW5zbGF0ZUxldmVsKGxldmVsKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG5cdHN1cHBvcnRzQ29sb3I6IGdldFN1cHBvcnRMZXZlbCxcblx0c3Rkb3V0OiBnZXRTdXBwb3J0TGV2ZWwocHJvY2Vzcy5zdGRvdXQpLFxuXHRzdGRlcnI6IGdldFN1cHBvcnRMZXZlbChwcm9jZXNzLnN0ZGVycilcbn07XG4iXSwibmFtZXMiOlsib3MiLCJyZXF1aXJlIiwiaGFzRmxhZyIsImVudiIsInByb2Nlc3MiLCJmb3JjZUNvbG9yIiwiRk9SQ0VfQ09MT1IiLCJsZW5ndGgiLCJwYXJzZUludCIsInRyYW5zbGF0ZUxldmVsIiwibGV2ZWwiLCJoYXNCYXNpYyIsImhhczI1NiIsImhhczE2bSIsInN1cHBvcnRzQ29sb3IiLCJzdHJlYW0iLCJpc1RUWSIsIm1pbiIsInBsYXRmb3JtIiwib3NSZWxlYXNlIiwicmVsZWFzZSIsInNwbGl0IiwiTnVtYmVyIiwidmVyc2lvbnMiLCJub2RlIiwic29tZSIsInNpZ24iLCJDSV9OQU1FIiwidGVzdCIsIlRFQU1DSVRZX1ZFUlNJT04iLCJDT0xPUlRFUk0iLCJ2ZXJzaW9uIiwiVEVSTV9QUk9HUkFNX1ZFUlNJT04iLCJURVJNX1BST0dSQU0iLCJURVJNIiwiZ2V0U3VwcG9ydExldmVsIiwibW9kdWxlIiwiZXhwb3J0cyIsInN0ZG91dCIsInN0ZGVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(action-browser)/./node_modules/supports-color/index.js\n");

/***/ })

};
;