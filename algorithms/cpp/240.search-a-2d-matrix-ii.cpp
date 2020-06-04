class Solution {
 public:
  bool searchMatrix(vector<vector<int>>& matrix, int target) {
    if (matrix.size() == 0) {
      return false;
    }

    if (matrix[0].size() == 0) {
      return false;
    }

    int c_index = -1;
    int r_index = -1;
    for (auto& value : matrix[0]) {
      if (value == target) {
        return true;
      } else if (value < target) {
        c_index++;
      } else {
        break;
      }
    }

    int rows = matrix.size();
    for (int i = 0; i < rows; ++i) {
      if (matrix[i][0] == target) {
        return true;
      } else if (matrix[i][0] < target) {
        r_index++;
      } else {
        break;
      }
    }

    for (auto it = matrix.begin(); (it - matrix.begin()) <= r_index; ++it) {
      auto left = (*it).begin();
      auto right = (*it).begin() + c_index;
      while (left <= right) {
        auto mid = left + (right - left) / 2;
        if (*mid == target) {
          return true;
        } else if (*mid < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
    return false;
  }
};
/*
  bool binarySearch(vector<int>& matrix, int target) {
      int left = 0;
      int right = matrix.size()-1;
      while (left <= right) {
          int mid = (left+right)/2;
          if (matrix[mid] == target) {
              return true;
          } else if (matrix[mid] < target) {
              left = mid +1 ;
              //cout<<"left: "<<left<<endl;
          } else {
              right = mid -1;
              //cout<<"right: "<<right<<endl;
          }
      }
      return false;
  }
*/
