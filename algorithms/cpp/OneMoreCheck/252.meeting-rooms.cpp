class Solution {
 public:
  bool canAttendMeetings(vector<vector<int>>& intervals) {
    //  [0,30], [5,10], [15,20]
    //  [3,10], [5,10], [15,20]
    //  [7,10], [2,4]

    for (auto pair1 : intervals) {
      int start = pair1[0];
      int end = pair1[1];
      for (auto pair2 : intervals) {
        if (pair2[0] < end && end < pair2[1]) {
          return false;
        } else if (pair2[0] < start && start < pair2[0]) {
          return false;
        }
      }
    }

    for (int i = 0; i < intervals.size(); i++) {
      auto pair1 = intervals[i];
      int start = pair1[0];
      int end = pair1[1];

      for (int j = i + 1; j < intervals.size(); j++) {
        auto pair2 = intervals[j];
        if (pair2[0] < end && end <= pair2[1]) {
          return false;
        } else if (pair2[0] <= start && start < pair2[1]) {
          return false;
        }
      }
    }

    return true;
  }
};
