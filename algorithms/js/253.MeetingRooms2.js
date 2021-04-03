/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
    if (intervals.length === 1) {
        return 1;
    }

    intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    let meetingRooms = [];

    let max = -Infinity;
    for (let i = 0; i < intervals.length; i++) {
        meetingRooms.push(intervals[i]);

        for (let j = 0; j < meetingRooms.length - 1; j++) {
            if (meetingRooms[j][1] <= intervals[i][0]) {
                meetingRooms.splice(j, 1);
            }
        }
        max = Math.max(max, meetingRooms.length);
    }

    return max;
};
